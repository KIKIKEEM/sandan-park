"use client";

import { useState } from "react";
import { Check, Coins, Zap } from "lucide-react";
import type { Quest } from "@/data/mock";

export default function QuestCard({ quest, onComplete }: { quest: Quest; onComplete?: (q: Quest) => void }) {
  const [done, setDone] = useState(quest.completed);
  const [popping, setPopping] = useState(false);

  const handleClick = () => {
    if (done) return;
    setDone(true);
    setPopping(true);
    onComplete?.(quest);
    setTimeout(() => setPopping(false), 900);
  };

  return (
    <div
      className={`relative rounded-2xl p-4 border transition-all ${
        done
          ? "bg-emerald-500/10 border-emerald-500/30"
          : "bg-white/5 border-white/10 hover:bg-white/10"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl ${
          done ? "bg-emerald-500/20" : "bg-white/10"
        }`}>
          {quest.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-semibold truncate ${done ? "line-through text-white/50" : ""}`}>
            {quest.title}
          </div>
          <div className="text-[11px] text-white/50 truncate">{quest.description}</div>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="flex items-center gap-1 text-[10px] text-yellow-300">
              <Coins size={10} />+{quest.coin}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-purple-300">
              <Zap size={10} />+{quest.xp}XP
            </span>
            {quest.time && (
              <span className="text-[10px] text-white/40">{quest.time}</span>
            )}
          </div>
        </div>
        <button
          onClick={handleClick}
          disabled={done}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            done
              ? "bg-emerald-500 text-white"
              : "bg-white/10 hover:bg-white/20 border border-white/20"
          }`}
          aria-label={done ? "완료됨" : "완료하기"}
        >
          {done ? <Check size={18} strokeWidth={3} /> : <div className="w-3 h-3 rounded-full border-2 border-white/40" />}
        </button>
      </div>

      {popping && (
        <div className="pointer-events-none absolute left-1/2 bottom-6 anim-coin text-yellow-300 font-bold text-lg drop-shadow">
          +{quest.coin} SDC
        </div>
      )}
    </div>
  );
}
