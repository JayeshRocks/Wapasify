'use client';

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  return (
    <div
      className={`toast ${isVisible ? 'show' : ''}`}
      id="toast"
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
