/* 산단파크 PPTX 생성기
 * 13장 슬라이드를 실제 .pptx 파일로 저장 (PowerPoint/Keynote에서 열림)
 * 실행: node scripts/make-pptx.js
 * 결과: public/sandan-park.pptx
 */
const PptxGenJS = require("pptxgenjs");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "sandan-park.pptx");

const C = {
  bg: "0B1020",
  bg2: "0E0B1E",
  white: "F5F7FB",
  muted: "A8AEBF",
  dim: "6B7280",
  brand: "22C55E",
  brand2: "A855F7",
  gold: "FACC15",
  red: "EF4444",
  cardBg: "141A2E",
  cardBorder: "283048",
};

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 inches = 16:9
pptx.title = "산단파크 — 2026 산업단지 청년 정책 해커톤";
pptx.company = "산단파크";
pptx.subject = "5분 발표 장표";

// 레이아웃 상수 (inch)
const W = 13.333;
const H = 7.5;
const PADX = 0.8;
const PADY = 0.65;

// 배경 + 그라데이션 효과 (단색 + 도형으로 느낌)
function addBackground(slide) {
  slide.background = { color: C.bg };
  // 좌상단 그린 글로우
  slide.addShape("ellipse", {
    x: -1, y: -1, w: 4, h: 4,
    fill: { type: "solid", color: C.brand, alpha: 85 },
    line: { type: "none" },
  });
  // 우상단 퍼플 글로우
  slide.addShape("ellipse", {
    x: W - 3, y: -1.5, w: 5, h: 5,
    fill: { type: "solid", color: C.brand2, alpha: 85 },
    line: { type: "none" },
  });
  // 하단 골드 글로우
  slide.addShape("ellipse", {
    x: W / 2 - 2.5, y: H - 2, w: 5, h: 5,
    fill: { type: "solid", color: C.gold, alpha: 90 },
    line: { type: "none" },
  });
  // 오버레이로 다크닝
  slide.addShape("rect", {
    x: 0, y: 0, w: W, h: H,
    fill: { type: "solid", color: C.bg, alpha: 60 },
    line: { type: "none" },
  });
}

function addTag(slide, text, colorBg = C.brand, colorFg = "D1FAE5", borderColor = C.brand) {
  slide.addShape("roundRect", {
    x: PADX, y: PADY, w: 2.5, h: 0.38,
    fill: { type: "solid", color: colorBg, alpha: 80 },
    line: { color: borderColor, width: 0.75, alpha: 60 },
    rectRadius: 0.19,
  });
  slide.addText(text, {
    x: PADX, y: PADY, w: 2.5, h: 0.38,
    color: colorFg, fontSize: 11, bold: true,
    fontFace: "Pretendard", align: "center", valign: "middle",
  });
}

function card(slide, { x, y, w, h, fill = C.cardBg, alpha = 60, border = C.cardBorder, radius = 0.15 }) {
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { type: "solid", color: fill, alpha },
    line: { color: border, width: 0.75, alpha: 40 },
    rectRadius: radius,
  });
}

function pageFooter(slide, n, total) {
  slide.addText(`${n} / ${total}  ·  sandan-park.vercel.app`, {
    x: W - 3.2, y: H - 0.38, w: 3, h: 0.3,
    color: C.muted, fontSize: 9, fontFace: "Pretendard",
    align: "right",
  });
}

const TOTAL = 13;

// ────────────────────────────────────────────────────────
// 1. 커버
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  s.addText("2026 산업단지 청년 정책 해커톤", {
    x: PADX, y: 0.5, w: W - 2 * PADX, h: 0.35,
    color: C.muted, fontSize: 12, fontFace: "Pretendard",
    align: "right",
  });
  s.addText("🎮", {
    x: 0, y: 2.1, w: W, h: 1.1,
    fontSize: 72, align: "center", valign: "middle",
  });
  s.addText(
    [
      { text: "산단", options: { color: C.white } },
      { text: "파크", options: { color: C.gold } },
    ],
    {
      x: 0, y: 3.2, w: W, h: 1.3,
      fontSize: 80, bold: true, fontFace: "Pretendard",
      align: "center", valign: "middle",
    }
  );
  s.addText("산업단지에서 산다. 레벨업하며 산다.", {
    x: 0, y: 4.7, w: W, h: 0.5,
    color: C.white, fontSize: 22, bold: true,
    fontFace: "Pretendard", align: "center",
  });
  s.addText("산단 청년 근로자의 외로움을 온·오프 믹스 RPG로 전환하는 게이미피케이션 플랫폼", {
    x: 0, y: 5.25, w: W, h: 0.4,
    color: C.muted, fontSize: 14, fontFace: "Pretendard",
    align: "center",
  });
  s.addText("Team 구미 · 창원 · 완주    |    2026.04.18", {
    x: 0, y: 6.4, w: W, h: 0.35,
    color: C.muted, fontSize: 12, fontFace: "Pretendard",
    align: "center",
  });
  pageFooter(s, 1, TOTAL);
}

