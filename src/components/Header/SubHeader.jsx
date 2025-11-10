import greedyIcon from '../../assets/icons/Black Greedy Icon.svg';
import { Link } from 'react-router-dom';

function TextBox({ children }) {
  return (
    <div className="flex text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[10pt] font-semibold lg:text-[20px]">
      {children}
    </div>
  )
}

export default function SubHeader({ navigationItems }) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-row items-center px-[20px] py-[15px] bg-white">
        <div className="flex flex-5 items-center ">
          <img className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" src={greedyIcon}/>
          <div className="w-[12px]"></div>
          <div className="text-center text-[#333333] font-pretendard tracking-[-0.02em] text-[14pt] font-bold lg:text-[28px]">세종 그리디콘</div>
        </div>
        
        <div className="flex flex-6 ">
          <div className="flex flex-5 flex-row gap-[18px] justify-end">
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
  )
}