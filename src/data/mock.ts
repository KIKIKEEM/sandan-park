export type Quest = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  coin: number;
  xp: number;
  category: "daily" | "social" | "event" | "weekly";
  completed: boolean;
  time?: string;
};

export type Attraction = {
  id: string;
  name: string;
  emoji: string;
  type: "dining" | "running" | "reading" | "climbing" | "plogging" | "cafe" | "tribe";
  x: number;
  y: number;
  description: string;
  reward: number;
  participants: number;
};

export type Tribe = {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  rank: number;
  level: number;
  description: string;
  colorFrom: string;
  colorTo: string;
};

export type Badge = {
  id: string;
  emoji: string;
  name: string;
  earned: boolean;
  date?: string;
};

export const user = {
  name: "김산단",
  age: 28,
  location: "구미산단",
  level: 2,
  levelName: "탐험가",
  xp: 340,
  xpToNext: 500,
  coins: 1280,
  streak: 12,
  tribeName: "구미 수요러너스",
  friendsCount: 24,
};

export const dailyQuests: Quest[] = [
  {
    id: "q1",
    emoji: "🌅",
    title: "7시 기상 인증",
    description: "오전 7시 이전 기상 사진 업로드",
    coin: 10,
    xp: 5,
    category: "daily",
    completed: true,
    time: "06:52",
  },
  {
    id: "q2",
    emoji: "🥗",
    title: "건강식 한 끼",
    description: "샐러드, 과일, 도시락 등 인증",
    coin: 15,
    xp: 10,
    category: "daily",
    completed: true,
    time: "08:10",
  },
  {
    id: "q3",
    emoji: "🚶",
    title: "걸어서 출근",
    description: "스텝 2,000보 달성",
    coin: 20,
    xp: 15,
    category: "daily",
    completed: false,
  },
  {
    id: "q4",
    emoji: "🌿",
    title: "플로깅 챌린지",
    description: "산단 둘레길에서 쓰레기 줍기 30분",
    coin: 30,
    xp: 20,
    category: "daily",
    completed: false,
  },
];

export const socialQuests: Quest[] = [
  {
    id: "s1",
    emoji: "📚",
    title: "수요 독서토론",
    description: "오늘 저녁 7시, 산단도서관",
    coin: 50,
    xp: 40,
    category: "social",
    completed: false,
    time: "19:00",
  },
  {
    id: "s2",
    emoji: "🍳",
    title: "소셜다이닝: 애플민트 모히또",
    description: "같이 키운 애플민트로 모히또 만들기",
    coin: 60,
    xp: 50,
    category: "social",
    completed: false,
    time: "20:30",
  },
  {
    id: "s3",
    emoji: "🧗",
    title: "실내 암벽등반 체험",
    description: "초보 환영, 트라이브 6명 모집 중",
    coin: 40,
    xp: 35,
    category: "social",
    completed: false,
    time: "토 14:00",
  },
];

export const weeklyMission = {
  title: "산단 라이프 마스터",
  progress: 4,
  total: 7,
  reward: "x10 보너스 + 길드 티켓",
};

export const attractions: Attraction[] = [
  { id: "a1", name: "산단 러닝 트랙", emoji: "🏃", type: "running", x: 20, y: 30, description: "둘레 2.5km 야간 조명 코스", reward: 25, participants: 42 },
  { id: "a2", name: "소셜다이닝 키친", emoji: "🍳", type: "dining", x: 65, y: 25, description: "매주 수·금 저녁 소셜다이닝", reward: 60, participants: 18 },
  { id: "a3", name: "산단도서관", emoji: "📚", type: "reading", x: 40, y: 55, description: "독서토론, 조용한 작업공간", reward: 50, participants: 12 },
  { id: "a4", name: "클라이밍 짐", emoji: "🧗", type: "climbing", x: 75, y: 65, description: "초보 강습 매주 토요일", reward: 40, participants: 8 },
  { id: "a5", name: "플로깅 존", emoji: "🌿", type: "plogging", x: 25, y: 75, description: "산단 생태 둘레길", reward: 30, participants: 24 },
  { id: "a6", name: "속닥속닥 카페", emoji: "☕", type: "cafe", x: 55, y: 40, description: "코인으로 결제 가능 (20% 할인)", reward: 0, participants: 67 },
  { id: "a7", name: "트라이브 아지트", emoji: "🏠", type: "tribe", x: 50, y: 80, description: "길드 모임 공간", reward: 100, participants: 34 },
];

