import { IProduct } from "@/interface/product.interface";
import { Category } from "@/interface/category.interface";

export const API_BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export function decodeToken(token: string): { id?: string; [k: string]: any } {
  try {
    const payload = token.split(".")[1];
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  } catch {
    return {};
  }
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

interface RequestOptions extends RequestInit {
  revalidate?: number;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { revalidate, ...init } = options;

  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers || {}),
      },
      ...(revalidate !== undefined ? { next: { revalidate } } : {}),
    });
  } catch {
    throw new ApiError("Network error. Please check your connection.", 0);
  }

  let body: any = null;
  try {
    body = await res.json();
  } catch {

  }

  if (!res.ok) {
    const message = body?.message || body?.errors?.msg || "Something went wrong. Please try again.";
    throw new ApiError(message, res.status);
  }

  return body as T;
}

export interface AuthResponse {
  message: string;
  user: { name: string; email: string; role?: string };
  token: string;
}

export function signIn(email: string, password: string) {
  return request<AuthResponse>("/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function signUp(payload: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}) {
  return request<AuthResponse>("/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function forgotPassword(email: string) {
  return request<{ statusMsg: string; message: string }>(
    "/auth/forgotPasswords",
    { method: "POST", body: JSON.stringify({ email }) },
  );
}

export function verifyResetCode(resetCode: string) {
  return request<{ status: string }>("/auth/verifyResetCode", {
    method: "POST",
    body: JSON.stringify({ resetCode }),
  });
}

export function resetPassword(email: string, newPassword: string) {
  return request<{ token: string }>("/auth/resetPassword", {
    method: "PUT",
    body: JSON.stringify({ email, newPassword }),
  });
}

export async function getProducts(): Promise<IProduct[]> {
  try {
    const data = await request<{ data: IProduct[] }>("/products", {
      revalidate: 120,
    });
    return data.data || [];
  } catch {
    return [];
  }
}

export async function getProduct(id: string): Promise<IProduct | null> {
  try {
    const data = await request<{ data: IProduct }>(`/products/${id}`, {
      revalidate: 120,
    });
    return data.data || null;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const data = await request<{ data: Category[] }>("/categories", {
      revalidate: 3600,
    });
    return data.data || [];
  } catch {
    return [];
  }
}

export async function getCategory(id: string): Promise<Category | null> {
  try {
    const data = await request<{ data: Category }>(`/categories/${id}`, {
      revalidate: 60,
    });
    return data.data || null;
  } catch {
    return null;
  }
}

export async function getSubcategories(categoryId: string) {
  try {
    const data = await request<{ data: any[] }>(
      `/categories/${categoryId}/subcategories`,
      { revalidate: 60 },
    );
    return data.data || [];
  } catch {
    return [];
  }
}

export async function getBrands(): Promise<any[]> {
  try {
    const data = await request<{ data: any[] }>("/brands", {
      revalidate: 3600,
    });
    return data.data || [];
  } catch {
    return [];
  }
}

export async function getBrand(id: string) {
  try {
    const data = await request<{ data: any }>(`/brands/${id}`, {
      revalidate: 60,
    });
    return data.data || null;
  } catch {
    return null;
  }
}

function authHeaders(token: string) {
  return { token };
}

export function addToServerCart(token: string, productId: string) {
  return request<any>("/cart", {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify({ productId }),
  });
}

export function getServerCart(token: string) {
  return request<any>("/cart", { headers: authHeaders(token) });
}

export function updateServerCartItem(
  token: string,
  productId: string,
  count: number,
) {
  return request<any>(`/cart/${productId}`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify({ count }),
  });
}

export function removeServerCartItem(token: string, productId: string) {
  return request<any>(`/cart/${productId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

export function clearServerCart(token: string) {
  return request<any>("/cart", {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

export function addToServerWishlist(token: string, productId: string) {
  return request<any>("/wishlist", {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify({ productId }),
  });
}

export function removeFromServerWishlist(token: string, productId: string) {
  return request<any>(`/wishlist/${productId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

export function getServerWishlist(token: string) {
  return request<any>("/wishlist", { headers: authHeaders(token) });
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export function createCashOrder(
  token: string,
  cartId: string,
  shippingAddress: ShippingAddress,
) {
  return request<any>(`/orders/${cartId}`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify({ shippingAddress }),
  });
}

export function createOnlineCheckoutSession(
  token: string,
  cartId: string,
  shippingAddress: ShippingAddress,
  returnUrl: string,
) {
  return request<any>(
    `/orders/checkout-session/${cartId}?url=${encodeURIComponent(returnUrl)}`,
    {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify({ shippingAddress }),
    },
  );
}

export async function getUserOrders(userId: string) {
  try {
    const data = await request<any[]>(`/orders/user/${userId}`);
    return data || [];
  } catch {
    return [];
  }
}

export function addAddress(token: string, address: ShippingAddress & { name: string }) {
  return request<any>("/addresses", {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(address),
  });
}

export async function getAddresses(token: string) {
  try {
    const data = await request<{ data: any[] }>("/addresses", {
      headers: authHeaders(token),
    });
    return data.data || [];
  } catch {
    return [];
  }
}

export function removeAddress(token: string, addressId: string) {
  return request<any>(`/addresses/${addressId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

export function updateProfile(
  token: string,
  payload: { name: string; email: string; phone: string },
) {
  return request<{ user: any }>("/users/updateMe/", {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function changeUserPassword(
  token: string,
  payload: { currentPassword: string; password: string; rePassword: string },
) {
  return request<{ token: string }>("/users/changeMyPassword", {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

