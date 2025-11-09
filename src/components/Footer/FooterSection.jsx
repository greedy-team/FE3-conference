export default function FooterSection({ label ,children, className }) {
  return(
    <div className={`w-[165px] sm:w-[clamp(170px,20vw,250px)]  ${className}`}>
      <div className="self-stretch64 pb-4 flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch inline-flex justify-start items-start">
          <div className="justify-start text-[19px] font-semibold font-['Inter'] leading-8">{label}</div>
        </div>
      </div>
      <div className="inline-flex flex-col justify-start items-start gap-3">{children}</div>
    </div>
  )
}