import { useState } from "react";
import LotteryResultModal from "../components/LotteryResultModal/LotteryResultModal.jsx";

export default function LotteryPage() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [LotteryGameWinner, setLotteryGameWinner] = useState('우재석');

  const toggleResultModal = () => {
    setIsResultModalOpen(!isResultModalOpen);
  };


  return (
    <div>
      추첨페이지
      <button onClick={toggleResultModal}>결과보기</button>
      {isResultModalOpen && <LotteryResultModal LotteryGameWinner={LotteryGameWinner} onClose={() => setIsResultModalOpen(false)}/>}
    </div>
  );
}
