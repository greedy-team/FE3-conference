import Confetti from 'react-confetti';
import celebrationVideo from '../../images/Video Project 1.mp4';

export default function LotteryResultModal({ lotteryGameWinner, onClose }) {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 flex justify-center items-center z-100"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <Confetti
        recycle={true}
        numberOfPieces={200}
        colors={['#007354', '#ACECDA', '#FFD700', '#FF6B6B', '#4ECDC4', '#95E1D3']}
      />

      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg max-w-3xl w-[90%] text-center relative z-[1001]">
        <div className="flex flex-col items-center gap-6">
          <video
            src={celebrationVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
          />
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">
            {lotteryGameWinner}번 당첨!
          </p>
        </div>
        <button
          className="mt-8 px-8 py-3 bg-[#007354] text-white rounded-lg text-lg font-medium hover:bg-[#005a42] active:bg-[#004433] transition-colors"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
