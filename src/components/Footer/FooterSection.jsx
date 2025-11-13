export default function FooterSection({ label, children, className }) {
  return (
    <div className={`flex flex-col w-full sm:w-1/5  ${className}`}>
      {label && (
        <div className="justify-start text-lg font-semibold leading-8 pb-4">
          {label}
        </div>
      )}
      <div className="flex flex-col justify-start items-start gap-3">
        {children}
      </div>
    </div>
  );
}