// ────────────────────────────────────────────────────────
// 2. 김산단의 하루
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "01 · 문제 정의", C.red, "FCA5A5", C.red);
  s.addText(
    [
      { text: "김산단, 28세.\n", options: { color: C.white } },
      { text: "구미산단 3년차.", options: { color: C.muted } },
    ],
    {
      x: PADX, y: 1.3, w: W - 2 * PADX, h: 1.6,
      fontSize: 44, bold: true, fontFace: "Pretendard",
    }
  );
  s.addText("외지에서 와 혼자 산다. 9시부터 6시까지 일. 퇴근 후에는 혼술, 게임, 잠.", {
    x: PADX, y: 3.0, w: W - 2 * PADX, h: 0.5,
    color: C.white, fontSize: 18, fontFace: "Pretendard",
  });

  // 6개 카드
  const before = [
    { t: "07:00", e: "😴", d: "알람 두 번 끄고 겨우 기상" },
    { t: "08:30", e: "🚗", d: "차 안에서 편의점 삼각김밥" },
    { t: "09-18", e: "🏭", d: "일, 일, 일..." },
    { t: "19:00", e: "🍜", d: "혼자 라면, 맥주 2캔" },
    { t: "22:00", e: "🎮", d: "게임하다 잠" },
    { t: "감정", e: "😔", d: "외로움, 이직 욕구" },
  ];
  const cardW = (W - 2 * PADX - 5 * 0.18) / 6;
  const cardY = 4.15;
  const cardH = 1.55;
  before.forEach((b, i) => {
    const x = PADX + i * (cardW + 0.18);
    card(s, { x, y: cardY, w: cardW, h: cardH, fill: C.red, alpha: 90, border: C.red });
    s.addText(b.t, { x, y: cardY + 0.12, w: cardW, h: 0.25, color: C.muted, fontSize: 9, align: "center", fontFace: "Pretendard" });
    s.addText(b.e, { x, y: cardY + 0.3, w: cardW, h: 0.55, fontSize: 28, align: "center", valign: "middle" });
    s.addText(b.d, { x: x + 0.05, y: cardY + 0.95, w: cardW - 0.1, h: 0.55, color: C.white, fontSize: 9, align: "center", fontFace: "Pretendard" });
  });

  // 인용
  card(s, { x: PADX, y: cardY + cardH + 0.25, w: W - 2 * PADX, h: 0.65, fill: C.red, alpha: 88, border: C.red });
  s.addText('"갈 곳이 없어요. 같이 놀 사람도 없어요. 매일 이직만 생각해요."', {
    x: PADX, y: cardY + cardH + 0.25, w: W - 2 * PADX, h: 0.65,
    color: "FECACA", fontSize: 14, italic: true, align: "center", valign: "middle",
    fontFace: "Pretendard",
  });
  pageFooter(s, 2, TOTAL);
}

