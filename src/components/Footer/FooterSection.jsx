export default function FooterSection({ label ,children }) {
  return(
    <div>
      <div className="self-stretch pb-4 flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch inline-flex justify-start items-start">
          <div className="justify-start text-[19px] font-semibold font-['Inter'] leading-8">{label}</div>
        </div>
      </div>
      <div className="w-64 inline-flex flex-col justify-start items-start gap-3">{children}</div>
    </div>
  )
}