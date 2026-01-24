# 세종 그리디콘 🎯

세종 그리디콘은 세종대학교 SW중심대학사업단과 그리디가 공동 주최 및 주관하는 개발 컨퍼런스로, 그리디의 ‘교내 개발 생태계에 선한 영향력을’ 라는 모토를 실현하고자 개최하게 되었습니다.

## 🌐 배포 링크

**[https://greedy-conference.netlify.app/](https://greedy-conference.netlify.app/)**

## 📋 프로젝트 소개

컨퍼런스에 그리디를 간단하게 소개하기 위한 프론트엔드 3기의 프로젝트입니다.

## ✨ 주요 기능

- **🏠 랜딩 페이지**: 컨퍼런스 주요 정보 및 빠른 네비게이션
- **📅 컨퍼런스 소개**: 일정, 장소, 연사자 정보 및 세션 상세 내용
- **🎰 경품 추첨**: "그린이 키 맞추기" 게임을 통한 실시간 추첨 기능
- **📱 반응형 디자인**: 모바일부터 데스크톱까지 모든 기기에서 최적화된 사용자 경험
- **🎨 모던 UI/UX**: Tailwind CSS 기반의 세련된 디자인

## 🛠️ 기술 스택

### Frontend
- **React 19** - UI 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **React Router DOM** - 클라이언트 사이드 라우팅
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크

### 라이브러리
- **react-confetti** - 당첨 효과 애니메이션
- **canvas-confetti** - 추가 축하 효과

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Vite Plugin React** - React Fast Refresh 지원

## 🚀 시작하기

### 필수 요구사항

- Node.js (v16 이상 권장)
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/greedy-team/FE3-conference.git
cd FE3-conference
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:5173
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
FE3-conference/
├── public/              # 정적 파일
├── src/
│   ├── assets/         # 이미지 및 아이콘 리소스
│   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Lottery/
│   │   ├── MainContent/
│   │   └── ...
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── LandingPage.jsx
│   │   ├── IntroductionPage.jsx
│   │   ├── LotteryPage.jsx
│   │   └── MenuPage.jsx
│   ├── images/         # 이미지 파일
│   ├── App.jsx         # 메인 앱 컴포넌트
│   ├── main.jsx        # 앱 엔트리 포인트
│   └── index.css       # 전역 스타일
├── index.html          # HTML 템플릿
├── package.json
├── vite.config.js      # Vite 설정
├── tailwind.config.js  # Tailwind 설정
└── eslint.config.js    # ESLint 설정
```

## 🎯 주요 페이지

### 1. 랜딩 페이지 (`/`)
- 컨퍼런스 개요
- 주요 기능으로의 빠른 접근

### 2. 소개 페이지 (`/IntroductionPage`)
- 컨퍼런스 일정 및 장소 정보
- 연사자 프로필 및 세션 소개
- 수요일/목요일별 세션 분류

### 3. 추첨 페이지 (`/LotteryPage`)
- 실시간 경품 추첨 기능
- 응모권 번호 입력 및 당첨자 선정
- 애니메이션 효과 및 축하 연출

## 👥 Contributors

<a href="https://github.com/Johncakes">
  <img src="https://avatars.githubusercontent.com/u/48044453?v=4" width="50" height="50" alt="Johncakes" />
</a>
<a href="https://github.com/dkr-sjr">
  <img src="https://avatars.githubusercontent.com/u/183203164?v=4" width="50" height="50" alt="dkr-sjr" />
</a>
<a href="https://github.com/ehlung">
  <img src="https://avatars.githubusercontent.com/u/203632853?v=4" width="50" height="50" alt="ehlung" />
</a>
<a href="https://github.com/yoonjaehong26">
  <img src="https://avatars.githubusercontent.com/u/182422678?v=4" width="50" height="50" alt="yoonjaehong26" />
</a>

## 🔗 관련 링크

- [Greedy Team 공식 사이트](https://greedy-team.netlify.app/)
- [배포 사이트](https://greedy-conference.netlify.app/)
