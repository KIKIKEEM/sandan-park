"use client";

import { useState } from "react";
import { X, Coins, Users, MapPin, Navigation } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import { attractions, Attraction } from "@/data/mock";

const typeColor: Record<Attraction["type"], string> = {
  dining: "from-rose-400 to-pink-500",
  running: "from-emerald-400 to-teal-500",
  reading: "from-amber-400 to-orange-500",
  climbing: "from-violet-400 to-purple-500",
  plogging: "from-lime-400 to-green-500",
  cafe: "from-yellow-300 to-amber-400",
  tribe: "from-sky-400 to-blue-500",
};

export default function MapPage() {
  const [selected, setSelected] = useState<Attraction | null>(null);

  return (
    <>
      <TopHeader title="구미 산단파크" />

      <div className="px-5 pt-3 text-[11px] text-white/60 flex items-center gap-1">
        <Navigation size={12} className="text-brand" />
        근처 어트랙션 {attractions.length}곳 · 참여 가능
      </div>

      <section className="px-5 mt-3">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 via-indigo-950 to-slate-900">
          {/* 실제 산단 조감 이미지 (은은한 배경) */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.28] mix-blend-luminosity"
            style={{ backgroundImage: "url('/sandan-map-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-indigo-950/50" />
          <div className="absolute inset-0 noise opacity-50" />

          {/* 도로 라인 */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="road" x1="0" x2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <path d="M -5 50 Q 30 40 50 55 T 105 50" stroke="url(#road)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M 50 -5 Q 45 30 55 55 T 50 105" stroke="url(#road)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.4" />
            <path d="M 10 90 Q 40 70 70 80" stroke="#334155" strokeWidth="3" fill="none" opacity="0.3" strokeDasharray="2 2" />
          </svg>

          {/* 공장 블록들 (배경 장식) */}
          <div className="absolute top-[10%] left-[5%] w-16 h-10 rounded-md bg-slate-700/40 border border-white/5" />
          <div className="absolute top-[12%] left-[28%] w-12 h-8 rounded-md bg-slate-700/40 border border-white/5" />
          <div className="absolute top-[8%] right-[10%] w-14 h-12 rounded-md bg-slate-700/40 border border-white/5" />
          <div className="absolute bottom-[15%] left-[10%] w-10 h-10 rounded-md bg-slate-700/40 border border-white/5" />
          <div className="absolute bottom-[20%] right-[15%] w-14 h-8 rounded-md bg-slate-700/40 border border-white/5" />

          {/* 녹지 구역 */}
          <div className="absolute top-[40%] left-[15%] w-20 h-16 rounded-full bg-emerald-500/15 blur-md" />
          <div className="absolute bottom-[25%] right-[20%] w-16 h-16 rounded-full bg-purple-500/15 blur-md" />

          {/* 내 위치 */}
          <div className="absolute" style={{ left: "48%", top: "48%" }}>
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 w-6 h-6 rounded-full bg-blue-400/40 anim-glow -translate-x-1/2 -translate-y-1/2" />
              <div className="w-3 h-3 rounded-full bg-blue-400 border-2 border-white shadow-lg relative z-10" />
            </div>
          </div>

          {/* 어트랙션 핀들 */}
          {attractions.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelected(a)}
              className="absolute group"
              style={{ left: `${a.x}%`, top: `${a.y}%` }}
            >
              <div className="-translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${typeColor[a.type]} flex items-center justify-center text-xl shadow-lg border-2 border-white/30 anim-float`}>
                  {a.emoji}
                </div>
                <div className="w-2 h-2 rotate-45 bg-white/30 -mt-1" />
                <div className="mt-0.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur text-[9px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {a.name}
                </div>
              </div>
            </button>
          ))}

          {/* 현재 위치 라벨 */}
          <div className="absolute top-3 left-3 glass px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1">
            <MapPin size={10} className="text-brand" />
            내 위치: 구미산단 3공구
          </div>
        </div>
      </section>

      {/* 범례 */}
      <section className="px-5 mt-4">
        <div className="text-xs text-white/50 mb-2">어트랙션 종류</div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "🍳 소셜다이닝", color: "bg-rose-500/20 text-rose-200" },
            { label: "🏃 러닝", color: "bg-emerald-500/20 text-emerald-200" },
            { label: "📚 독서", color: "bg-amber-500/20 text-amber-200" },
            { label: "🧗 클라이밍", color: "bg-violet-500/20 text-violet-200" },
            { label: "🌿 플로깅", color: "bg-lime-500/20 text-lime-200" },
            { label: "☕ 제휴 카페", color: "bg-yellow-400/20 text-yellow-200" },
            { label: "🏠 트라이브", color: "bg-sky-500/20 text-sky-200" },
          ].map((c) => (
            <div key={c.label} className={`px-2.5 py-1 rounded-full text-[10px] ${c.color}`}>
              {c.label}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 mt-5">
        <div className="text-xs text-white/50 mb-2">진행 중인 이벤트</div>
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2 -mx-5 px-5">
          {attractions.slice(0, 4).map((a) => (
            <button
              key={a.id}
              onClick={() => setSelected(a)}
              className="flex-none w-44 glass rounded-2xl p-3 text-left hover:bg-white/10 transition"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${typeColor[a.type]} flex items-center justify-center text-lg mb-2`}>
                {a.emoji}
              </div>
              <div className="text-sm font-bold truncate">{a.name}</div>
              <div className="text-[11px] text-white/60 truncate">{a.description}</div>
              <div className="flex items-center gap-2 mt-2 text-[10px]">
                <span className="text-yellow-300 flex items-center gap-0.5">
                  <Coins size={10} />+{a.reward}
                </span>
                <span className="text-white/50 flex items-center gap-0.5">
                  <Users size={10} />
                  {a.participants}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="h-10" />

      {/* 바텀시트 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-[480px] rounded-t-3xl glass border-t border-white/10 p-6 anim-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${typeColor[selected.type]} flex items-center justify-center text-3xl`}>
                  {selected.emoji}
                </div>
                <div>
                  <div className="text-lg font-bold">{selected.name}</div>
                  <div className="text-[11px] text-white/60">{selected.description}</div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="glass rounded-xl p-3 text-center">
                <div className="text-[10px] text-white/50">보상</div>
                <div className="text-yellow-300 font-bold mt-0.5">+{selected.reward} SDC</div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <div className="text-[10px] text-white/50">참여자</div>
                <div className="font-bold mt-0.5">{selected.participants}명</div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <div className="text-[10px] text-white/50">거리</div>
                <div className="font-bold mt-0.5">320m</div>
              </div>
            </div>

            <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand to-emerald-400 text-black font-bold text-sm">
              참여 신청하기
            </button>
            <button className="w-full py-3 rounded-2xl text-white/70 text-xs mt-2">
              경로 안내 보기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
