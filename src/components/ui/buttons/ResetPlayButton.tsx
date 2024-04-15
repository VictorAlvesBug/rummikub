import React from 'react';

type ResetPlayButtonProps = {
  onClick: () => void;
};

export default function ResetPlayButton({ onClick }: ResetPlayButtonProps) {
  return (
    <button
      className="w-20 h-20 rounded-full border-2 border-red-400 flex items-center justify-center"
      onClick={onClick}
    >
      Reset
    </button>
  );
}

