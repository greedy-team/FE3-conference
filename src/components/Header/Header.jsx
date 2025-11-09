import { useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

export default function Header({ navigationItems }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <MainHeader />
      ) : (
        <SubHeader navigationItems={navigationItems}/>
      )}
      <div className="h-[60px] lg:h-[80px] " ></div>
    </>
  )
}