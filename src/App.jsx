import MainHeader from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IntroductionPage from './pages/IntroductionPage';
import LotteryPage from './pages/LotteryPage';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/IntroductionPage" element={<IntroductionPage />} />
        <Route path="/LotteryPage" element={<LotteryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
