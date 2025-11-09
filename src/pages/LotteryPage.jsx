import { useState } from "react";
import LotteryResultModal from "../components/LotteryResultModal/LotteryResultModal.jsx";
import brickBg from "../images/normalBrick 1.png";
import giraffe from "../images/giraffe 1.png";

export default function LotteryPage() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [lotteryTicketCount, setLotteryTicketCount] = useState('');
  const [lotteryGameWinner, setLotteryGameWinner] = useState();

  const showLotteryResult = () => {
    if (!lotteryTicketCount || lotteryTicketCount <= 0) {
      alert('마지막 응모권 번호를 입력해주세요.');
      return;
    }

    const winnerNumber = Math.floor(Math.random() * lotteryTicketCount) + 1;
    setLotteryGameWinner(winnerNumber);
    setIsResultModalOpen(true);
  };

  const handleTicketCountChange = (e) => {
    const { value } = e.target;

    if (value === '') {
      setLotteryTicketCount('');
    } else {
      setLotteryTicketCount(Number(value));
    }
  };

  return (
    <div>  

      <div className="w-full min-h-screen flex justify-center items-start bg-white py-16">
        <div className="w-full max-w-[1200px] px-16 flex flex-col justify-start items-center">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5 mb-8">
            <div className="text-black text-[72px] font-bold font-['Inter'] leading-[86.4px]">경품 추첨</div>
          </div>
          <div className="w-full max-w-[1360px] p-8 bg-white rounded-3xl flex flex-col justify-start items-center gap-12 mb-8">
            <div className="w-full max-w-[1222px] aspect-[1222/1163] relative bg-[#007354] rounded-3xl backdrop-blur-[2px] flex justify-center items-end overflow-hidden">
              <img className="w-full h-full object-cover absolute top-0 left-0" src={brickBg} alt="배경" />
              <img className="w-[220px] h-auto relative z-10 rounded-[34px] mb-2" src={giraffe} alt="기린" />
            </div>
          </div>
          <div className="w-full max-w-[1360px] px-8 pb-8 flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch p-6 bg-white rounded-lg border border-[#E5E5E5] flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-start">
                  <div className="text-black text-base font-bold font-['Inter'] leading-6">마지막 응모권 번호</div>
                  <div data-svg-wrapper>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C10.9993 5.71733 10.9033 5.48 10.712 5.288C10.5207 5.096 10.2833 5 10 5C9.71667 5 9.47933 5.096 9.288 5.288C9.09667 5.48 9.00067 5.71733 9 6C8.99933 6.28267 9.09533 6.52033 9.288 6.713C9.48067 6.90567 9.718 7.00133 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                <input
                  type="number"
                  value={lotteryTicketCount}
                  onChange={handleTicketCountChange}
                  placeholder="ex) 143"
                  className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#E5E5E5] text-black text-base font-normal font-['Inter'] leading-4 focus:outline-none focus:border-[#007354]"
                />
              </div>
              <div className="self-stretch inline-flex justify-end items-center gap-4">
                <button
                  onClick={showLotteryResult}
                  className="flex-1 p-3 bg-[#007354] rounded-lg flex justify-center items-center gap-2 cursor-pointer hover:bg-[#005a42] transition-colors"
                >
                  <div className="text-white text-base font-normal font-['Inter'] leading-4">시작</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isResultModalOpen && (
        <LotteryResultModal
          lotteryGameWinner={lotteryGameWinner}
          onClose={() => setIsResultModalOpen(false)}
        />
      )}
    </div>
  );
}
