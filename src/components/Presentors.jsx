// components/Presentors.jsx
import Card from "./Card";

/**
 * props 예시
 * date="수요일(11/19)"
 * items=[{ id, imageSrc, title, name, contents }, ...] // 3개 권장
 */
export default function Presentors({ date, items = [] }) {
  return (
    <section aria-labelledby="presentors-title" className="bg-white">
      {/* 날짜 라벨 */}
      <h2
        id="presentors-title"
        className="mb-2 text-lg font-semibold text-gray-900"
      >
        {date}
      </h2>

      {/* 카드 리스트: 피그마처럼 1열 유지, 간격 일정 */}
      <div className="space-y-4">
        {items.map((it) => (
          <Card
            key={it.id ?? `${it.title}-${it.name}`}
            imageSrc={it.imageSrc}
            title={it.title}
            name={it.name}
            time={it.time}
            contents={it.contents}
          />
        ))}
      </div>
    </section>
  );
}
