"use client";

import Footer from "@/components/molecules/Footer/footer";
import Header from "@/components/molecules/Header/header";
import AuthenticatedOnlyFeature from "@templates/Authenticated/authenticated";

// const authMenuItems = [
//   {
//     label: "Home",
//     href: "/home"
//   },
//   {
//     label: "Profile",
//     href: "/profile"
//   }
// ];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticatedOnlyFeature>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AuthenticatedOnlyFeature>
  );
}
