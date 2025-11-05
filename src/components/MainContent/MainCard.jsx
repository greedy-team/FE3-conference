import arrowIcon from '../../assets/icons/Arrow.svg';

export default function MainCard ( { title, subTitle, children }) {
  return (
    <div className="w-full min-h-[130px] px-[20px] py-[5px] bg-[#ACECDA] rounded-[10px] flex flex-col shadow-[0_3px_35px_#C8D1CEAA]">
      {children}
      <div className="h-[75px]"></div>
      <div className="text-[#333333] text-[10pt] tracking-[-0.02em] font-pretendard font-semibold -my-3">{subTitle}</div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-[#333333] text-[30px] tracking-[-0.02em] font-pretendard font-bold ">{title}</div>
        <img className="w-13 h-15 justify-center" src={arrowIcon}/>
      </div>
    </div>
      
  )
}