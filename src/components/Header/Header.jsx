import greedyIcon from '../../assets/icons/Greedy Icon.svg';


export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-screen p-3 bg-Background-Default-Default border-b border-Border-Default-Default flex justify-between items-center flex-wrap">
    <div className="flex justify-start items-center gap-6">
      <div className="w-10 flex justify-center items-center">
        <img className="w-12 h-12" src={greedyIcon}/>
      </div>
      <div className="justify-center text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold font-['Inter'] leading-7">그리디 컨퍼런스</div>
    </div>
    
    <div className="flex-1 flex justify-end items-start gap-2 flex-wrap content-start">
      <div data-state="Default" className="p-2 rounded-lg flex justify-center items-center gap-2">
        <div className="justify-center text-Text-Default-Default text-base font-normal font-['Inter'] leading-4">소개</div>
      </div>
      <div data-state="Default" className="p-2 rounded-lg flex justify-center items-center gap-2">
        <div className="justify-center text-Text-Default-Default text-base font-normal font-['Inter'] leading-4">추첨</div>
      </div>
      <div data-state="Default" className="p-2 rounded-lg flex justify-center items-center gap-2">
        <div className="justify-center text-Text-Default-Default text-base font-normal font-['Inter'] leading-4">About us</div>
      </div>
    </div>
  </div>
  )
}