// ────────────────────────────────────────────────────────
// 3. 구조적 문제 5가지
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "01 · 문제 정의", C.red, "FCA5A5", C.red);
  s.addText("김산단 한 명의 이야기가 아니다.", {
    x: PADX, y: 1.2, w: W - 2 * PADX, h: 0.9,
    color: C.white, fontSize: 40, bold: true, fontFace: "Pretendard",
  });
  s.addText("2025 리빙랩 · 구미·창원·완주 공통 페인포인트", {
    x: PADX, y: 2.15, w: W - 2 * PADX, h: 0.35,
    color: C.muted, fontSize: 13, fontFace: "Pretendard",
  });

  const problems = [
    { e: "😔", t: "외로움", d: "느슨한 연결 부재" },
    { e: "🚫", t: "갈 곳 없음", d: "공원·도서관·심야식당 無" },
    { e: "🎲", t: "놀 줄 모름", d: "취미 레퍼런스 없음" },
    { e: "📵", t: "고립된 앱", d: "블라인드=대기업, 소모임=도시" },
    { e: "🏭", t: "브랜드 이미지", d: "산단=칙칙·삭막·일터" },
  ];
  const gap = 0.2;
  const cw = (W - 2 * PADX - 4 * gap) / 5;
  const cy = 3.1;
  const ch = 2.7;
  problems.forEach((p, i) => {
    const x = PADX + i * (cw + gap);
    card(s, { x, y: cy, w: cw, h: ch });
    s.addText(p.e, { x, y: cy + 0.3, w: cw, h: 0.9, fontSize: 48, align: "center", valign: "middle" });
    s.addText(p.t, { x, y: cy + 1.25, w: cw, h: 0.5, color: C.white, fontSize: 18, bold: true, align: "center", fontFace: "Pretendard" });
    s.addText(p.d, { x: x + 0.1, y: cy + 1.75, w: cw - 0.2, h: 0.8, color: C.muted, fontSize: 11, align: "center", fontFace: "Pretendard", valign: "top" });
  });

  // 통계 배너
  card(s, { x: PADX, y: 6.35, w: W - 2 * PADX, h: 0.55 });
  s.addText(
    [
      { text: "전국 산업단지 ", options: { color: C.muted } },
      { text: "1,330개", options: { color: C.white, bold: true } },
      { text: "     →     문화친화 산단 2027년까지 10개 (정부 목표)", options: { color: C.gold } },
    ],
    {
      x: PADX, y: 6.35, w: W - 2 * PADX, h: 0.55,
      fontSize: 13, align: "center", valign: "middle", fontFace: "Pretendard",
    }
  );
  pageFooter(s, 3, TOTAL);
}

// ────────────────────────────────────────────────────────
// 4. 관점 전환
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "02 · 관점 전환", C.brand2, "D8B4FE", C.brand2);

  s.addText(
    [
      { text: "만약 산단이 ", options: { color: C.white } },
      { text: "RPG 맵", options: { color: C.gold } },
      { text: "이라면?", options: { color: C.white } },
    ],
    {
      x: 0, y: 1.35, w: W, h: 1.2,
      fontSize: 54, bold: true, fontFace: "Pretendard", align: "center",
    }
  );
  s.addText(
    "배틀그라운드 맵의 삭막함에서 리소스를 주워 미션을 클리어하면 자기효능감이 생긴다.",
    {
      x: 1.5, y: 2.85, w: W - 3, h: 0.8,
      color: C.muted, fontSize: 17, align: "center", fontFace: "Pretendard",
    }
  );

  const shifts = [
    { from: "회색 공장", to: "🎡 테마파크 어트랙션" },
    { from: "출퇴근", to: "🎯 퀘스트" },
    { from: "혼자", to: "🤝 트라이브" },
  ];
  const cw = 3.1;
  const gap = 0.35;
  const total = 3 * cw + 2 * gap;
  const startX = (W - total) / 2;
  const cy = 4.1;
  const ch = 1.95;
  shifts.forEach((t, i) => {
    const x = startX + i * (cw + gap);
    card(s, { x, y: cy, w: cw, h: ch });
    s.addText(t.from, {
      x, y: cy + 0.3, w: cw, h: 0.45,
      color: C.muted, fontSize: 14, align: "center", fontFace: "Pretendard",
      strike: true,
    });
    s.addText(t.to, {
      x, y: cy + 0.9, w: cw, h: 0.8,
      color: C.gold, fontSize: 22, bold: true, align: "center", fontFace: "Pretendard",
    });
  });

  s.addText('"산업단지의 풍경 자체를 획득·성장·보상의 게임 공간으로 재해석한다."', {
    x: PADX, y: H - 0.9, w: W - 2 * PADX, h: 0.45,
    color: C.muted, fontSize: 13, italic: true, align: "center", fontFace: "Pretendard",
  });
  pageFooter(s, 4, TOTAL);
}

