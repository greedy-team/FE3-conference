import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IntroductionPage from './pages/IntroductionPage';
import LotteryPage from './pages/LotteryPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/IntroductionPage" element={<IntroductionPage />} />
        <Route path="/LotteryPage" element={<LotteryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
