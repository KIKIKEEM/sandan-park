import { Coins } from "lucide-react";

export default function CoinPill({ coins }: { coins: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/20">
      <Coins size={14} />
      <span className="font-bold text-sm tabular-nums">{coins.toLocaleString()}</span>
      <span className="text-[10px] text-yellow-300/70">SDC</span>
    </div>
  );
}
