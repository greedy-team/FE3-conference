import MainCard from "./MainCard"
import greedyIcon from '../../assets/icons/Greedy Full Icon.svg';

export default function MainContent () {
  return (
		<div className="w-full mt-[80px] p-[15px] flex flex-col justify-center items-center gap-[10px] bg-white">
			<MainCard title="컨퍼런스" subTitle="소개 및 일정" buttonName="더보기" />
			<MainCard title="경품추첨" buttonName="더보기" />
			<MainCard title="About us" buttonName="더보기">
				<img className="w-40 h-40" src={greedyIcon}/>
			</MainCard> 
		</div>
  )
}