// ────────────────────────────────────────────────────────
// 5. 솔루션
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "03 · 솔루션");
  s.addText(
    [
      { text: "산단파크", options: { color: C.gold } },
      { text: " — 한 줄 소개", options: { color: C.white } },
    ],
    {
      x: PADX, y: 1.2, w: W - 2 * PADX, h: 0.9,
      fontSize: 40, bold: true, fontFace: "Pretendard",
    }
  );
  s.addText(
    "건강한 습관과 사회적 연결을 퀘스트로, 산단 전체를 게임 맵으로, 전국 산단을 트라이브 올림픽으로.",
    {
      x: PADX, y: 2.25, w: W - 2 * PADX, h: 0.7,
      color: C.muted, fontSize: 16, fontFace: "Pretendard",
    }
  );

  const features = [
    { n: "01", e: "🗺️", t: "산단 RPG 맵", d: "어트랙션 핀, 바텀시트" },
    { n: "02", e: "🎯", t: "퀘스트", d: "일일 루틴 + 소셜 퀘스트" },
    { n: "03", e: "🏰", t: "트라이브", d: "온라인 빌리지, 부족 올림픽" },
    { n: "04", e: "🪙", t: "SDC 보상", d: "코인 + 지역 상권 할인" },
  ];
  const gap = 0.25;
  const cw = (W - 2 * PADX - 3 * gap) / 4;
  const cy = 3.2;
  const ch = 2.9;
  features.forEach((f, i) => {
    const x = PADX + i * (cw + gap);
    card(s, { x, y: cy, w: cw, h: ch });
    s.addText(f.n, { x: x + 0.2, y: cy + 0.18, w: 0.8, h: 0.3, color: C.muted, fontSize: 11, fontFace: "Pretendard" });
    s.addText(f.e, { x, y: cy + 0.55, w: cw, h: 1.0, fontSize: 52, align: "center", valign: "middle" });
    s.addText(f.t, { x, y: cy + 1.6, w: cw, h: 0.5, color: C.white, fontSize: 19, bold: true, align: "center", fontFace: "Pretendard" });
    s.addText(f.d, { x: x + 0.15, y: cy + 2.1, w: cw - 0.3, h: 0.6, color: C.muted, fontSize: 11, align: "center", fontFace: "Pretendard" });
  });

  // 하단 배너
  s.addShape("roundRect", {
    x: PADX + 1, y: cy + ch + 0.25, w: W - 2 * PADX - 2, h: 0.5,
    fill: { type: "solid", color: C.cardBg, alpha: 60 },
    line: { color: C.cardBorder, width: 0.75, alpha: 40 },
    rectRadius: 0.25,
  });
  s.addText("모바일 반응형 웹앱 · PWA    ·    설치 없이 QR로 접속", {
    x: PADX + 1, y: cy + ch + 0.25, w: W - 2 * PADX - 2, h: 0.5,
    color: C.muted, fontSize: 12, align: "center", valign: "middle", fontFace: "Pretendard",
  });
  pageFooter(s, 5, TOTAL);
}

// ────────────────────────────────────────────────────────
// 6-8. 앱 데모 3장 (공통 함수)
// ────────────────────────────────────────────────────────
function demoSlide({ title, heading, subhead, leftList, footnote, phoneLabel, pageNum }) {
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "03 · 솔루션 데모");

  const leftX = PADX;
  const leftW = 7.2;

  s.addText(heading, {
    x: leftX, y: 1.25, w: leftW, h: 1.2,
    fontSize: 42, bold: true, color: C.white, fontFace: "Pretendard",
  });
  s.addText(subhead, {
    x: leftX, y: 2.55, w: leftW, h: 1.0,
    fontSize: 15, color: C.muted, fontFace: "Pretendard",
  });

  const listY = 3.7;
  const itemH = 0.52;
  leftList.forEach((t, i) => {
    const y = listY + i * (itemH + 0.08);
    card(s, { x: leftX, y, w: leftW, h: itemH });
    s.addText(t, {
      x: leftX + 0.25, y, w: leftW - 0.5, h: itemH,
      color: C.white, fontSize: 14, valign: "middle", fontFace: "Pretendard",
    });
  });

  if (footnote) {
    s.addText(footnote, {
      x: leftX, y: H - 0.85, w: leftW, h: 0.4,
      color: C.muted, fontSize: 11, fontFace: "Pretendard",
    });
  }

  // 우측 폰 목업
  const pHeight = H - 1.0;
  const pY = 0.5;
  const pAspect = 9 / 18;
  const pWidth = pHeight * pAspect;
  const pX = W - PADX - pWidth;

  // 폰 외곽 (검은 베젤)
  s.addShape("roundRect", {
    x: pX, y: pY, w: pWidth, h: pHeight,
    fill: { type: "solid", color: "0A0F1E" },
    line: { color: "1E293B", width: 2 },
    rectRadius: 0.32,
  });
  // 내부 화면
  s.addShape("roundRect", {
    x: pX + 0.1, y: pY + 0.1, w: pWidth - 0.2, h: pHeight - 0.2,
    fill: { type: "solid", color: C.bg },
    line: { color: C.bg, width: 0 },
    rectRadius: 0.22,
  });
  // 화면 내용 (라벨만)
  s.addText(phoneLabel, {
    x: pX + 0.1, y: pY + pHeight / 2 - 0.3, w: pWidth - 0.2, h: 0.6,
    color: C.gold, fontSize: 16, bold: true, align: "center", fontFace: "Pretendard",
  });
  s.addText("↗ sandan-park.vercel.app", {
    x: pX + 0.1, y: pY + pHeight / 2 + 0.1, w: pWidth - 0.2, h: 0.4,
    color: C.muted, fontSize: 10, align: "center", fontFace: "Pretendard",
  });
  s.addText("실제 데모: 브라우저에서 접속", {
    x: pX + 0.1, y: pY + pHeight / 2 + 0.5, w: pWidth - 0.2, h: 0.4,
    color: C.dim, fontSize: 9, align: "center", fontFace: "Pretendard",
  });
  pageFooter(s, pageNum, TOTAL);
  return s;
}

