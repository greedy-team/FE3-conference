import MainCard from "./MainCard";

export default function MainContent({ navigationItems }) {
  return (
    <div className="flex-1 flex flex-col justify-between bg-neutral-100 ">
      <div className="flex flex-col justify-center p-4 gap-6 sm:p-8 lg:gap-14 lg:p-12 lg:w-3/4 lg:mx-auto 2xl:my-auto">
        <div className="flex flex-col gap-4">
          <div className="text-center text-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold">
            세종 <span className="text-greedy-secondary">그리디콘</span>
          </div>
          <div className="hidden lg:flex flex-row justify-center gap-4 ">
            <div className="w-full lg:max-w-90 2xl:max-w-110 px-2.5 ">
              <div className="border-b-2 border-black h-1/2" />
            </div>
            <div className="flex text-center text-black font-pretendard text-3xl 2xl:text-5xl font-semibold">
              11.19-11.20
            </div>
          </div>
        </div>
        <div className="text-center text-black font-pretendard text-xs xs:text-sm font-bold sm:text-2xl lg:text-3xl 2xl:text-4xl">
          그리디(GREEDY) & 소프트웨어중심대학 사업단
        </div>
      </div>
      <div className="flex flex-col w-full p-4 justify-center items-center gap-4 sm:p-8 lg:flex-row 2xl:gap-8">
        {navigationItems
          .filter((item) => item.id !== "nav-home")
          .map(({ id, title, subTitle, path }) => (
            <MainCard subTitle={subTitle} title={title} key={id} path={path} />
          ))}
      </div>
    </div>
  );
}
