"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Users, User } from "lucide-react";

const items = [
  { href: "/", label: "홈", icon: Home },
  { href: "/map", label: "산단맵", icon: Map },
  { href: "/tribe", label: "트라이브", icon: Users },
  { href: "/profile", label: "프로필", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50">
      <div className="glass border-t border-white/10 flex items-center justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all ${
                active ? "text-brand" : "text-white/60"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.4 : 2} />
              <span className={`text-[10px] ${active ? "font-bold" : ""}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
