import MainCard from "./MainCard";

export default function MainContent({ navigationItems }) {
  return (
    <div className="flex flex-col justify-between bg-neutral-100 ">
      <div className="flex flex-col p-8 gap-6 lg:gap-14 lg:p-12 lg:w-3/4 lg:mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-center text-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl  font-bold">
            세종 <span className="text-greedy-secondary">그리디콘</span>
          </div>
          <div className="hidden lg:flex flex-row justify-center gap-4 ">
            <div className="w-full lg:max-w-2xs px-2.5 ">
              <div className="border-b-2 border-black h-1/2" />
            </div>
            <div className="flex text-center text-black font-pretendard text-3xl font-semibold">
              11.19-11.20
            </div>
          </div>
        </div>
        <div className="text-center text-black font-pretendard text-xs xs:text-sm font-bold sm:text-2xl lg:text-3xl">
          그리디(GREEDY) & 소프트웨어중심대학 사업단
        </div>
      </div>
      <div className="flex flex-col w-full p-8 justify-center items-center gap-4 lg:flex-row">
        {navigationItems
          .filter((item) => item.id !== "nav-home")
          .map(({ id, title, subTitle, path }) => (
            <MainCard subTitle={subTitle} title={title} key={id} path={path} />
          ))}
      </div>
    </div>
  );
}
