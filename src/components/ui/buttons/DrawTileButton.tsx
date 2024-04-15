import React from 'react';

type SortByColorButtonProps = {
  onClick: () => void;
};

export default function DrawTileButton({ onClick }: SortByColorButtonProps) {
  return (
    <button
      className="w-20 h-44 rounded-3xl border-2 border-green-400 flex items-center justify-center"
      onClick={onClick}
    >
      DrawTileButton
    </button>
  );
}
