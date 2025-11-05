import greedyIcon from '../../assets/icons/Greedy Icon.svg';


export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen px-8 py-4 border-b flex justify-between items-center flex-wrap">
      <div className="flex items-center gap-6">
        <div className="w-12 flex justify-center items-center">
          <img className="w-12 h-12" src={greedyIcon}/>
        </div>
        <div className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold font-['Inter'] leading-7">그리디 컨퍼런스</div>
      </div>
      
      <div className="flex-1 flex justify-end items-center gap-2 flex-wrap content-start">
        {['소개', '추첨', 'About us'].map((label) => (
          <div key={label} className="p-2 rounded-lg flex justify-center items-center">
            <div className="justify-center text-base font-normal font-['Inter'] leading-4">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}