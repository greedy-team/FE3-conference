import greedyIcon from "../../assets/icons/Greedy Icon.svg";
import hamburgerIcon from "../../assets/icons/Hamburger Icon.svg";
import xIcon from "../../assets/icons/X Icon.svg";
import { useLocation, useNavigate, Link } from "react-router-dom";

function TextBox({ children }) {
  return (
    <div className="flex text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[10pt] font-semibold lg:text-[20px]">
      {children}
    </div>
  );
}

export default function SubHeader({ navigationItems }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b">
      <div className="flex flex-row items-center justify-between px-[20px] py-[15px] bg-white">

        <Link to={"/"} className="flex items-center ">
          <img className="w-[40px] h-[40px]" src={greedyIcon} />
          <div className="w-[12px]"></div>
          <div className="text-center text-[#333333] font-pretendard tracking-[-0.02em] text-[18pt] font-bold">
            세종 그리디콘
          </div>
        </Link>

        <div className="lg:hidden">
          {location.pathname !== '/MenuPage' ? 
            <Link to={"/MenuPage"}>
              <img className="w-[40px] h-[40px]" src={hamburgerIcon} /> 
            </Link> :
            <button onClick={() => navigate(-1)}>  
              <img className="w-[30px] h-[30px]" src={xIcon} /> 
            </button>
          }
        </div>

        <div className="hidden lg:block flex flex-6">
          <div className="flex flex-row gap-[18px] justify-end">
            {navigationItems.map(({ id, label, path }) => (
              <Link key={id} to={path}>
                <TextBox>{label}</TextBox>
              </Link>
            ))}
            <div className="w-[5px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
