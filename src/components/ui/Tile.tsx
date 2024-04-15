import React from 'react'
import TileType from '../../types/TileType'

type TileProps = {
    tile: TileType;
    placeIndex: number;
    handleOnDrag: (e: React.DragEvent, fromTilePlaceIndex: number) => void;
}

export default function Tile({ tile, placeIndex, handleOnDrag }: TileProps) {
const colorDict = {
    black: 'text-black-500',
    blue: 'text-blue-500',
    red: 'text-red-500',
    yellow: 'text-yellow-500',
}
  return (
    <div 
        className='w-7 h-10 bg-gray-100 border-4 border-l-gray-300 border-b-gray-400 border-r-gray-200 border-t-gray-100 rounded-sm'
        draggable
        onDragStart={(e) => handleOnDrag(e, placeIndex)}>
        <div className='flex items-start justify-center'>
            <div className={`font-bold ${colorDict[tile.color]}`}>{tile.number}</div>
        </div>
    </div>
  )
}
