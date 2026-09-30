"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Package,
  MapPin,
  Loader2,
  Trash2,
  Plus,
  X,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import {
  decodeToken,
  getUserOrders,
  getAddresses,
  addAddress,
  removeAddress,
  updateProfile,
  changeUserPassword,
  ApiError,
} from "@/lib/api";

type Tab = "orders" | "addresses" | "profile";

export default function AccountDashboard() {
  const router = useRouter();
  const { user, token, isAuthenticated, isReady, updateUser, updateToken } = useAuth();
  const { showToast } = useToast();

  const [tab, setTab] = useState<Tab>("orders");
  const [orders, setOrders] = useState<any[]>([]);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState({ name: "", details: "", phone: "", city: "" });
  const [profileForm, setProfileForm] = useState({ name: "", email: "", phone: "" });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    password: "",
    rePassword: "",
  });
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [profileError, setProfileError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.push("/signin");
    }
  }, [isReady, isAuthenticated, router]);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    const { id } = decodeToken(token);

    Promise.all([
      id ? getUserOrders(id) : Promise.resolve([]),
      getAddresses(token),
    ]).then(([ordersData, addressesData]) => {
      setOrders(ordersData || []);
      setAddresses(addressesData || []);
      setLoading(false);
    });
  }, [token]);

  useEffect(() => {
    if (user) {
      setProfileForm({ name: user.name || "", email: user.email || "", phone: "" });
    }
  }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setProfileError("");
    setSavingProfile(true);
    try {
      const res = await updateProfile(token, profileForm);
      updateUser(res.user || profileForm);
      showToast("Profile updated");
    } catch (err) {
      setProfileError(err instanceof ApiError ? err.message : "Could not update profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setPasswordError("");
    setSavingPassword(true);
    try {
      const res = await changeUserPassword(token, passwordForm);
      if (res.token) updateToken(res.token);
      setPasswordForm({ currentPassword: "", password: "", rePassword: "" });
      showToast("Password changed");
    } catch (err) {
      setPasswordError(err instanceof ApiError ? err.message : "Could not change password.");
    } finally {
      setSavingPassword(false);
    }
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    try {
      const res = await addAddress(token, form);
      setAddresses(res?.data || []);
      setForm({ name: "", details: "", phone: "", city: "" });
      setShowAddForm(false);
      showToast("Address added");
    } catch {
      showToast("Could not add address", "error");
    }
  };

  const handleRemoveAddress = async (id: string) => {
    if (!token) return;
    try {
      const res = await removeAddress(token, id);
      setAddresses(res?.data || []);
      showToast("Address removed", "info");
    } catch {
      showToast("Could not remove address", "error");
    }
  };

  if (!isReady || !isAuthenticated) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        My Account
      </h1>

      <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">
        {[
          { key: "orders", label: "Orders", icon: Package },
          { key: "addresses", label: "Addresses", icon: MapPin },
          { key: "profile", label: "Profile", icon: User },
        ].map(t => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key as Tab)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer whitespace-nowrap ${
              tab === t.key
                ? "border-emerald-600 text-emerald-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <t.icon size={16} />
            {t.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16 text-emerald-600">
          <Loader2 className="animate-spin" size={28} />
        </div>
      ) : (
        <>
          {tab === "orders" && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <p className="text-gray-500 text-center py-10">
                  You have no orders yet.
                </p>
              ) : (
                orders.map((order: any) => (
                  <div
                    key={order._id}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-800 text-sm">
                        Order #{order.id || order._id?.slice(-6)}
                      </span>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          order.isPaid
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {order.isPaid ? "Paid" : "Cash on Delivery"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {order.cartItems?.length || 0} item(s) &middot;{" "}
                      {order.totalOrderPrice} EGP
                    </p>
                  </div>
                ))
              )}
            </div>
          )}

          {tab === "addresses" && (
            <div className="space-y-4">
              {addresses.map((addr: any) => (
                <div
                  key={addr._id}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-xs"
                >
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{addr.name}</p>
                    <p className="text-sm text-gray-500">
                      {addr.details}, {addr.city} &middot; {addr.phone}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAddress(addr._id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              {showAddForm ? (
                <form
                  onSubmit={handleAddAddress}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-gray-800">
                      New Address
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  {["name", "details", "phone", "city"].map(field => (
                    <input
                      key={field}
                      required
                      value={(form as any)[field]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      placeholder={field[0].toUpperCase() + field.slice(1)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                    />
                  ))}
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg text-sm cursor-pointer"
                  >
                    Save Address
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm cursor-pointer"
                >
                  <Plus size={16} /> Add New Address
                </button>
              )}
            </div>
          )}

          {tab === "profile" && (
            <div className="space-y-6">
              <form
                onSubmit={handleUpdateProfile}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-3"
              >
                <h3 className="font-bold text-gray-800 text-sm mb-1">
                  Profile Info
                </h3>
                {profileError && (
                  <p className="text-red-500 text-xs font-medium">{profileError}</p>
                )}
                <input
                  required
                  value={profileForm.name}
                  onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <input
                  required
                  type="email"
                  value={profileForm.email}
                  onChange={e => setProfileForm({ ...profileForm, email: e.target.value })}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <input
                  value={profileForm.phone}
                  onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })}
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  disabled={savingProfile}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold py-2 px-5 rounded-lg text-sm cursor-pointer"
                >
                  {savingProfile ? "Saving..." : "Save Changes"}
                </button>
              </form>

              <form
                onSubmit={handleChangePassword}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-3"
              >
                <h3 className="font-bold text-gray-800 text-sm mb-1">
                  Change Password
                </h3>
                {passwordError && (
                  <p className="text-red-500 text-xs font-medium">{passwordError}</p>
                )}
                <input
                  required
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={e =>
                    setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                  }
                  placeholder="Current password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <input
                  required
                  type="password"
                  minLength={6}
                  value={passwordForm.password}
                  onChange={e => setPasswordForm({ ...passwordForm, password: e.target.value })}
                  placeholder="New password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <input
                  required
                  type="password"
                  value={passwordForm.rePassword}
                  onChange={e =>
                    setPasswordForm({ ...passwordForm, rePassword: e.target.value })
                  }
                  placeholder="Confirm new password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  disabled={savingPassword}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold py-2 px-5 rounded-lg text-sm cursor-pointer"
                >
                  {savingPassword ? "Saving..." : "Change Password"}
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}
