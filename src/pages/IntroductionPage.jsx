import Introduction from "../components/Introduction";
import Presentors from "../components/Presentors";
import Speakers1 from "../assets/speakers/speaker1.webp";
import Speakers2 from "../assets/speakers/speaker2.webp";
import Speakers3 from "../assets/speakers/speaker3.webp";
import Speakers4 from "../assets/speakers/speaker4.webp";
import Speakers5 from "../assets/speakers/speaker5.webp";
import Speakers6 from "../assets/speakers/speaker6.webp";

export default function ConferenceIntroPage() {
  const weds = [
    {
      id: 1,
      imageSrc: Speakers3,
      title: "어제보다 나은 오늘 만들기",
      name: "김주환님",
      time: "17:00~17:50",
      contents: "N사 백엔드 개발자",
    },
    {
      id: 2,
      imageSrc: Speakers2,
      title: "우테코에서 만난 천천히 그러나 분명히 성장하던 사람들의 이야기",
      name: "류성현님",
      time: "18:00~18:50",
      contents: "우아한테크코스 코치",
    },
    {
      id: 3,
      imageSrc: Speakers1,
      title: "클라우드! 설계하는 개발자, 코딩하는 엔지니어",
      name: "이제응님",
      time: "19:00~19:50",
      contents:
        "리눅스 재단 APAC & CNCF & PyTorch 재단 한국 대표 / CloudBro 공동창업자 / OSC Korea 창업자",
    },
  ];
  const thu = [
    {
      id: 4,
      imageSrc: Speakers4,
      title: "엘리트 사이에서 살아남기",
      name: "나정휘님",
      time: "17:00~17:50",
      contents: "Quora Software Engineer / ICPC World Finalist",
    },
    {
      id: 5,
      imageSrc: Speakers6,
      title: "선택의 폭 넓히기: 개발자 이외의 커리어에 대해",
      name: "박지환님",
      time: "18:00~18:50",
      contents: "AWS Cloud Support Engineer",
    },
    {
      id: 6,
      imageSrc: Speakers5,
      title: "AI시대 소프트웨어 인재로 성장하기",
      name: "류석문님",
      time: "19:00~19:50",
      contents: "현대오토에버 전무",
    },
  ];

  return (
    <main className="bg-gray-50">
      <div className="bg-white mx-auto max-w-5xl px-4 py-6 sm:py-8 lg:px-6">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">컨퍼런스 소개</h1>
        <Introduction
          title="세종 그리디콘"
          description="세종 그리디콘은 세종대학교 SW중심대학사업단과 그리디가 공동 주최 및 주관하는 개발 컨퍼런스로, 그리디의 ‘교내 개발 생태계에 선한 영향력을’ 라는 모토를 실현하고자 개최하게 되었습니다."
          dateText="11.19(수), 11.20(목) 오후 5시~8시"
          venue="대양AI센터 3층 콜라보랩"
          coverSrc="https://placehold.co/480x320?text=Poster"
        />

        <div className="mt-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">초빙 연사자</h1>
          <div className="space-y-8">
            <Presentors date="수요일(11/19)" items={weds} />
            <Presentors date="목요일(11/20)" items={thu} />
          </div>
        </div>
      </div>
    </main>
  );
}
