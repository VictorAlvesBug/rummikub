import React from 'react';

type FinishPlayButtonProps = {
  onClick: () => void;
};

export default function FinishPlayButton({ onClick }: FinishPlayButtonProps) {
  return (
    <button
      className="w-20 h-32 rounded-3xl border-2 border-green-400 flex items-center justify-center"
      onClick={onClick}
    >
      Finish
    </button>
  );
}
