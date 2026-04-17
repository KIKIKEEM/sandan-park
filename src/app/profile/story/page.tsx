"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { beforeAfter } from "@/data/mock";

export default function StoryPage() {
  return (
    <>
      <header className="sticky top-0 z-30 px-5 pt-4 pb-3 glass border-b border-white/5 flex items-center gap-3">
        <Link href="/profile" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <div className="text-[11px] text-white/50">김산단의 12주</div>
          <div className="text-base font-bold">Before → After</div>
        </div>
      </header>

      <section className="px-5 pt-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand/20 text-brand text-[11px] font-bold">
            <Sparkles size={12} />
            산단파크 이전 vs 이후
          </div>
          <h1 className="mt-3 text-2xl font-black leading-tight">
            같은 공장,<br />
            <span className="bg-gradient-to-r from-brand via-yellow-300 to-brand-2 bg-clip-text text-transparent">
              다른 하루
            </span>
          </h1>
        </div>
      </section>

      {/* BEFORE */}
      <section className="px-5 mt-6">
        <div className="rounded-3xl p-5 bg-slate-800/60 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 noise opacity-40" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-bold">
                BEFORE
              </div>
              <div className="text-xs text-white/50">Lv.0 · 외톨이</div>
            </div>

            <div className="space-y-3">
              {beforeAfter.before.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-xs text-white/50 w-12 flex-none pt-1.5 tabular-nums">
                    {s.time}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-xl flex-none">
                    {s.emoji}
                  </div>
                  <div className="flex-1 text-sm text-white/70 pt-1.5">{s.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[12px] text-red-200">
              "매일 같은 하루. 이직 생각만 늘어감"
            </div>
          </div>
        </div>
      </section>

      {/* 화살표 */}
      <div className="px-5 mt-4 flex flex-col items-center gap-2">
        <div className="text-xs text-white/50">12주 · 산단파크와 함께</div>
        <div className="text-3xl anim-float">⬇️</div>
      </div>

      {/* AFTER */}
      <section className="px-5 mt-4">
        <div className="rounded-3xl p-5 bg-gradient-to-br from-emerald-500/20 via-sky-500/15 to-purple-500/20 border border-brand/30 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-brand/20 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[10px] px-2 py-0.5 rounded-full bg-brand/30 text-brand font-bold">
                AFTER
              </div>
              <div className="text-xs text-white/70">Lv.2 · 탐험가</div>
            </div>

            <div className="space-y-3">
              {beforeAfter.after.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-xs text-white/60 w-12 flex-none pt-1.5 tabular-nums">
                    {s.time}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-none">
                    {s.emoji}
                  </div>
                  <div className="flex-1 text-sm text-white pt-1.5">{s.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-brand/15 border border-brand/30 text-[12px] text-emerald-100">
              "여기 살만해요. 부족에서 친구도 생겼어요"
            </div>
          </div>
        </div>
      </section>

      {/* 변화 수치 */}
      <section className="px-5 mt-6">
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "친구", from: "0명", to: "24명", color: "text-emerald-300" },
            { label: "주간 외출", from: "1회", to: "7회", color: "text-yellow-300" },
            { label: "이직 의향", from: "높음", to: "낮음", color: "text-purple-300" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-3 text-center">
              <div className="text-[10px] text-white/50">{s.label}</div>
              <div className="text-[11px] text-white/40 mt-1 line-through">{s.from}</div>
              <div className={`text-lg font-black mt-0.5 ${s.color}`}>{s.to}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 mt-6">
        <div className="rounded-2xl p-5 bg-white/5 border border-white/10 text-center">
          <div className="text-[11px] text-white/50 mb-1">김산단의 간증</div>
          <div className="text-sm leading-relaxed">
            "내가 재밌게 사는 방법이 뭔지<br />
            모르고 일만 했는데,<br />
            <span className="text-brand font-bold">산단파크가 가르쳐줬어요.</span>"
          </div>
        </div>
      </section>

      <div className="h-10" />
    </>
  );
}
