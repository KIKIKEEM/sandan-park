import { Bell, Flame } from "lucide-react";
import { user } from "@/data/mock";

export default function TopHeader({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-30 px-5 pt-4 pb-3 glass border-b border-white/5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] text-white/50">
            {user.location} · Lv.{user.level} {user.levelName}
          </div>
          <div className="text-lg font-bold">{title ?? `안녕, ${user.name}님`}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-orange-500/15 text-orange-300 px-2.5 py-1 rounded-full text-xs font-bold">
            <Flame size={14} />
            {user.streak}일
          </div>
          <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <Bell size={16} className="text-white/80" />
          </button>
        </div>
      </div>
    </header>
  );
}
