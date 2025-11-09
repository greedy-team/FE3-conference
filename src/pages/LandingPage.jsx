import MainHeader from '../components/Header/MainHeader';
import MainContent from "../components/MainContent/MainContent"

export default function LandingPage({navigationItems}) {
  return(
    <div>
      <MainContent navigationItems={navigationItems} />
    </div>
  )
}