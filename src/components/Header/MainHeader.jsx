import greedyIcon from '../../assets/icons/Black Greedy Icon.svg';

export default function MainHeader() {
  return (
    <div className="fixed left-0 right-0 top-0 lg:hidden">
      <div className=" flex flex-row items-center px-[20px] py-[15px] bg-white">
        <img className="w-18 h-18 w-[40px] h-[40px]" src={greedyIcon}/>
        <div className="w-[12px]"></div>
        <div className="flex-1.4 text-center text-[#333333] font-pretendard tracking-[-0.02em] text-[18pt] font-bold">세종 그리디콘</div>
        <div className="flex-1 flex flex-col px-[10px]">
          <div className="flex-1 text-center border-b-1 border-[#333333]"/>
          <div className="flex-1 text-center"/>
        </div>
        <div className="flex-1.4 text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[18pt] font-bold">11.19-11.20</div>
      </div>
    </div>
  )
}