demoSlide({
  title: "홈",
  heading: "홈 대시보드",
  subhead: "오늘의 SDC · 레벨 링 · 주간 미션 프로그레스.",
  leftList: [
    "🌅 7시 기상 인증 → +10 SDC",
    "🥗 건강식 인증 → +15 SDC",
    "🚶 걸어서 출근 → 스텝당 +1",
    "🌿 플로깅 → +30 SDC",
  ],
  footnote: "완료 버튼 한 번 → 코인 팝업 애니메이션",
  phoneLabel: "📱 홈 화면",
  pageNum: 6,
});

demoSlide({
  title: "맵",
  heading: "산단 RPG 맵",
  subhead: "실제 산업단지를 게임 맵으로. 핀을 탭하면 참여·보상·거리 정보가 바로 뜬다.",
  leftList: [
    "🏃 산단 러닝 트랙     🍳 소셜다이닝 키친",
    "📚 산단도서관          🧗 클라이밍 짐",
    "🌿 플로깅 존            ☕ 속닥속닥 카페",
  ],
  footnote: "7가지 어트랙션 · 실시간 참여자 수 · 경로 안내",
  phoneLabel: "🗺️ 산단 RPG 맵",
  pageNum: 7,
});

demoSlide({
  title: "트라이브",
  heading: "트라이브 · 온라인 빌리지",
  subhead: "에스토니아 시민권처럼 — 취향 기반 부족에 소속. 전국 산단 명량운동회로 경쟁·연결.",
  leftList: [
    "🔥 LIVE · 전국 산단 명량운동회",
    "#1 창원 새벽러너스          12,450",
    "#2 완주 쿠킹메이트          11,280",
    "#3 구미 수요러너스 👑       10,920",
  ],
  footnote: "온라인에서 친해진 뒤 오프라인 아지트로 안전하게 만남",
  phoneLabel: "🏰 트라이브",
  pageNum: 8,
});

// ────────────────────────────────────────────────────────
// 9. 보상 체계
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "04 · 보상 체계");
  s.addText(
    [
      { text: "SDC", options: { color: C.gold } },
      { text: "로 재미 & 지역 경제 순환", options: { color: C.white } },
    ],
    {
      x: PADX, y: 1.2, w: W - 2 * PADX, h: 1.0,
      fontSize: 40, bold: true, fontFace: "Pretendard",
    }
  );

  const cy = 2.8;
  const ch = 3.6;
  const cw = (W - 2 * PADX - 0.4) / 2;
  // 획득 라인
  const x1 = PADX;
  card(s, { x: x1, y: cy, w: cw, h: ch, fill: C.brand, alpha: 90, border: C.brand });
  s.addText("획득 라인", { x: x1 + 0.4, y: cy + 0.3, w: cw - 0.8, h: 0.3, color: "6EE7B7", fontSize: 12, bold: true, fontFace: "Pretendard" });
  s.addText("게이미피케이션", { x: x1 + 0.4, y: cy + 0.65, w: cw - 0.8, h: 0.5, color: C.white, fontSize: 24, bold: true, fontFace: "Pretendard" });
  ["🎯 퀘스트 완료 → SDC 코인", "⚡ XP 누적 → 레벨업", "🏅 뱃지 해금 · 연속 달성", "🏆 부족 랭킹 상승"].forEach((t, i) => {
    s.addText(t, {
      x: x1 + 0.4, y: cy + 1.5 + i * 0.5, w: cw - 0.8, h: 0.4,
      color: C.white, fontSize: 15, fontFace: "Pretendard",
    });
  });

  // 지출 라인
  const x2 = PADX + cw + 0.4;
  card(s, { x: x2, y: cy, w: cw, h: ch, fill: C.gold, alpha: 92, border: C.gold });
  s.addText("지출 라인", { x: x2 + 0.4, y: cy + 0.3, w: cw - 0.8, h: 0.3, color: "FDE68A", fontSize: 12, bold: true, fontFace: "Pretendard" });
  s.addText("지역 상권 연계", { x: x2 + 0.4, y: cy + 0.65, w: cw - 0.8, h: 0.5, color: C.white, fontSize: 24, bold: true, fontFace: "Pretendard" });
  ["☕ 제휴 카페 20% 할인", "🍳 소셜다이닝 참가권", "💇 미용실 · 식당 쿠폰", "🎫 특별 이벤트 티켓"].forEach((t, i) => {
    s.addText(t, {
      x: x2 + 0.4, y: cy + 1.5 + i * 0.5, w: cw - 0.8, h: 0.4,
      color: C.white, fontSize: 15, fontFace: "Pretendard",
    });
  });

  s.addText('"보조금을 직접 지원이 아니라 재미로 포장한 지역경제 순환."', {
    x: PADX, y: cy + ch + 0.2, w: W - 2 * PADX, h: 0.5,
    color: C.muted, fontSize: 13, italic: true, align: "center", fontFace: "Pretendard",
  });
  pageFooter(s, 9, TOTAL);
}

