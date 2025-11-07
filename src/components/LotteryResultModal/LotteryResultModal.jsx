 import styles from './LotteryResultModal.module.css';
import celebrationImage from '../../images/축하해용.png';

export default function LotteryResultModal({ LotteryGameWinner, onClose }) {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={styles.modal}>
        <div className={styles.content}>
          <img src={celebrationImage} alt="축하이미지" className={styles.celebrationImage} />
          <p>{LotteryGameWinner}님이 1등!</p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}