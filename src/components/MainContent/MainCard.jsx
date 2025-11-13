import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/Arrow Icon.svg";

export default function MainCard({ title, subTitle, children, id, path }) {
  return (
    <Link
      key={id}
      to={path}
      className="w-full px-5 py-1 bg-greedy-secondary rounded-lg flex flex-col shadow-[0_1_8_#C8D1CEAA]"
    >
      <div className="min-h-25">{children}</div>
      <div className="text-white text-xs tracking-[-0.02em] font-pretendard font-semibold -my-3">
        {subTitle}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-white text-3xl tracking-[-0.02em] font-pretendard font-bold ">
          {title}
        </div>
        <img className="w-13 h-15 justify-center" src={arrowIcon} />
      </div>
    </Link>
  );
}
