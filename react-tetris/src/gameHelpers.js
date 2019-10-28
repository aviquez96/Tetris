import { arrayExpression } from "@babel/types";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => (
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
)

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x <player.tetromino[y].length; x += 1) {
            //1. Check that we are in an active tetromino cell
            if (player.tetromino[y][x] !== 0) {
                //Check that the move is insiide the area height (y) or the bottom of the play area
                if (
                !stage[y + player.pos.y + moveY] || 
                //Check tetromino is not moving out of the game's width (x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || 
                //Check that the cell its moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ){
                    return true;
                }
            }
        }
    }
}
