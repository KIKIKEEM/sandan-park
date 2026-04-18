"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Printer, LayoutGrid, Download } from "lucide-react";
import "./slides.css";
import { slides } from "./SlideContent";

export default function SlidesPage() {
  const [idx, setIdx] = useState(0);
  const [grid, setGrid] = useState(false);

  const go = useCallback(
    (delta: number) => {
      setIdx((i) => Math.max(0, Math.min(slides.length - 1, i + delta)));
    },
    []
  );

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        setIdx(0);
      } else if (e.key === "End") {
        setIdx(slides.length - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      } else if (e.key === "g" || e.key === "G") {
        setGrid((v) => !v);
      } else if (e.key === "p" || e.key === "P") {
        window.print();
      } else if (e.key === "Escape") {
        setGrid(false);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go]);

  const current = slides[idx];

  if (grid) {
    return (
      <div className="slide-root screen-only overflow-y-auto" style={{ position: "static", minHeight: "100vh" }}>
        <div className="sticky top-0 z-10 glass flex items-center justify-between px-5 py-3 border-b border-white/10">
          <div className="text-sm font-bold">
            산단파크 · 전체 슬라이드 <span className="text-white/40">({slides.length}장)</span>
          </div>
          <button
            onClick={() => setGrid(false)}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-xs"
          >
            발표 모드로 돌아가기
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 p-6">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setIdx(i);
                setGrid(false);
              }}
              className="text-left"
            >
              <div className="slide" style={{ width: "100%" }}>
                {s.render()}
              </div>
              <div className="mt-2 text-[11px] text-white/60">
                {i + 1}. {s.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-root">
      {/* 화면 모드 */}
      <div className="slide-stage screen-only">
        <div className="slide anim-pop" key={current.id}>
          {current.render()}
        </div>
      </div>

      {/* 프린트 모드 — 모든 슬라이드 한번에 */}
      <div className="print-all">
        {slides.map((s) => (
          <div className="slide" key={s.id}>
            {s.render()}
          </div>
        ))}
      </div>

      {/* 네비게이션 */}
      <div className="nav screen-only">
        <button onClick={() => go(-1)} aria-label="이전">
          <ChevronLeft size={14} />
        </button>
        <div className="dots">
          {slides.map((_, i) => (
            <span key={i} className={i === idx ? "on" : ""} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="다음">
          <ChevronRight size={14} />
        </button>
        <div className="tabular-nums text-xs text-white/80 ml-2">
          {idx + 1} / {slides.length}
        </div>
        <div className="w-px h-5 bg-white/20 mx-1" />
        <button
          onClick={() => setGrid(true)}
          aria-label="전체 보기"
          title="전체 슬라이드 (G)"
        >
          <LayoutGrid size={14} />
        </button>
        <button
          onClick={() => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
            else document.exitFullscreen().catch(() => {});
          }}
          aria-label="전체화면"
          title="전체화면 (F)"
        >
          <Maximize2 size={14} />
        </button>
        <button
          onClick={() => window.print()}
          aria-label="PDF 저장"
          title="PDF 저장 (P)"
        >
          <Printer size={14} />
        </button>
        <a
          href="/sandan-park.pptx"
          download="sandan-park.pptx"
          aria-label="PPT 다운로드"
          title="PPT 다운로드"
          className="w-7 h-7 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 flex items-center justify-center hover:bg-yellow-400/30"
        >
          <Download size={13} />
        </a>
      </div>
    </div>
  );
}
