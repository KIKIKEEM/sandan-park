"use client";

import { Crown, MessageCircle, Plus, Users, TrendingUp } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import { myTribes, recommendedTribes, leaderboard, Tribe } from "@/data/mock";

function TribeCard({ tribe, mine }: { tribe: Tribe; mine?: boolean }) {
  return (
    <div className="relative rounded-2xl glass p-4 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${tribe.colorFrom} ${tribe.colorTo} opacity-10`} />
      <div className="relative flex items-start gap-3">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tribe.colorFrom} ${tribe.colorTo} flex items-center justify-center text-3xl flex-none`}>
          {tribe.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <div className="text-sm font-bold truncate">{tribe.name}</div>
            {mine && <Crown size={12} className="text-yellow-300 flex-none" />}
          </div>
          <div className="text-[11px] text-white/60 truncate">{tribe.description}</div>
          <div className="flex items-center gap-3 mt-1.5 text-[10px]">
            <span className="flex items-center gap-0.5 text-white/70">
              <Users size={10} />
              {tribe.memberCount}명
            </span>
            <span className="text-purple-300">Lv.{tribe.level}</span>
            <span className="text-yellow-300">#{tribe.rank}위</span>
          </div>
        </div>
        {mine ? (
          <button className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold">
            <MessageCircle size={12} className="inline mr-1" />
            채팅
          </button>
        ) : (
          <button className="px-3 py-1.5 rounded-full bg-brand text-black text-xs font-bold">
            가입
          </button>
        )}
      </div>
    </div>
  );
}

export default function TribePage() {
  return (
    <>
      <TopHeader title="트라이브" />

      {/* 히어로: 온라인 빌리지 */}
      <section className="px-5 pt-4">
        <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/30 border border-white/10">
          <div className="absolute top-0 right-0 text-6xl opacity-20 translate-x-2 -translate-y-2">
            🏰
          </div>
          <div className="text-[11px] text-purple-200 mb-1">ONLINE VILLAGE</div>
          <div className="text-lg font-bold leading-tight">
            전국 산단 청년 <span className="text-yellow-300">2,847명</span>이<br />
            함께 살고 있어요
          </div>
          <div className="text-[11px] text-white/70 mt-2">
            에스토니아 시민권처럼 — 온라인 빌리지의 시티즌십
          </div>
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-2 rounded-xl bg-white/15 text-xs font-bold">
              내 시티즌십 확인
            </button>
            <button className="px-3 py-2 rounded-xl bg-white/10 text-xs">
              부족 만들기 +
            </button>
          </div>
        </div>
      </section>

      {/* 내 트라이브 */}
      <section className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-white/50">가입한 부족</div>
            <div className="text-lg font-bold">내 트라이브</div>
          </div>
          <button className="px-3 py-1.5 rounded-full border border-white/20 text-[11px] flex items-center gap-1">
            <Plus size={12} /> 새 부족
          </button>
        </div>
        <div className="space-y-2.5">
          {myTribes.map((t) => (
            <TribeCard key={t.id} tribe={t} mine />
          ))}
        </div>
      </section>

      {/* 추천 트라이브 */}
      <section className="px-5 mt-6">
        <div className="mb-3">
          <div className="text-xs text-white/50">취향이 맞는 사람들</div>
          <div className="text-lg font-bold">추천 트라이브</div>
        </div>
        <div className="space-y-2.5">
          {recommendedTribes.map((t) => (
            <TribeCard key={t.id} tribe={t} />
          ))}
        </div>
      </section>

      {/* 전국 부족 명량운동회 */}
      <section className="px-5 mt-6">
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/20">
          <div className="flex items-center gap-2 text-[11px] text-orange-200 mb-1">
            <TrendingUp size={12} /> LIVE
          </div>
          <div className="font-bold text-base">전국 산단 명량운동회</div>
          <div className="text-[12px] text-white/70 mt-0.5">
            구미 · 창원 · 완주 · 반월 · 시화 · 구로
          </div>

          <div className="mt-4 space-y-2">
            {leaderboard.map((l) => (
              <div
                key={l.rank}
                className={`flex items-center gap-3 p-2 rounded-xl ${
                  l.me ? "bg-yellow-400/20 border border-yellow-400/40" : "bg-white/5"
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                  l.rank === 1 ? "bg-yellow-400 text-black" : l.rank === 2 ? "bg-gray-300 text-black" : l.rank === 3 ? "bg-orange-400 text-black" : "bg-white/10"
                }`}>
                  {l.rank}
                </div>
                <div className="text-2xl">{l.emoji}</div>
                <div className="flex-1 text-sm font-semibold truncate">
                  {l.name}
                  {l.me && <span className="ml-1.5 text-[10px] text-yellow-300">(내 부족)</span>}
                </div>
                <div className="text-sm font-bold text-yellow-300 tabular-nums">
                  {l.score.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-10" />
    </>
  );
}
