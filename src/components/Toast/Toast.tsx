import { useEffect, useState } from 'react';
import s from './Toast.module.css';

export interface ToastProps {
  /** What is the type of toast? */
  toastType?: 'success' | 'error' | 'normal';
  /** Toast message */
  message: string;
  /** Duration of the toast in milliseconds */
  duration?: number;
  /** Should toast have close button? */
  closeBtn?: boolean;
  /** Optional callback when toast is closed */
  onClose?: () => void; // колбек для закриття
}

const Toast = ({
  toastType = 'success',
  message = 'Hello! This is a toast.',
  duration = 2000,
  closeBtn = true,
  onClose,
}: ToastProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${s.toast} ${s[toastType]} ${visible ? s.slideIn : ''}`}>
      <div className={s.toastContent}>{message}</div>
      {closeBtn && (
        <button className={s.closeBtn} onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
