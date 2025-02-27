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
      <main className="flex min-h-screen flex-col justify-between">
        <Header />
        {children}
        <div className="mt-10">
          <Footer />
        </div>
      </main>
    </AuthenticatedOnlyFeature>
  );
}
