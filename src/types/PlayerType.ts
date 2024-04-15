import TileType from "./TileType";

type PlayerType = {
    name: string;
    tiles: TileType[];
    isPlaying: boolean;
};

export default PlayerType;