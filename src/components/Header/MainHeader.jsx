import greedyIcon from "../../assets/icons/Greedy Icon.svg";

export default function MainHeader() {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 border-b border-neutral-300">
      <div className="flex flex-row items-center p-4 bg-white">
        <div className="flex items-center">
          <img className="w-10 h-10" src={greedyIcon} />
          <div className="w-3"></div>
          <div className="text-center text-black font-pretendard tracking-[-0.02em] text-xl font-bold">
            세종 그리디콘
          </div>
        </div>

        <div className="flex-1 flex flex-col p-2 lg:hidden max-86:hidden">
          <div className="flex-1 text-center border-b border-black" />
          <div className="flex-1 text-center" />
        </div>

        <div className="text-center text-black tracking-[-0.07em] text-lg font-bold lg:hidden max-86:hidden">
          11.19-11.20
        </div>
      </div>
    </div>
  );
}
