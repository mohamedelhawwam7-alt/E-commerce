"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useToast } from "./ToastContext";
import { useAuth } from "./AuthContext";
import {
  addToServerCart,
  removeServerCartItem,
  updateServerCartItem,
  getServerCart,
  clearServerCart,
  addToServerWishlist,
  removeFromServerWishlist,
  getServerWishlist,
} from "@/lib/api";

export interface ProductItem {
  id: string;
  title: string;
  price: number;
  imageCover: string;
}

export interface CartItem extends ProductItem {
  quantity: number;
}

interface AppContextType {
  cart: CartItem[];
  wishlist: ProductItem[];
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  cartId: string | null;
  isReady: boolean;
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: ProductItem) => void;
  isInWishlist: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

function readStorage<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function mapServerCart(res: any): { items: CartItem[]; cartId: string | null } {
  const products = res?.data?.products || [];
  return {
    items: products.map((p: any) => ({
      id: p.product?._id || p.product,
      title: p.product?.title || "",
      price: p.price,
      imageCover: p.product?.imageCover || "",
      quantity: p.count,
    })),
    cartId: res?.cartId || res?.data?._id || null,
  };
}

function mapServerWishlist(res: any): ProductItem[] {
  const items = res?.data || [];
  return items.map((p: any) => ({
    id: p._id,
    title: p.title,
    price: p.price,
    imageCover: p.imageCover,
  }));
}

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showToast } = useToast();
  const { token, isAuthenticated, isReady: authReady } = useAuth();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<ProductItem[]>([]);
  const [cartId, setCartId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);


  useEffect(() => {
    if (!authReady) return;

    if (isAuthenticated && token) {
      setIsReady(false);
      Promise.all([getServerCart(token), getServerWishlist(token)])
        .then(([cartRes, wishlistRes]) => {
          const mapped = mapServerCart(cartRes);
          setCart(mapped.items);
          setCartId(mapped.cartId);
          setWishlist(mapServerWishlist(wishlistRes));
        })
        .catch(() => {
          setCart([]);
          setWishlist([]);
        })
        .finally(() => setIsReady(true));
    } else {
      setCart(readStorage<CartItem>(CART_KEY));
      setWishlist(readStorage<ProductItem>(WISHLIST_KEY));
      setCartId(null);
      setIsReady(true);
    }
  }, [authReady, isAuthenticated, token]);

  useEffect(() => {
    if (!isReady || isAuthenticated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, isReady, isAuthenticated]);

  useEffect(() => {
    if (!isReady || isAuthenticated) return;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, isReady, isAuthenticated]);


  useEffect(() => {
    if (isAuthenticated) return;
    const onStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY) setCart(readStorage<CartItem>(CART_KEY));
      if (e.key === WISHLIST_KEY)
        setWishlist(readStorage<ProductItem>(WISHLIST_KEY));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [isAuthenticated]);

  const addToCart = useCallback(
    (product: ProductItem, quantity = 1) => {
      if (isAuthenticated && token) {
        addToServerCart(token, product.id)
          .then(res => {
            const alreadyHas = cart.some(item => item.id === product.id);
            const targetQty =
              (alreadyHas
                ? cart.find(item => item.id === product.id)!.quantity
                : 0) + quantity;
            return targetQty > 1
              ? updateServerCartItem(token, product.id, targetQty)
              : res;
          })
          .then(res => {
            const mapped = mapServerCart(res);
            setCart(mapped.items);
            setCartId(mapped.cartId);
            showToast("Added to cart");
          })
          .catch(() => showToast("Could not add to cart", "error"));
        return;
      }

      setCart(prev => {
        const existingIndex = prev.findIndex(item => item.id === product.id);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        }
        return [...prev, { ...product, quantity }];
      });
      showToast("Added to cart");
    },
    [isAuthenticated, token, cart, showToast],
  );

  const removeFromCart = useCallback(
    (id: string) => {
      if (isAuthenticated && token) {
        removeServerCartItem(token, id)
          .then(res => {
            const mapped = mapServerCart(res);
            setCart(mapped.items);
            setCartId(mapped.cartId);
            showToast("Removed from cart", "info");
          })
          .catch(() => showToast("Could not remove item", "error"));
        return;
      }

      setCart(prev => prev.filter(item => item.id !== id));
      showToast("Removed from cart", "info");
    },
    [isAuthenticated, token, showToast],
  );

  const updateCartQuantity = useCallback(
    (id: string, quantity: number) => {
      if (isAuthenticated && token) {
        const req =
          quantity < 1
            ? removeServerCartItem(token, id)
            : updateServerCartItem(token, id, quantity);
        req
          .then(res => {
            const mapped = mapServerCart(res);
            setCart(mapped.items);
            setCartId(mapped.cartId);
          })
          .catch(() => showToast("Could not update quantity", "error"));
        return;
      }

      setCart(prev => {
        if (quantity < 1) return prev.filter(item => item.id !== id);
        return prev.map(item =>
          item.id === id ? { ...item, quantity } : item,
        );
      });
    },
    [isAuthenticated, token, showToast],
  );

  const clearCart = useCallback(() => {
    if (isAuthenticated && token) {
      clearServerCart(token).catch(() => {});
    }
    setCart([]);
  }, [isAuthenticated, token]);

  const toggleWishlist = useCallback(
    (product: ProductItem) => {
      const exists = wishlist.some(item => item.id === product.id);

      if (isAuthenticated && token) {
        const req = exists
          ? removeFromServerWishlist(token, product.id)
          : addToServerWishlist(token, product.id);
        req
          .then(res => setWishlist(mapServerWishlist(res)))
          .catch(() => showToast("Could not update wishlist", "error"));
        showToast(
          exists ? "Removed from wishlist" : "Added to wishlist",
          exists ? "info" : "success",
        );
        return;
      }

      setWishlist(prev =>
        exists
          ? prev.filter(item => item.id !== product.id)
          : [...prev, product],
      );
      showToast(
        exists ? "Removed from wishlist" : "Added to wishlist",
        exists ? "info" : "success",
      );
    },
    [wishlist, isAuthenticated, token, showToast],
  );

  const isInWishlist = useCallback(
    (id: string) => wishlist.some(item => item.id === id),
    [wishlist],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      cartCount,
      wishlistCount: wishlist.length,
      cartTotal,
      cartId,
      isReady,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      toggleWishlist,
      isInWishlist,
    }),
    [
      cart,
      wishlist,
      cartCount,
      cartTotal,
      cartId,
      isReady,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      toggleWishlist,
      isInWishlist,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useApp must be used within AppContextProvider");
  return context;
};
