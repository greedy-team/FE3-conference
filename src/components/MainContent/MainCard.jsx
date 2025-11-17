import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/Arrow Icon.svg";

export default function MainCard({ title, subTitle, children, id, path }) {
  return (
    <Link
      key={id}
      to={path}
      className="w-full px-5 py-1 bg-greedy-secondary rounded-lg flex flex-col shadow-[0_1_8_#C8D1CEAA] 2xl:p-6 2xl:gap-3 2xl:rounded-4xl"
    >
      <div className="min-h-25 2xl:h-50">{children}</div>
      <div className="text-white text-xs tracking-[-0.02em] font-pretendard font-semibold -my-3 2xl:text-2xl">
        {subTitle}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-white text-3xl tracking-[-0.02em] font-pretendard font-bold 2xl:text-6xl">
          {title}
        </div>
        <img
          className="w-13 h-15 justify-center 2xl:w-26 2xl:h-20 2xl:mr-3"
          src={arrowIcon}
          alt="arrow"
        />
      </div>
    </Link>
  );
}
