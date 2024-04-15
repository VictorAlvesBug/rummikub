import React from 'react'

type SortByColorButtonProps = {
  onClick: () => void;
};

export default function SortByColorButton({
  onClick,
}: SortByColorButtonProps) {
  return (
    <button className='w-20 h-20 rounded-full border-2 border-gray-500 flex items-center justify-center'
    onClick={onClick}
  >
      789
    </button>
  )
}
