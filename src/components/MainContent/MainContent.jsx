import MainCard from "./MainCard"

export default function MainContent () {
  return (
    <div>
      <div className="lg:bg-white">
        <div className="hidden lg:flex lg:flex-col lg:px-[28px] lg:py-[20px] lg:bg-white lg:w-[700px] lg:mx-auto lg:mt-[3%]">
          <div className="flex text-center justify-center text-justify text-[#333333] font-pretendard tracking-[-0.02em] text-[64pt] font-bold">세종 그리디콘</div>
          <div className="flex flex-row mx-[85px]">
            <div className="flex-12 flex flex-col px-[10px]">
              <div className="flex-1 text-center border-b-1 border-[#333333]"/>
              <div className="flex-1 text-center"/>
            </div>
            <div className="flex-7 text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[25pt] font-semibold">11.19-11.20</div>
          </div>
          <div className="h-[80px]"></div>
          <div className="text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[20pt] font-bold">그리디(GREEDY) & 소프트웨어중심대학 사업단</div>
        </div>
      </div>

      <div className="w-full mt-[50px] px-[5%] py-[6%] flex flex-col justify-center items-center gap-[15px] bg-white lg:flex-row">
        <MainCard title="소개 및 일정" subTitle="2025 그리디 컨퍼런스" />
        <MainCard title="경품 추첨" subTitle="그린이 키 맞추기" />
        <MainCard title="ABOUT US" subTitle="그리디 알아보기" />
      </div>
    </div>
  )
}