import "./globals.css";
import Navbar from "./_component/Navbar/page";
import TopNavbar from "./_component/Navbar/TopNavbar";
import { AppContextProvider } from "../context/CartWishlistContext";
import { AuthProvider } from "../context/AuthContext";
import { ToastProvider } from "../context/ToastContext";
import Footer from "./_component/footer/Footer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "FreshCart",
  description: "Ecomerce",
  icons: {
    icon: "/remove-from-cart.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col antialiased"
        suppressHydrationWarning={true}
      >
        <ToastProvider>
          <AuthProvider>
            <AppContextProvider>
              <TopNavbar />
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
