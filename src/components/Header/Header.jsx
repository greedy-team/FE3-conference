import greedyIcon from '../../assets/icons/Black Greedy Icon.svg';

function TextBox({ children }) {
  return (
    <div className="mx-[2px] flex text-center text-[#333333] font-pretendard tracking-[-0.07em] text-[10pt] font-bold">
      {children}
    </div>
  )
}

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0">
      <div className="lg:hidden flex flex-row items-center px-[20px] py-[15px] bg-white gap-[5px]">
        <img className="w-18 h-18 w-[40px] h-[40px]" src={greedyIcon}/>
        <div className="flex-4 text-center text-[#333333] font-pretendard tracking-[-0.02em] text-[18pt] font-bold">세종 그리디콘</div>
        <div className="flex flex-5 flex-row gap-[7px] justify-center">
          <TextBox>Home</TextBox>
          <TextBox>소개</TextBox>
          <TextBox>추첨</TextBox>
          <TextBox>About us</TextBox>
        </div>
      </div>
    </div>
  )
}