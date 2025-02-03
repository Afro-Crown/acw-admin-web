"use client";

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
      <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
        <Navbar menuItems={authMenuItems} />
        {children}
      </main>
    </AuthenticatedOnlyFeature>
  );
}
