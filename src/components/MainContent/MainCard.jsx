import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/Arrow.svg";

export default function MainCard({ title, subTitle, children, id, path }) {
  return (
    <Link
      key={id}
      to={path}
      className="w-full min-h-[150px] px-[20px] py-[5px] bg-greedy rounded-[10px] flex flex-col shadow-[0_3px_35px_#C8D1CEAA]"
    >
      <div className="min-h-[100px]">{children}</div>
      <div className="text-white text-[10pt] tracking-[-0.02em] font-pretendard font-semibold -my-3">
        {subTitle}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-white text-[30px] tracking-[-0.02em] font-pretendard font-bold ">
          {title}
        </div>
        <img className="w-13 h-15 justify-center" src={arrowIcon} />
      </div>
    </Link>
  );
}