// ────────────────────────────────────────────────────────
// 10. 레벨 시스템
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "05 · 성장 구조");
  s.addText("12주 · 3단계 레벨업", {
    x: PADX, y: 1.2, w: W - 2 * PADX, h: 1.0,
    color: C.white, fontSize: 40, bold: true, fontFace: "Pretendard",
  });

  const levels = [
    { n: "Lv.1", name: "견습생", week: "Week 1-2", e: "👀", d: "눈으로 구경\n솔로 퀘스트 소소", color: "64748B" },
    { n: "Lv.2", name: "탐험가", week: "Week 3-6", e: "🧭", d: "첫 소셜 퀘스트\n부족 가입\n오프라인 아지트", color: C.brand },
    { n: "Lv.3", name: "길드마스터", week: "Week 7-12", e: "👑", d: "챌린지 주최\n부족 리더십\n멘토링", color: C.brand2 },
  ];
  const gap = 0.35;
  const cw = (W - 2 * PADX - 2 * gap) / 3;
  const cy = 2.7;
  const ch = 3.85;
  levels.forEach((lv, i) => {
    const x = PADX + i * (cw + gap);
    card(s, { x, y: cy, w: cw, h: ch });
    // 상단 컬러 바
    s.addShape("roundRect", {
      x: x, y: cy, w: cw, h: 0.12,
      fill: { type: "solid", color: lv.color },
      line: { color: lv.color, width: 0 },
      rectRadius: 0.06,
    });
    s.addText(lv.week, {
      x, y: cy + 0.3, w: cw, h: 0.35,
      color: C.muted, fontSize: 11, align: "center", fontFace: "Pretendard",
    });
    s.addText(lv.e, {
      x, y: cy + 0.75, w: cw, h: 1.3,
      fontSize: 72, align: "center", valign: "middle",
    });
    s.addText(lv.n, {
      x, y: cy + 2.0, w: cw, h: 0.3,
      color: C.muted, fontSize: 11, align: "center", fontFace: "Pretendard",
    });
    s.addText(lv.name, {
      x, y: cy + 2.3, w: cw, h: 0.5,
      color: C.white, fontSize: 22, bold: true, align: "center", fontFace: "Pretendard",
    });
    s.addText(lv.d, {
      x: x + 0.2, y: cy + 2.85, w: cw - 0.4, h: 0.95,
      color: C.muted, fontSize: 12, align: "center", fontFace: "Pretendard",
    });
  });
  pageFooter(s, 10, TOTAL);
}

