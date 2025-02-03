import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@/config/firebase";

import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import AuthProvider from "@providers/Auth";
import QueryClientProviderApp from "@providers/QueryClientApp";
import UserProvider from "@providers/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firebase Boilerplate",
  description: "Firebase boilerplate to get started quickly"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProviderApp>
        <AuthProvider>
          <UserProvider>
            <body className={inter.className}>
              <ToastContainer />
              {children}
            </body>
          </UserProvider>
        </AuthProvider>
      </QueryClientProviderApp>
    </html>
  );
}
