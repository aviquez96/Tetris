import { useState } from 'react';

import { randomTetramino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: randomTetramino().shape,
        collided: false,
    });

    return [player];
}