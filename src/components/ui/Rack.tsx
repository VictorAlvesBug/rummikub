import React, { useState } from 'react';
import TileType from '../../types/TileType';
import TilePlace from './TilePlace';

type RackProps = {
  tiles: TileType[];
};

type TilePlaceType = {
  index: number;
  tile: TileType | null;
};

export default function Rack({ tiles }: RackProps) {
  const [tilePlaces, setTilePlaces] = useState<TilePlaceType[]>(() => {
    const list = Array(20).fill(0);
    return list.map((_, index) => {
      return {
        index,
        tile: tiles[index] ?? null,
      } as TilePlaceType;
    });
  });
  const [draggedTile, setDraggedTile] = useState<TileType | null>(null);

  function handleOnDrag(e: React.DragEvent, fromTilePlaceIndex: number) {
    console.log('drag');
    e.dataTransfer.setData('fromTilePlaceIndex', String(fromTilePlaceIndex));
    setDraggedTile(tilePlaces[fromTilePlaceIndex].tile);
  }

  function handleOnDrop(e: React.DragEvent, toTilePlaceIndex: number) {
    const fromTilePlaceIndex = Number(
      e.dataTransfer.getData('fromTilePlaceIndex')
    );
    console.log('drop');
    console.log(e.dataTransfer.getData('fromTilePlaceIndex'));
    setTilePlaces((prev) => {
      let tileToSwap: TileType | null = null;
      return prev
        .map((tilePlace) => {
          if (tilePlace.index === toTilePlaceIndex) {
            tileToSwap = tilePlace.tile;
            return {
              ...tilePlace,
              tile: draggedTile,
            };
          }
          return tilePlace;
        })
        .map((tilePlace) => {
          if (tilePlace.index === fromTilePlaceIndex) {
            return {
              ...tilePlace,
              tile: tileToSwap,
            };
          }
          return tilePlace;
        });
    });
    setDraggedTile(null);
  }

  function handleDragOver(e: React.DragEvent) {
    console.log('dragOver');
    e.preventDefault();
  }

  return (
    <div
      className="w-72 h-24 bg-amber-300 p-1 flex flex-row flex-wrap"
      onDragOver={handleDragOver}
    >
      {tilePlaces.map((tilePlace) => (
        <TilePlace
          index={tilePlace.index}
          tile={tilePlace.tile}
          handleOnDrag={handleOnDrag}
          handleOnDrop={handleOnDrop}
        />
      ))}
    </div>
  );
}
