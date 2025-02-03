import Link from "next/link";

import PublicOnlyFeature from "@/components/templates/Public/public";

export default function Home() {
  return (
    <PublicOnlyFeature>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold underline">LANDING PAGE</h1>
        <Link href="/login">Login Page</Link>
        <Link href="/sign-up">Signup Page</Link>
        <Link href="/admin/users">Admin Page</Link>
      </main>
    </PublicOnlyFeature>
  );
}
