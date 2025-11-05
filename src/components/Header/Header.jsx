import greedyIcon from '../../assets/icons/Greedy Icon.svg';


export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 p-[16px] sm:px-[32px] sm:py-[16px] border-b flex justify-between items-center flex-wrap z-50 bg-white">
      <div className="flex items-center gap-6">
        <div className="w-12 flex justify-center items-center">
          <img className="w-12 h-12" src={greedyIcon}/>
        </div>
        <div className="text-[clamp(20px,2.5vw,25px)] font-semibold font-['Inter'] leading-7">그리디 컨퍼런스</div>
      </div>
      
      <div className="flex-1 flex justify-end items-center gap-1 flex-wrap content-start">
        {['소개', '추첨', 'About us'].map((label) => (
          <div key={label} className="p-2 rounded-lg flex justify-center items-center">
            <div className="justify-center text-base font-normal font-['Inter'] leading-4">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}