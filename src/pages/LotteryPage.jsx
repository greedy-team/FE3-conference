import { useState } from "react";
import LotteryResultModal from "../components/LotteryResultModal/LotteryResultModal.jsx";

export default function LotteryPage() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const [lotteryTicketCount, setLotteryTicketCount] = useState('');
  const [lotteryGameWinner, setLotteryGameWinner] = useState();

  const showLotteryResult = () => {
    setIsResultModalOpen(!isResultModalOpen);
    
    const winnerNumber = Math.floor(Math.random() * lotteryTicketCount) + 1;
    setLotteryGameWinner(winnerNumber);
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
      추첨페이지
      <input
        type="number"
        value={lotteryTicketCount}
        placeholder="추첨할 인원을 입력해주세요"
        onChange={handleTicketCountChange}
      />
      <button onClick={showLotteryResult}>결과보기</button>
      {isResultModalOpen && <LotteryResultModal lotteryGameWinner={lotteryGameWinner} onClose={() => setIsResultModalOpen(false)}/>}
    </div>
  );
}
