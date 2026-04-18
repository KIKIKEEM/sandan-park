"use client";

import { usePathname } from "next/navigation";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSlides = pathname?.startsWith("/slides");
  if (isSlides) {
    return <>{children}</>;
  }
  return (
    <div className="mx-auto max-w-[480px] min-h-screen relative pb-20">
      {children}
    </div>
  );
}