// ────────────────────────────────────────────────────────
// 11. After — 12주 뒤
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "06 · 효과성", C.brand, "86EFAC", C.brand);
  s.addText("12주 뒤, 김산단은 —", {
    x: PADX, y: 1.2, w: W - 2 * PADX, h: 1.0,
    color: C.white, fontSize: 40, bold: true, fontFace: "Pretendard",
  });
  s.addText("같은 공장, 다른 하루", {
    x: PADX, y: 2.15, w: W - 2 * PADX, h: 0.35,
    color: C.muted, fontSize: 13, fontFace: "Pretendard",
  });

  const after = [
    { t: "06:52", e: "🌅", d: "기상 인증 +10코인" },
    { t: "08:10", e: "🥗", d: "샐러드 인증 +15코인" },
    { t: "08:30", e: "🚶", d: "걸어서 출근 +20코인" },
    { t: "19:00", e: "📚", d: "수요 독서토론 +50코인" },
    { t: "20:30", e: "🍳", d: "소셜다이닝 +60코인" },
    { t: "감정", e: "😊", d: "소속감, '살만하다'" },
  ];
  const gap = 0.18;
  const cw = (W - 2 * PADX - 5 * gap) / 6;
  const cy = 2.8;
  const ch = 1.6;
  after.forEach((b, i) => {
    const x = PADX + i * (cw + gap);
    card(s, { x, y: cy, w: cw, h: ch, fill: C.brand, alpha: 88, border: C.brand });
    s.addText(b.t, { x, y: cy + 0.12, w: cw, h: 0.25, color: C.muted, fontSize: 9, align: "center", fontFace: "Pretendard" });
    s.addText(b.e, { x, y: cy + 0.3, w: cw, h: 0.6, fontSize: 28, align: "center", valign: "middle" });
    s.addText(b.d, { x: x + 0.05, y: cy + 0.95, w: cw - 0.1, h: 0.6, color: C.white, fontSize: 9, bold: true, align: "center", fontFace: "Pretendard" });
  });

  // 변화 수치
  const stats = [
    { label: "친구", from: "0명", to: "24명", color: "6EE7B7" },
    { label: "주간 외출", from: "1회", to: "7회", color: "FDE68A" },
    { label: "이직 의향", from: "높음", to: "낮음", color: "D8B4FE" },
  ];
  const sgap = 0.3;
  const sw = (W - 2 * PADX - 2 * sgap) / 3;
  const sy = cy + ch + 0.35;
  const sh = 1.5;
  stats.forEach((st, i) => {
    const x = PADX + i * (sw + sgap);
    card(s, { x, y: sy, w: sw, h: sh });
    s.addText(st.label, { x, y: sy + 0.2, w: sw, h: 0.3, color: C.muted, fontSize: 11, align: "center", fontFace: "Pretendard" });
    s.addText(st.from, { x, y: sy + 0.55, w: sw, h: 0.35, color: C.muted, fontSize: 12, align: "center", fontFace: "Pretendard", strike: true });
    s.addText(st.to, { x, y: sy + 0.9, w: sw, h: 0.5, color: st.color, fontSize: 28, bold: true, align: "center", fontFace: "Pretendard" });
  });

  // 간증
  card(s, { x: PADX, y: sy + sh + 0.2, w: W - 2 * PADX, h: 0.55, fill: C.brand, alpha: 88, border: C.brand });
  s.addText(
    [
      { text: '"내가 재밌게 사는 방법이 뭔지 모르고 일만 했는데, ', options: { color: "D1FAE5", italic: true } },
      { text: "산단파크가 가르쳐줬어요.", options: { color: C.brand, italic: true, bold: true } },
      { text: '"', options: { color: "D1FAE5", italic: true } },
    ],
    {
      x: PADX, y: sy + sh + 0.2, w: W - 2 * PADX, h: 0.55,
      fontSize: 13, align: "center", valign: "middle", fontFace: "Pretendard",
    }
  );
  pageFooter(s, 11, TOTAL);
}

