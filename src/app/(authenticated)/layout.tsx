"use client";

import Header from "@/components/molecules/Header/header";
import Footer from "@/components/molecules/Footer/footer";
import Navbar from "@containers/Navbar/navbar";
import AuthenticatedOnlyFeature from "@templates/Authenticated/authenticated";

const authMenuItems = [
  {
    label: "Home",
    href: "/home"
  },
  {
    label: "Profile",
    href: "/profile"
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticatedOnlyFeature>
      <main className="">
        <Header/>
        {children}
        <Footer/>
      </main>
    </AuthenticatedOnlyFeature>
  );
}
