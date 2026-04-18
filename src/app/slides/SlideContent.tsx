"use client";

import { beforeAfter, attractions } from "@/data/mock";

export type SlideMeta = {
  id: string;
  title: string;
  render: () => React.ReactNode;
};

export const slides: SlideMeta[] = [
  // 1. 커버
  {
    id: "cover",
    title: "표지",
    render: () => (
      <div className="slide-content items-center justify-center text-center">
        <div className="absolute top-[6%] right-[6%] text-xs text-white/40">
          2026 산업단지 청년 정책 해커톤
        </div>
        <div className="text-5xl mb-6" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>🎮</div>
        <div className="h-hero">
          산단<span className="grad-text">파크</span>
        </div>
        <div className="t-lead mt-4 max-w-[80%]">
          산업단지에서 산다. <span className="text-yellow-300 font-bold">레벨업하며 산다.</span>
        </div>
        <div className="t-small mt-3 max-w-[70%]">
          산단 청년 근로자의 외로움을 온·오프 믹스 RPG로 전환하는 게이미피케이션 플랫폼
        </div>
        <div className="mt-8 flex gap-3 text-xs text-white/60">
          <span className="px-3 py-1.5 rounded-full border border-white/20">Team 구미·창원·완주</span>
          <span className="px-3 py-1.5 rounded-full border border-white/20">2026.04.18</span>
        </div>
      </div>
    ),
  },

  // 2. 문제 — 김산단의 하루 (Before)
  {
    id: "problem-persona",
    title: "문제 — 김산단",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag" style={{ background: "rgba(239,68,68,0.15)", color: "#fca5a5", borderColor: "rgba(239,68,68,0.3)" }}>
          01 · 문제 정의
        </div>
        <div className="h-big mt-5">
          김산단, 28세.<br />
          <span className="text-white/60">구미산단 3년차.</span>
        </div>
        <div className="t-lead mt-5 max-w-[85%]">
          외지에서 와 혼자 산다. 9시부터 6시까지 일.
          퇴근 후에는 <b className="text-white">혼술, 게임, 잠.</b>
        </div>

        <div className="mt-auto grid grid-cols-6 gap-2">
          {beforeAfter.before.slice(0, 6).map((s, i) => (
            <div key={i} className="card-glass p-3 text-center" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.15)" }}>
              <div className="text-[10px] text-white/50 tabular-nums">{s.time}</div>
              <div className="text-2xl mt-1">{s.emoji}</div>
              <div className="text-[10px] text-white/70 mt-1 leading-tight">{s.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl border border-red-400/30 bg-red-500/10 text-center">
          <div className="text-sm text-red-200 italic">
            "갈 곳이 없어요. 같이 놀 사람도 없어요. 매일 이직만 생각해요."
          </div>
        </div>
      </div>
    ),
  },

  // 3. 구조적 문제
  {
    id: "structural-problem",
    title: "구조적 문제",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag" style={{ background: "rgba(239,68,68,0.15)", color: "#fca5a5", borderColor: "rgba(239,68,68,0.3)" }}>
          01 · 문제 정의
        </div>
        <div className="h-big mt-4">
          김산단 한 명의 이야기가 아니다.
        </div>
        <div className="t-small mt-2">2025 리빙랩 · 구미·창원·완주 공통 페인포인트</div>

        <div className="grid grid-cols-5 gap-3 mt-6 flex-1 content-center">
          {[
            { emoji: "😔", title: "외로움", desc: "느슨한 연결 부재" },
            { emoji: "🚫", title: "갈 곳 없음", desc: "공원·도서관·심야식당 無" },
            { emoji: "🎲", title: "놀 줄 모름", desc: "취미 레퍼런스 없음" },
            { emoji: "📵", title: "고립된 앱", desc: "블라인드=대기업, 소모임=도시" },
            { emoji: "🏭", title: "브랜드 이미지", desc: "산단=칙칙·삭막·일터" },
          ].map((p) => (
            <div key={p.title} className="card-glass p-4 text-center">
              <div className="text-4xl">{p.emoji}</div>
              <div className="h-mid mt-2" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}>{p.title}</div>
              <div className="t-small mt-1">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5">
          <div className="text-[12px] text-white/60">전국 산업단지 <span className="text-white font-bold">1,330개</span></div>
          <div className="text-[12px] text-yellow-300">→ 문화친화 산단 2027년까지 10개 (정부 목표)</div>
        </div>
      </div>
    ),
  },

  // 4. 관점 전환
  {
    id: "perspective-shift",
    title: "관점 전환",
    render: () => (
      <div className="slide-content justify-center text-center">
        <div className="slide-tag mx-auto" style={{ background: "rgba(168,85,247,0.15)", color: "#d8b4fe", borderColor: "rgba(168,85,247,0.3)" }}>
          02 · 관점 전환
        </div>
        <div className="h-big mt-6">
          만약 산단이 <span className="grad-text">RPG 맵</span>이라면?
        </div>
        <div className="t-lead mt-4 max-w-[80%] mx-auto">
          배틀그라운드 맵의 삭막함에서 리소스를 주워 미션을 클리어하면
          <b className="text-white"> 자기효능감</b>이 생긴다.
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 max-w-[85%] mx-auto">
          {[
            { from: "회색 공장", to: "🎡 테마파크 어트랙션" },
            { from: "출퇴근", to: "🎯 퀘스트" },
            { from: "혼자", to: "🤝 트라이브" },
          ].map((t) => (
            <div key={t.from} className="card-glass p-5">
              <div className="text-sm text-white/50 line-through">{t.from}</div>
              <div className="text-xl font-bold mt-2 text-yellow-300">{t.to}</div>
            </div>
          ))}
        </div>

        <div className="t-small mt-10 italic">
          "산업단지의 풍경 자체를 획득·성장·보상의 게임 공간으로 재해석한다."
        </div>
      </div>
    ),
  },

  // 5. 솔루션 — 산단파크 소개
  {
    id: "solution",
    title: "솔루션",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag">03 · 솔루션</div>
        <div className="h-big mt-4">
          <span className="grad-text">산단파크</span> — 한 줄 소개
        </div>
        <div className="t-lead mt-3 max-w-[85%]">
          건강한 습관과 사회적 연결을 퀘스트로, 산단 전체를 게임 맵으로,
          전국 산단을 트라이브 올림픽으로.
        </div>

        <div className="grid grid-cols-4 gap-3 mt-8 flex-1 content-center">
          {[
            { n: "01", emoji: "🗺️", title: "산단 RPG 맵", desc: "어트랙션 핀, 바텀시트" },
            { n: "02", emoji: "🎯", title: "퀘스트", desc: "일일 루틴 + 소셜 퀘스트" },
            { n: "03", emoji: "🏰", title: "트라이브", desc: "온라인 빌리지, 부족 올림픽" },
            { n: "04", emoji: "🪙", title: "SDC 보상", desc: "코인 + 지역 상권 할인" },
          ].map((f) => (
            <div key={f.n} className="card-glass p-4 relative overflow-hidden">
              <div className="text-[10px] text-white/40">{f.n}</div>
              <div className="text-4xl mt-2">{f.emoji}</div>
              <div className="h-mid mt-2" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)" }}>{f.title}</div>
              <div className="t-small mt-1">{f.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">모바일 반응형 웹앱 · PWA</span>
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">설치 없이 QR로 접속</span>
        </div>
      </div>
    ),
  },

  // 6. 앱 데모 — 홈
  {
    id: "demo-home",
    title: "데모: 홈",
    render: () => (
      <div className="demo-row">
        <div className="demo-text">
          <div className="slide-tag">03 · 솔루션 데모</div>
          <div className="h-big mt-4 leading-tight">홈 대시보드</div>
          <div className="t-lead mt-4">
            오늘의 <b className="text-yellow-300">SDC</b> · 레벨 링 · 주간 미션 프로그레스.
          </div>
          <div className="mt-4 space-y-1.5">
            {[
              "🌅 7시 기상 인증 → +10 SDC",
              "🥗 건강식 인증 → +15 SDC",
              "🚶 걸어서 출근 → 스텝당 +1",
              "🌿 플로깅 → +30 SDC",
            ].map((q) => (
              <div key={q} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-[0.9rem]">
                {q}
              </div>
            ))}
          </div>
          <div className="t-small mt-3">
            완료 버튼 한 번 → 코인 팝업 애니메이션
          </div>
        </div>
        <div className="demo-phone-wrap">
          <div className="demo-phone">
            <iframe src="/" title="산단파크 홈" />
          </div>
        </div>
      </div>
    ),
  },

  // 7. 앱 데모 — 맵
  {
    id: "demo-map",
    title: "데모: 산단 맵",
    render: () => (
      <div className="demo-row">
        <div className="demo-text">
          <div className="slide-tag">03 · 솔루션 데모</div>
          <div className="h-big mt-4 leading-tight">산단 RPG 맵</div>
          <div className="t-lead mt-4">
            실제 산업단지를 <b className="text-white">게임 맵</b>으로.
            핀을 탭하면 참여·보상·거리 정보가 바로 뜬다.
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {attractions.slice(0, 6).map((a) => (
              <div key={a.id} className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs flex items-center gap-2">
                <span className="text-base">{a.emoji}</span>
                <span className="truncate">{a.name}</span>
              </div>
            ))}
          </div>
          <div className="t-small mt-3">
            7가지 어트랙션 · 실시간 참여자 수 · 경로 안내
          </div>
        </div>
        <div className="demo-phone-wrap">
          <div className="demo-phone">
            <iframe src="/map" title="산단파크 맵" />
          </div>
        </div>
      </div>
    ),
  },

  // 8. 앱 데모 — 트라이브
  {
    id: "demo-tribe",
    title: "데모: 트라이브",
    render: () => (
      <div className="demo-row">
        <div className="demo-text">
          <div className="slide-tag">03 · 솔루션 데모</div>
          <div className="h-big mt-4 leading-tight">
            트라이브<br />
            <span className="grad-text">온라인 빌리지</span>
          </div>
          <div className="t-lead mt-4">
            에스토니아 시민권처럼 — 취향 기반 부족에 소속.
            <b className="text-white"> 전국 산단 명량운동회</b>로 경쟁·연결.
          </div>

          <div className="mt-4 card-glass p-3.5">
            <div className="text-[11px] text-orange-300 mb-2">🔥 LIVE · 전국 산단 명량운동회</div>
            <div className="space-y-1 text-[0.85rem]">
              {[
                { r: 1, n: "창원 새벽러너스", s: 12450 },
                { r: 2, n: "완주 쿠킹메이트", s: 11280 },
                { r: 3, n: "구미 수요러너스 👑", s: 10920, me: true },
              ].map((l) => (
                <div key={l.r} className={`flex justify-between px-2 py-1 rounded ${l.me ? "bg-yellow-400/20 border border-yellow-400/40" : ""}`}>
                  <span>#{l.r} {l.n}</span>
                  <span className="text-yellow-300 font-bold tabular-nums">{l.s.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="demo-phone-wrap">
          <div className="demo-phone">
            <iframe src="/tribe" title="산단파크 트라이브" />
          </div>
        </div>
      </div>
    ),
  },

  // 9. 보상 체계
  {
    id: "rewards",
    title: "보상 체계",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag">04 · 보상 체계</div>
        <div className="h-big mt-4">
          <span className="text-yellow-300">SDC</span>로 재미 &amp; 지역 경제 순환
        </div>

        <div className="grid grid-cols-2 gap-5 mt-7 flex-1 content-center">
          <div className="card-glass p-6" style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.02))" }}>
            <div className="text-xs text-emerald-300 font-bold">획득 라인</div>
            <div className="h-mid mt-2">게이미피케이션</div>
            <div className="space-y-2 mt-4 text-sm">
              <div>🎯 퀘스트 완료 → SDC 코인</div>
              <div>⚡ XP 누적 → 레벨업</div>
              <div>🏅 뱃지 해금 · 연속 달성</div>
              <div>🏆 부족 랭킹 상승</div>
            </div>
          </div>

          <div className="card-glass p-6" style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.1), rgba(250,204,21,0.02))" }}>
            <div className="text-xs text-yellow-300 font-bold">지출 라인</div>
            <div className="h-mid mt-2">지역 상권 연계</div>
            <div className="space-y-2 mt-4 text-sm">
              <div>☕ 제휴 카페 20% 할인</div>
              <div>🍳 소셜다이닝 참가권</div>
              <div>💇 미용실·식당 쿠폰</div>
              <div>🎫 특별 이벤트 티켓</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center t-small italic">
          "보조금을 직접 지원이 아니라 <b className="text-white">재미로 포장한 지역경제 순환</b>."
        </div>
      </div>
    ),
  },

  // 10. 레벨 시스템
  {
    id: "levels",
    title: "레벨 시스템",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag">05 · 성장 구조</div>
        <div className="h-big mt-4">12주 · 3단계 레벨업</div>

        <div className="grid grid-cols-3 gap-5 mt-8 flex-1 content-center">
          {[
            {
              n: "Lv.1",
              name: "견습생",
              week: "Week 1-2",
              emoji: "👀",
              desc: "눈으로 구경 · 솔로 퀘스트 소소",
              color: "from-slate-400 to-slate-600",
            },
            {
              n: "Lv.2",
              name: "탐험가",
              week: "Week 3-6",
              emoji: "🧭",
              desc: "첫 소셜 퀘스트 · 부족 가입 · 오프라인 아지트",
              color: "from-emerald-400 to-teal-500",
            },
            {
              n: "Lv.3",
              name: "길드마스터",
              week: "Week 7-12",
              emoji: "👑",
              desc: "챌린지 주최 · 부족 리더십 · 멘토링",
              color: "from-yellow-400 to-purple-500",
            },
          ].map((l) => (
            <div key={l.n} className="card-glass p-5 relative overflow-hidden">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${l.color}`} />
              <div className="text-xs text-white/50">{l.week}</div>
              <div className="text-6xl mt-2">{l.emoji}</div>
              <div className="text-xs text-white/50 mt-3">{l.n}</div>
              <div className="h-mid mt-1" style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}>{l.name}</div>
              <div className="t-small mt-2 leading-snug">{l.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 11. After — 12주 뒤
  {
    id: "after",
    title: "After — 김산단",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag">06 · 효과성</div>
        <div className="h-big mt-4">
          12주 뒤, 김산단은 —
        </div>
        <div className="t-small mt-2">같은 공장, 다른 하루</div>

        <div className="mt-6 grid grid-cols-6 gap-2">
          {beforeAfter.after.slice(0, 6).map((s, i) => (
            <div
              key={i}
              className="card-glass p-3 text-center"
              style={{ background: "linear-gradient(180deg, rgba(34,197,94,0.1), rgba(168,85,247,0.06))", borderColor: "rgba(34,197,94,0.25)" }}
            >
              <div className="text-[10px] text-white/60 tabular-nums">{s.time}</div>
              <div className="text-2xl mt-1">{s.emoji}</div>
              <div className="text-[10px] text-white mt-1 leading-tight font-semibold">{s.text}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6 flex-1 content-center">
          {[
            { label: "친구", from: "0명", to: "24명", color: "text-emerald-300" },
            { label: "주간 외출", from: "1회", to: "7회", color: "text-yellow-300" },
            { label: "이직 의향", from: "높음", to: "낮음", color: "text-purple-300" },
          ].map((s) => (
            <div key={s.label} className="card-glass p-4 text-center">
              <div className="text-xs text-white/50">{s.label}</div>
              <div className="text-sm text-white/40 mt-2 line-through">{s.from}</div>
              <div className={`text-3xl font-black mt-1 ${s.color}`}>{s.to}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl border border-brand/30 bg-brand/10 text-center">
          <div className="text-sm italic">
            "내가 재밌게 사는 방법이 뭔지 모르고 일만 했는데,
            <b className="text-emerald-300"> 산단파크가 가르쳐줬어요.</b>"
          </div>
        </div>
      </div>
    ),
  },

  // 12. 확장성 & 차별화
  {
    id: "scale",
    title: "확장성",
    render: () => (
      <div className="slide-content">
        <div className="slide-tag">07 · 확장성</div>
        <div className="h-big mt-4">
          소프트웨어로 시간을 <span className="grad-text">앞당긴다</span>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 flex-1 content-center">
          <div className="card-glass p-6">
            <div className="text-xs text-white/50">전국 확장 로드맵</div>
            <div className="space-y-3 mt-3">
              <div className="flex items-center gap-3">
                <div className="w-14 text-yellow-300 font-bold text-sm">Pilot</div>
                <div className="flex-1 text-sm">구미 파일럿 1개</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 text-emerald-300 font-bold text-sm">Phase 1</div>
                <div className="flex-1 text-sm">창원·완주·반월 +3</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 text-purple-300 font-bold text-sm">Phase 2</div>
                <div className="flex-1 text-sm">문화친화 산단 10개 표준</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 text-white/70 font-bold text-sm">Vision</div>
                <div className="flex-1 text-sm">전국 1,330개 중 100개 커버</div>
              </div>
            </div>
          </div>

          <div className="card-glass p-6">
            <div className="text-xs text-white/50">차별화</div>
            <div className="space-y-2.5 mt-3 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">블라인드 (대기업)</span>
                <span className="text-emerald-300">→ 중소 산단</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">만보기 (걸음만)</span>
                <span className="text-emerald-300">→ 사회적 연결</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">소모임 (도시)</span>
                <span className="text-emerald-300">→ 산단 특화</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-white/60">기존 정책 (HW)</span>
                <span className="text-emerald-300">→ 커뮤니티(SW)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center t-small">
          하드웨어 공원 하나 예산으로 <b className="text-yellow-300">100개 산단 커뮤니티</b>를 동시에.
        </div>
      </div>
    ),
  },

  // 13. 클로징
  {
    id: "closing",
    title: "클로징",
    render: () => (
      <div className="slide-content items-center justify-center text-center">
        <div className="text-xs text-white/50">산업단지 = 團地 · 무리가 모인 땅</div>
        <div className="h-hero mt-4">
          다시, 이 땅에<br />
          <span className="grad-text">사람을 모읍니다.</span>
        </div>
        <div className="t-lead mt-5 max-w-[70%]">
          게임처럼 재미있게, 지속가능하게, 전국 어디에서나.
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="card-glass px-4 py-3 flex items-center gap-3">
            <div className="w-16 h-16 bg-white rounded-xl p-1 flex items-center justify-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://sandan-park.vercel.app"
                alt="QR"
                className="w-full h-full"
              />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/50">지금 써보기</div>
              <div className="text-sm font-bold text-yellow-300">sandan-park.vercel.app</div>
            </div>
          </div>
        </div>

        <div className="h-big mt-10">
          산단에서 <span className="grad-text">산다.</span>
        </div>
        <div className="t-small mt-3">산단파크 — 2026 산업단지 청년 정책 해커톤</div>
      </div>
    ),
  },
];
