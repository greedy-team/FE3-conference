import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';

function App() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App