// ────────────────────────────────────────────────────────
// 12. 확장성 & 차별화
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);
  addTag(s, "07 · 확장성");
  s.addText(
    [
      { text: "소프트웨어로 시간을 ", options: { color: C.white } },
      { text: "앞당긴다", options: { color: C.gold } },
    ],
    {
      x: PADX, y: 1.2, w: W - 2 * PADX, h: 1.0,
      fontSize: 40, bold: true, fontFace: "Pretendard",
    }
  );

  const cy = 2.6;
  const ch = 3.7;
  const cw = (W - 2 * PADX - 0.4) / 2;

  // 좌: 로드맵
  const x1 = PADX;
  card(s, { x: x1, y: cy, w: cw, h: ch });
  s.addText("전국 확장 로드맵", {
    x: x1 + 0.35, y: cy + 0.3, w: cw - 0.7, h: 0.35,
    color: C.muted, fontSize: 12, fontFace: "Pretendard",
  });
  const roadmap = [
    { tag: "Pilot", desc: "구미 파일럿 1개", c: C.gold },
    { tag: "Phase 1", desc: "창원 · 완주 · 반월 +3", c: "6EE7B7" },
    { tag: "Phase 2", desc: "문화친화 산단 10개 표준", c: "D8B4FE" },
    { tag: "Vision", desc: "전국 1,330개 중 100개 커버", c: C.white },
  ];
  roadmap.forEach((r, i) => {
    const ry = cy + 0.85 + i * 0.6;
    s.addText(r.tag, {
      x: x1 + 0.35, y: ry, w: 1.3, h: 0.45,
      color: r.c, fontSize: 14, bold: true, fontFace: "Pretendard", valign: "middle",
    });
    s.addText(r.desc, {
      x: x1 + 1.7, y: ry, w: cw - 1.7 - 0.35, h: 0.45,
      color: C.white, fontSize: 14, fontFace: "Pretendard", valign: "middle",
    });
  });

  // 우: 차별화
  const x2 = PADX + cw + 0.4;
  card(s, { x: x2, y: cy, w: cw, h: ch });
  s.addText("차별화", {
    x: x2 + 0.35, y: cy + 0.3, w: cw - 0.7, h: 0.35,
    color: C.muted, fontSize: 12, fontFace: "Pretendard",
  });
  const diffs = [
    { a: "블라인드 (대기업)", b: "→ 중소 산단" },
    { a: "만보기 (걸음만)", b: "→ 사회적 연결" },
    { a: "소모임 (도시)", b: "→ 산단 특화" },
    { a: "기존 정책 (HW)", b: "→ 커뮤니티(SW)" },
  ];
  diffs.forEach((d, i) => {
    const ry = cy + 0.85 + i * 0.6;
    s.addText(d.a, {
      x: x2 + 0.35, y: ry, w: (cw - 0.7) / 2, h: 0.45,
      color: C.muted, fontSize: 13, fontFace: "Pretendard", valign: "middle",
    });
    s.addText(d.b, {
      x: x2 + 0.35 + (cw - 0.7) / 2, y: ry, w: (cw - 0.7) / 2, h: 0.45,
      color: "6EE7B7", fontSize: 13, bold: true, fontFace: "Pretendard", valign: "middle", align: "right",
    });
  });

  s.addText(
    [
      { text: "하드웨어 공원 하나 예산으로 ", options: { color: C.muted } },
      { text: "100개 산단 커뮤니티", options: { color: C.gold, bold: true } },
      { text: "를 동시에.", options: { color: C.muted } },
    ],
    {
      x: PADX, y: cy + ch + 0.2, w: W - 2 * PADX, h: 0.4,
      fontSize: 13, align: "center", fontFace: "Pretendard",
    }
  );
  pageFooter(s, 12, TOTAL);
}

// ────────────────────────────────────────────────────────
// 13. 클로징
// ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBackground(s);

  s.addText("산업단지 = 團地 · 무리가 모인 땅", {
    x: 0, y: 1.2, w: W, h: 0.4,
    color: C.muted, fontSize: 14, align: "center", fontFace: "Pretendard",
  });
  s.addText(
    [
      { text: "다시, 이 땅에\n", options: { color: C.white } },
      { text: "사람을 모읍니다.", options: { color: C.gold } },
    ],
    {
      x: 0, y: 1.8, w: W, h: 2.0,
      fontSize: 64, bold: true, align: "center", fontFace: "Pretendard", valign: "middle",
    }
  );
  s.addText("게임처럼 재미있게, 지속가능하게, 전국 어디에서나.", {
    x: 0, y: 4.1, w: W, h: 0.5,
    color: C.muted, fontSize: 18, align: "center", fontFace: "Pretendard",
  });

  // QR + URL
  const qrX = W / 2 - 2.3;
  const qrY = 4.9;
  card(s, { x: qrX, y: qrY, w: 4.6, h: 1.4 });
  // QR (외부 이미지)
  s.addImage({
    path: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://sandan-park.vercel.app",
    x: qrX + 0.2, y: qrY + 0.2, w: 1.0, h: 1.0,
  });
  s.addText("지금 써보기", {
    x: qrX + 1.4, y: qrY + 0.3, w: 3.0, h: 0.35,
    color: C.muted, fontSize: 12, fontFace: "Pretendard",
  });
  s.addText("sandan-park.vercel.app", {
    x: qrX + 1.4, y: qrY + 0.65, w: 3.0, h: 0.55,
    color: C.gold, fontSize: 20, bold: true, fontFace: "Pretendard",
  });

  s.addText("산단파크 — 2026 산업단지 청년 정책 해커톤", {
    x: 0, y: H - 0.55, w: W, h: 0.35,
    color: C.dim, fontSize: 11, align: "center", fontFace: "Pretendard",
  });
  pageFooter(s, 13, TOTAL);
}

// ────────────────────────────────────────────────────────
pptx.writeFile({ fileName: OUT }).then(() => {
  console.log(`✓ 생성 완료: ${OUT}`);
});
