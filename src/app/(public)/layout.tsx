"use client";

import PublicOnlyFeature from "@templates/Public/public";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PublicOnlyFeature>
      <section>{children}</section>
    </PublicOnlyFeature>
  );
}
