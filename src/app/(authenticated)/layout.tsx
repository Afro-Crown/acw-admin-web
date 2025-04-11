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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </AuthenticatedOnlyFeature>
  );
}
