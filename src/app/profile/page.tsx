"use client";

import Link from "next/link";
import { Settings, Share2, ChevronRight } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import { user, badges } from "@/data/mock";

export default function ProfilePage() {
  const earned = badges.filter((b) => b.earned).length;

  return (
    <>
      <TopHeader title="내 프로필" />

      {/* 캐릭터 카드 */}
      <section className="px-5 pt-4">
        <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-emerald-500/25 via-sky-500/20 to-purple-500/25 border border-white/10">
          <div className="absolute top-2 right-3 flex gap-2">
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Share2 size={14} />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Settings size={14} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center text-4xl shadow-xl">
                🧑‍🔧
              </div>
              <div className="absolute -bottom-1 -right-1 bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-[#0B1020]">
                Lv.{user.level}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xl font-black">{user.name}</div>
              <div className="text-[12px] text-white/70">
                {user.age}세 · {user.location} · {user.levelName}
              </div>
              <div className="flex items-center gap-2 mt-1.5 text-[11px]">
                <span className="text-yellow-300">🔥 {user.streak}일 연속</span>
                <span className="text-white/40">·</span>
                <span className="text-white/70">친구 {user.friendsCount}명</span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-[11px] text-white/60 mb-1.5">
              <span>레벨 {user.level} 탐험가</span>
              <span>{user.xp}/{user.xpToNext} XP</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand via-yellow-300 to-brand-2"
                style={{ width: `${(user.xp / user.xpToNext) * 100}%` }}
              />
            </div>
            <div className="text-[10px] text-white/60 mt-1.5">
              다음: Lv.3 길드마스터 해금 (부족 개설 가능)
            </div>
          </div>
        </div>
      </section>

      {/* 스탯 요약 */}
      <section className="px-5 mt-4 grid grid-cols-3 gap-2.5">
        <div className="glass rounded-2xl p-3 text-center">
          <div className="text-[10px] text-white/60">SDC 잔액</div>
          <div className="text-base font-black text-yellow-300 mt-0.5 tabular-nums">
            {user.coins.toLocaleString()}
          </div>
        </div>
        <div className="glass rounded-2xl p-3 text-center">
          <div className="text-[10px] text-white/60">완료 퀘스트</div>
          <div className="text-base font-black mt-0.5">87</div>
        </div>
        <div className="glass rounded-2xl p-3 text-center">
          <div className="text-[10px] text-white/60">뱃지</div>
          <div className="text-base font-black mt-0.5">
            {earned}<span className="text-white/40 text-xs">/{badges.length}</span>
          </div>
        </div>
      </section>

      {/* Before → After 여정 */}
      <section className="px-5 mt-6">
        <div className="mb-3">
          <div className="text-xs text-white/50">나의 산단 라이프</div>
          <div className="text-lg font-bold">Before → After</div>
        </div>
        <Link
          href="/profile/story"
          className="block relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-slate-800 to-indigo-950 border border-white/10 hover:border-white/30 transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] text-white/60">12주 전 → 오늘</div>
              <div className="text-base font-bold mt-0.5">외톨이 → 소속감 Lv.2</div>
              <div className="text-[11px] text-emerald-300 mt-1">
                일터만 있던 하루 → 삶이 있는 하루로
              </div>
            </div>
            <ChevronRight size={20} className="text-white/50" />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-1">
            {["😔", "😐", "🙂", "😊"].map((emoji, i) => (
              <div key={i} className="relative">
                <div
                  className="h-8 rounded bg-gradient-to-t from-brand/60 to-brand-2/60"
                  style={{ height: `${20 + i * 10}px` }}
                />
                <div className="text-center text-xs mt-1">{emoji}</div>
                <div className="text-center text-[9px] text-white/40">W{i * 4 + 1}</div>
              </div>
            ))}
          </div>
        </Link>
      </section>

      {/* 뱃지 그리드 */}
      <section className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-white/50">성장 기록</div>
            <div className="text-lg font-bold">뱃지 컬렉션</div>
          </div>
          <div className="text-[11px] text-white/50">{earned}/{badges.length}</div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-2 ${
                b.earned ? "glass" : "bg-white/5 opacity-40 grayscale"
              }`}
            >
              <div className="text-3xl">{b.emoji}</div>
              <div className="text-[10px] text-center mt-1 font-semibold leading-tight">
                {b.name}
              </div>
              {b.date && <div className="text-[9px] text-white/50 mt-0.5">{b.date.slice(5)}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* 액션 */}
      <section className="px-5 mt-6 space-y-2">
        {[
          { label: "코인 내역", sub: "획득/사용 전체 내역", emoji: "💰" },
          { label: "제휴처 지도", sub: "SDC 사용 가능한 지역 상권", emoji: "🏪" },
          { label: "내 퀘스트 히스토리", sub: "완료한 87개 활동", emoji: "📜" },
          { label: "초대 & 친구 추가", sub: "산단 동료 초대하기", emoji: "🤝" },
        ].map((a) => (
          <button
            key={a.label}
            className="w-full glass rounded-2xl p-4 flex items-center gap-3 text-left hover:bg-white/10 transition"
          >
            <div className="text-2xl">{a.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold">{a.label}</div>
              <div className="text-[11px] text-white/50 truncate">{a.sub}</div>
            </div>
            <ChevronRight size={16} className="text-white/40" />
          </button>
        ))}
      </section>

      <div className="h-10" />
    </>
  );
}
