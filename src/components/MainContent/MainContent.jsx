import MainCard from "./MainCard"
import greedyIcon from '../../assets/icons/Black Greedy Icon.svg';

export default function MainContent () {
  return (
		<div className="w-full mt-[60px] px-[5%] py-[10%] flex flex-col justify-center items-center gap-[15px] bg-white
      md:flex-row md:mt-[400px]
    ">
			<MainCard title="소개 및 일정" subTitle="2025 그리디 컨퍼런스"/>
			<MainCard title="경품 추첨" subTitle="그린이 키 맞추기" />
			<MainCard title="ABOUT US" subTitle="그리디 알아보기">
      <div className="h-[15px]"></div>
        <div className="flex flex-col items-end">
        <img className="w-18 h-18 lg:w-12 lg:h-12" src={greedyIcon}/>
      </div>
      <div className="h-30 lg:hidden"></div>
			</MainCard> 
		</div>
  )
}