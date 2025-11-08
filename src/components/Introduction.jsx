// components/Introduction.jsx
import posterUrl from "../assets/icons/ConferencePoster.svg";
import calendarIcon from "../assets/icons/Calendar.svg";
import LocationIcon from "../assets/icons/Location.svg";

export default function Introduction({ title, description, dateText, venue }) {
  return (
    <section
      aria-labelledby="intro-title"
      className="rounded-2xl bg-white p-4 sm:p-6"
    >
      {/* 모바일: 세로(포스터 위/텍스트 아래) → md↑: 좌우 2열 */}
      <div className="flex flex-col gap-4 md:flex-row">
        {/* 포스터 */}
        <div className="w-full aspect-felx overflow-hidden rounded-xl bg-gray-100 md:aspect-auto md:w-60">
          <img
            src={posterUrl}
            alt={`${title} 포스터`}
            className="h-full w-full object-contain md:object-cover"
            loading="lazy"
          />
        </div>

        {/* 설명 */}
        <div className="min-w-0 md:flex-1">
          <h1
            id="intro-title"
            className="text-xl font-bold md:text-2xl md:font-semibold text-gray-900"
          >
            {title}
          </h1>

          <p className="mt-2 text-gray-700">{description}</p>

          <dl className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <dt className="flex shrink-0 items-center gap-2 font-semibold">
                <img
                  src={calendarIcon}
                  alt=""
                  className="size-4 sm:size-5 object-contain"
                />
                <span>날짜 및 시간</span>
              </dt>
              <dd className="truncate">{dateText}</dd>
            </div>

            <div className="flex items-start gap-2">
              <dt className="flex shrink-0 items-center gap-2 font-semibold">
                <img
                  src={LocationIcon}
                  alt=""
                  className="size-4 sm:size-5 object-contain"
                />
                <span>장소</span>
              </dt>
              <dd className="truncate">{venue}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
