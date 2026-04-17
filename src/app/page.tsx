"use client";

import { useState } from "react";
import { Zap, Coins, Trophy, ChevronRight, Sparkles } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import QuestCard from "@/components/QuestCard";
import { user, dailyQuests, socialQuests, weeklyMission } from "@/data/mock";

export default function HomePage() {
  const [coins, setCoins] = useState(user.coins);
  const [xp, setXp] = useState(user.xp);

  const handleComplete = (q: { coin: number; xp: number }) => {
    setCoins((c) => c + q.coin);
    setXp((x) => x + q.xp);
  };

  const xpPct = Math.min(100, (xp / user.xpToNext) * 100);

  return (
    <>
      <TopHeader />

      <section className="px-5 pt-4">
        <div className="glass rounded-3xl p-5 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-brand/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-brand-2/20 blur-2xl" />

          <div className="relative flex items-center justify-between">
            <div>
              <div className="text-[11px] text-white/60 mb-1">오늘의 산단코인</div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black tabular-nums text-yellow-300">{coins.toLocaleString()}</span>
                <span className="text-sm text-yellow-300/70 font-semibold">SDC</span>
              </div>
              <div className="text-[11px] text-emerald-300 mt-0.5">＋45 오늘 획득</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                    strokeDasharray={`${xpPct * 0.94}, 100`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-[9px] text-white/60">Lv.</div>
                  <div className="text-xl font-black">{user.level}</div>
                </div>
              </div>
              <div className="text-[10px] text-white/60 mt-1">
                {xp}/{user.xpToNext} XP
              </div>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-2 text-[11px] text-white/70">
            <Sparkles size={12} className="text-yellow-300" />
            다음 레벨까지 {user.xpToNext - xp}XP — 레벨 3 <b className="text-white">길드마스터</b> 해금
          </div>
        </div>
      </section>

      <section className="px-5 mt-5">
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center anim-float">
            <Trophy size={18} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] text-white/60">주간 미션</div>
            <div className="text-sm font-bold truncate">{weeklyMission.title}</div>
            <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                style={{ width: `${(weeklyMission.progress / weeklyMission.total) * 100}%` }}
              />
            </div>
            <div className="text-[10px] text-white/60 mt-1">
              {weeklyMission.progress}/{weeklyMission.total} · 보상 {weeklyMission.reward}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-white/50">오늘의 퀘스트</div>
            <div className="text-lg font-bold">일일 루틴</div>
          </div>
          <div className="text-[11px] text-white/50 flex items-center gap-1">
            <Zap size={12} className="text-brand" /> 4개
          </div>
        </div>
        <div className="space-y-2.5">
          {dailyQuests.map((q) => (
            <QuestCard key={q.id} quest={q} onComplete={handleComplete} />
          ))}
        </div>
      </section>

      <section className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-white/50">오늘 밤 / 이번 주</div>
            <div className="text-lg font-bold">소셜 퀘스트</div>
          </div>
          <button className="text-[11px] text-white/60 flex items-center gap-0.5">
            전체 <ChevronRight size={12} />
          </button>
        </div>
        <div className="space-y-2.5">
          {socialQuests.map((q) => (
            <QuestCard key={q.id} quest={q} onComplete={handleComplete} />
          ))}
        </div>
      </section>

      <section className="px-5 mt-6">
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/20">
          <div className="flex items-center gap-2 text-[11px] text-purple-200 mb-1">
            <Coins size={12} /> SDC로 결제 가능
          </div>
          <div className="font-bold">속닥속닥 카페 아메리카노</div>
          <div className="text-[12px] text-white/70 mt-0.5">
            SDC 120개 또는 현금 3,800원
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-yellow-400 text-black text-xs font-bold">
              SDC로 결제
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-xs">
              주변 제휴처 보기
            </button>
          </div>
        </div>
      </section>

      <div className="h-10" />
    </>
  );
}
