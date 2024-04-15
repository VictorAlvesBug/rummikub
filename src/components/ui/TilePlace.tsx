import React, { useState } from 'react';
import TileType from '../../types/TileType';
import Tile from './Tile';

type TilePlaceProps = {
  index: number;
  tile: TileType | null;
  handleOnDrag: (e: React.DragEvent, fromTilePlaceIndex: number) => void;
  handleOnDrop: (e: React.DragEvent, toTilePlaceIndex: number) => void;
};

export default function TilePlace({
  index,
  tile,
  handleOnDrag,
  handleOnDrop
}: TilePlaceProps) {
  //const [index, setIndex] = useState(key);

  const placeHasTile = (tile: TileType | null): tile is TileType => {
    return tile !== null;
  };

  return (
    <div 
      className="w-7 h-10 bg-gray-100 border border-gray-400" 
      onDrop={(e) => handleOnDrop(e, index)}>
      {placeHasTile(tile) ? (
        <Tile
          key={index}
          tile={tile}
          placeIndex={index}
          handleOnDrag={handleOnDrag}
        />
      ) : null}
    </div>
  );
}
