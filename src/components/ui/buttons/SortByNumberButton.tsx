import React from 'react';

type SortByNumberButtonProps = {
  onClick: () => void;
};

export default function SortByNumberButton({
  onClick,
}: SortByNumberButtonProps) {
  return (
    <button
      className="w-20 h-20 rounded-full border-2 border-gray-500 flex items-center justify-center"
      onClick={onClick}
    >
      777
    </button>
  );
}
