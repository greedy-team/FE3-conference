// components/Card.jsx
export default function Card({ imageSrc, title, name, time, contents }) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-4">
      <div className="flex items-start gap-4">
        {/* 썸네일 */}
        <div className="size-24 shrink-0 overflow-hidden rounded-md bg-gray-100">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>

        {/* 텍스트 */}
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-gray-700">{name}</p>
          <p className="mt-0.5 text-sm text-gray-500">{time}</p>
          <p className="mt-0.5 text-sm text-gray-500">{contents}</p>
        </div>
      </div>
    </article>
  );
}