export const myTribes: Tribe[] = [
  {
    id: "t1",
    name: "구미 수요러너스",
    emoji: "🏃‍♂️",
    memberCount: 14,
    rank: 3,
    level: 5,
    description: "매주 수요일 저녁 7시, 산단 러닝 크루",
    colorFrom: "from-emerald-400",
    colorTo: "to-teal-500",
  },
  {
    id: "t2",
    name: "속닥속닥 책방",
    emoji: "📚",
    memberCount: 9,
    rank: 7,
    level: 3,
    description: "조용한 독서러들의 모임",
    colorFrom: "from-amber-400",
    colorTo: "to-orange-500",
  },
];

export const recommendedTribes: Tribe[] = [
  {
    id: "r1",
    name: "산단 쿠킹 클럽",
    emoji: "🍳",
    memberCount: 22,
    rank: 1,
    level: 8,
    description: "레시피 공유 + 소셜다이닝",
    colorFrom: "from-rose-400",
    colorTo: "to-pink-500",
  },
  {
    id: "r2",
    name: "주말 등반러",
    emoji: "🧗",
    memberCount: 11,
    rank: 5,
    level: 4,
    description: "토요일 클라이밍, 일요일 등산",
    colorFrom: "from-violet-400",
    colorTo: "to-purple-500",
  },
  {
    id: "r3",
    name: "AI와 함께 사는 법",
    emoji: "🤖",
    memberCount: 17,
    rank: 2,
    level: 6,
    description: "AI 도구 공부, 사이드 프로젝트",
    colorFrom: "from-sky-400",
    colorTo: "to-blue-500",
  },
];

export const levelLabels: Record<number, string> = {
  1: "견습생",
  2: "탐험가",
  3: "길드마스터",
};

export const badges: Badge[] = [
  { id: "b1", emoji: "🌅", name: "아침형 인간", earned: true, date: "2026-04-01" },
  { id: "b2", emoji: "🏃", name: "러닝 입문", earned: true, date: "2026-04-03" },
  { id: "b3", emoji: "🤝", name: "첫 친구", earned: true, date: "2026-04-05" },
  { id: "b4", emoji: "📚", name: "책벌레", earned: true, date: "2026-04-10" },
  { id: "b5", emoji: "🔥", name: "7일 연속 출석", earned: true, date: "2026-04-12" },
  { id: "b6", emoji: "🍳", name: "소셜다이닝 데뷔", earned: true, date: "2026-04-14" },
  { id: "b7", emoji: "🧗", name: "도전러", earned: false },
  { id: "b8", emoji: "👑", name: "길드마스터", earned: false },
  { id: "b9", emoji: "🏆", name: "부족 올림픽 우승", earned: false },
];

export const beforeAfter = {
  before: [
    { time: "07:00", emoji: "😴", text: "알람 두 번 끄고 겨우 기상" },
    { time: "08:30", emoji: "🚗", text: "차 안에서 편의점 삼각김밥" },
    { time: "09-18", emoji: "🏭", text: "일, 일, 일..." },
    { time: "19:00", emoji: "🍜", text: "혼자 라면, 맥주 2캔" },
    { time: "22:00", emoji: "🎮", text: "게임하다 잠" },
    { time: "감정", emoji: "😔", text: "외로움, 이직 욕구" },
  ],
  after: [
    { time: "06:52", emoji: "🌅", text: "기상 인증 +10코인" },
    { time: "08:10", emoji: "🥗", text: "샐러드 인증 +15코인" },
    { time: "08:30", emoji: "🚶", text: "걸어서 출근 +20코인" },
    { time: "19:00", emoji: "📚", text: "수요 독서토론 +50코인" },
    { time: "20:30", emoji: "🍳", text: "소셜다이닝 +60코인" },
    { time: "감정", emoji: "😊", text: "소속감, '살만하다'" },
  ],
};

export const leaderboard = [
  { rank: 1, name: "창원 새벽러너스", score: 12450, emoji: "🏃‍♀️" },
  { rank: 2, name: "완주 쿠킹메이트", score: 11280, emoji: "🍳" },
  { rank: 3, name: "구미 수요러너스", score: 10920, emoji: "🏃‍♂️", me: true },
  { rank: 4, name: "반월 북클럽", score: 9840, emoji: "📚" },
  { rank: 5, name: "시화 플로거스", score: 9210, emoji: "🌿" },
];
