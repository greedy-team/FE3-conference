import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IntroductionPage from './pages/IntroductionPage';
import LotteryPage from './pages/LotteryPage';

const navigationItems = [
  { id: 'nav-home', label: 'Home', path: '/' },
  { id: 'nav-intro', label: '소개', title: '소개 및 일정', subTitle: '2025 그리디 컨퍼런스', path: '/IntroductionPage' },
  { id: 'nav-lottery', label: '추첨', title: '경품 추첨', subTitle: '그린이 키 맞추기', path: '/LotteryPage' },
  { id: 'nav-about', label: 'About us', title: 'ABOUT US', subTitle: '그리디 알아보기', path: 'https://greedy-team.netlify.app/' },
];

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header navigationItems={navigationItems}/>
      <Routes>
        <Route path="/" element={<LandingPage navigationItems={navigationItems} />} />
        <Route path="/IntroductionPage" element={<IntroductionPage />} />
        <Route path="/LotteryPage" element={<LotteryPage />} />
      </Routes>
      <Footer navigationItems={navigationItems}/>
    </div>
  );
}

export default App;
