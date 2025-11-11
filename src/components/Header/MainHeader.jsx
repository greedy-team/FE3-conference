import greedyIcon from "../../assets/icons/Greedy Icon.svg";

export default function MainHeader() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b">
      <div className="flex flex-row items-center px-[20px] py-[15px] bg-white">

        <div className="flex items-center">
          <img className="w-[40px] h-[40px]" src={greedyIcon} />
          <div className="w-[12px]"></div>
          <div className="text-center text-[#333333] font-pretendard tracking-[-0.02em] text-[18pt] font-bold">
            세종 그리디콘
          </div>
        </div>

        <div className="flex-1 flex flex-col px-[10px] lg:hidden max-[344px]:hidden">
          <div className="flex-1 text-center border-b-1 border-[#333333]" />
          <div className="flex-1 text-center" />
        </div>

        <div className="text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[18pt] font-bold lg:hidden max-[344px]:hidden">
          11.19-11.20
        </div>
      </div>
    </div>
  );
}
