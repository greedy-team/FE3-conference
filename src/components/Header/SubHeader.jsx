import greedyIcon from "../../assets/icons/Greedy Icon.svg";
import hamburgerIcon from "../../assets/icons/Hamburger Icon.svg";
import xIcon from "../../assets/icons/X Icon.svg";
import { useLocation, useNavigate, Link } from "react-router-dom";

function TextBox({ children }) {
  return (
    <div className="flex text-center text-black font-pretendard tracking-[-0.07em] text-xs font-semibold lg:text-xl 2xl:text-4xl">
      {children}
    </div>
  );
}

export default function SubHeader({ navigationItems }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sticky left-0 right-0 top-0 z-50 border-b border-neutral-300">
      <div className="flex flex-row items-center justify-between p-4 bg-white">
        <Link to={"/"} className="flex items-center ">
          <img
            className="w-10 h-10 2xl:w-25 2xl:h-25"
            src={greedyIcon}
            alt="greedy icon"
          />
          <div className="w-3 2xl:w-6"></div>
          <div className="text-center text-black font-pretendard tracking-[-0.02em] text-xl font-bold 2xl:text-5xl">
            세종 그리디콘
          </div>
        </Link>

        <div className="lg:hidden">
          {location.pathname !== "/MenuPage" ? (
            <Link to={"/MenuPage"}>
              <img
                className="w-10 h-10"
                src={hamburgerIcon}
                alt="hamburger icon"
              />
            </Link>
          ) : (
            <button onClick={() => navigate(-1)}>
              <img className="w-7 h-7" src={xIcon} alt="close icon" />
            </button>
          )}
        </div>

        <div className="hidden lg:block flex flex-6">
          <div className="flex flex-row gap-4.5 justify-end">
            {navigationItems.map(({ id, label, path }) => (
              <Link key={id} to={path}>
                <TextBox>{label}</TextBox>
              </Link>
            ))}
            <div className="w-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
