export default function MainCard ( { title, subTitle, buttonName, children }) {
  return (
    <div className="w-full min-h-[200px] p-[20px] bg-gradient-to-b from-[#0ADDA2] to-[#B5EDDE] rounded-[12px] justify-center items-center flex flex-col shadow-[0_4px_38.2px_rgba(122, 122, 122, 0.33)]">
      {children}
      <div className="text-white text-[45px] font-semibold font-['Inter']">{title}</div>
      <div className="text-white text-[20px] font-normal font-['Inter']">{subTitle}</div>
      <div className="justify-center items-center">
        {buttonName}
      </div>
    </div>
      
  )
}