import React, { useState } from 'react';
import TileType from '../../types/TileType';
import Table from '../../components/ui/Table';
import Rack from '../../components/ui/Rack';
import Player from '../../components/ui/Player';
import SortByColorButton from '../../components/ui/buttons/SortByColorButton';
import SortByNumberButton from '../../components/ui/buttons/SortByNumberButton';
import ResetPlayButton from '../../components/ui/buttons/ResetPlayButton';
import FinishPlayButton from '../../components/ui/buttons/FinishPlayButton';
import DrawTileButton from '../../components/ui/buttons/DrawTileButton';

export default function GamePage() {
  const alreadyPlaceTilesToTable = true;
  const [tiles, setTiles] = useState<TileType[]>(
    Array(14)
      .fill(0)
      .map((_) => {
        return {
          number: 1 + Math.floor(Math.random() * 13),
          color: ['black', 'blue', 'red', 'yellow'][
            Math.floor(Math.random() * 4)
          ],
        };
      }) as unknown as TileType[]
  );

  const sortByColor = (tiles: TileType[]) => {
    const sortedTiles = [...tiles];
    sortedTiles.sort((tileA, tileB) => {
        if (tileA.color < tileB.color) return -1;
        if (tileA.color > tileB.color) return 1;
        return 0;
    });
    return sortedTiles;
  }

  const sortByNumber = (tiles: TileType[]) => {
    const sortedTiles = [...tiles];
    sortedTiles.sort((tileA, tileB) => {
        if (tileA.number < tileB.number) return -1;
        if (tileA.number > tileB.number) return 1;
        return 0;
    });
    return sortedTiles;
  }

  return (
    <div className="w-screen min-h-screen flex flex-row items-center justify-center">
      <div className="w-32 h-svh flex flex-col items-center justify-between">
        <Player
          name="Thiago"
          tiles={[...tiles].slice(1, 5)}
          isPlaying={false}
        />
        <Player name="Victor" tiles={[...tiles].slice(4, 5)} isPlaying={true} />
      </div>
      <div className="flex-1 h-svh flex flex-col items-center justify-center">
        <Table />
        <Rack tiles={tiles} />
      </div>
      <div className="w-32 h-svh bg-slate-700 flex flex-col items-center justify-around">
        <SortByColorButton
          onClick={() => {
            setTiles((prev) => {
                let sorted = [...prev];
                sorted = sortByColor(sorted);
                sorted = sortByNumber(sorted);
                return sorted;
            })
          }}
        />
        <SortByNumberButton
          onClick={() => {
            setTiles((prev) => {
                let sorted = [...prev];
                sorted = sortByNumber(sorted);
                sorted = sortByColor(sorted);
                return sorted;
            })
          }}
        />
        {alreadyPlaceTilesToTable ? (
          <>
            <ResetPlayButton
              onClick={() => {
                console.log('ResetPlayButton Clicked!');
              }}
            />
            <FinishPlayButton
              onClick={() => {
                console.log('FinishPlayButton Clicked!');
              }}
            />
          </>
        ) : (
          <DrawTileButton
            onClick={() => {
              console.log('DrawTileButton Clicked!');
            }}
          />
        )}
      </div>
    </div>
  );
}
