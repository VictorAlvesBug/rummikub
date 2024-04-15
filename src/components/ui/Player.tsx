import React from 'react'
import PlayerType from '../../types/PlayerType'

export default function Player({name, tiles, isPlaying}: PlayerType) {
  return (
    <div className='m-4 w-20 flex flex-col items-center justify-center'> 
        <div className='aspect-square w-full rounded-full border-2 border-blue-500 bg-blue-300'>

        </div>
        <div className='text-sm flex flex-row items-center justify-between'>
            <span>{name}</span>
            <span>{tiles.length}</span>
        </div>
    </div>
  )
}
