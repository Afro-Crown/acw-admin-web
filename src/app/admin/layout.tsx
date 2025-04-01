"use client";

import Navbar from "@containers/Navbar/navbar";
import AdministratorOnlyFeature from "@templates/Administrator/administrator";

const adminMenuItems = [
  {
    label: "Home",
    href: "/admin"
  },
  {
    label: "Users",
    href: "/admin/users"
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdministratorOnlyFeature>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
        <Navbar menuItems={adminMenuItems} />
        {children}
      </main>
    </AdministratorOnlyFeature>
  );
}
