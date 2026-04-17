# 산단파크 (SANDAN PARK)

> 산업단지에서 산다. 레벨업하며 산다.
> 산단 청년 근로자의 외로움을 온·오프 믹스 RPG로 전환하는 게이미피케이션 플랫폼.

## 📱 프로토타입 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 (또는 3001) 접속. **모바일 크기로 열어야 가장 잘 보입니다** (480px 기준 최적화).

빌드:
```bash
npm run build
npm run start
```

## 📄 문서

| 파일 | 용도 |
|---|---|
| [PRD.md](PRD.md) | 제품 요구사항 (심사기준 100점 매칭) |
| [PITCH.md](PITCH.md) | 5분 발표 대본 + 전략 |
| [VISUAL_PROMPT.md](VISUAL_PROMPT.md) | 16:9 키비주얼 프롬프트 (Midjourney/DALL-E) |

## 🗺️ 페이지 구조

| 경로 | 설명 |
|---|---|
| `/` | 홈 — 퀘스트 대시보드, SDC 잔액, 레벨, 주간 미션 |
| `/map` | 산단 RPG 맵 — 어트랙션 핀, 바텀시트 |
| `/tribe` | 트라이브 — 온라인 빌리지, 내 부족, 전국 랭킹 |
| `/profile` | 프로필 — 캐릭터, 뱃지, Before→After 진입 |
| `/profile/story` | Before → After 스토리 (발표 킬링파트) |

## 🎨 디자인 톤
- 모바일 퍼스트 (480px 고정)
- 다크 테마, glass morphism
- Brand: Emerald `#22C55E` · Purple `#A855F7` · Gold `#FACC15`
- 감성: 배틀그라운드 맵의 삭막함 + 포켓몬GO의 탐험감 + 당근마켓의 따뜻함

## 🧰 스택
- Next.js 16 (App Router)
- Tailwind CSS v4
- Lucide React (아이콘)
- TypeScript

## 🚀 배포
Vercel에 바로 배포 가능:
```bash
npx vercel
```
