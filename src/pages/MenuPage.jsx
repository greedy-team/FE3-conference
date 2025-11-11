import { Link } from "react-router-dom";
import arrowIcon from "../assets/icons/SmallArrow Icon.svg";

export default function MenuPage({navigationItems}) {
  return (
    <div className="flex flex-col p-3 gap-5">
      {navigationItems.map(({ id, title, path }) => (
        <Link key={id} to={path} className="flex justify-between items-center text-3xl font-semibold border-b py-4 m-1">
          {title}
          <img className="w-[30px] h-[30px]" src={arrowIcon} />
        </Link>
      ))}
    </div>
  )
}