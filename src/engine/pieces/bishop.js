import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let arr = [];

        // moves to the right and up
        let i = row;
        let j = col;
        while (i < GameSettings.BOARD_SIZE - 1 && j < GameSettings.BOARD_SIZE - 1) {
            arr.push(Square.at(i + 1, j + 1));
            i++;
            j++;
        }

        // moves to the right and down
        i = row;
        j = col;
        while (i > 0 && j < GameSettings.BOARD_SIZE - 1) {
            arr.push(Square.at(i - 1, j + 1));
            i--;
            j++;
        }        

        // moves to the left and down
        i = row;
        j = col;
        while (i > 0 && j > 0) {
            arr.push(Square.at(i - 1, j - 1));
            i--;
            j--;
        }        

        // moves to the left and up
        i = row;
        j = col;
        while (i < GameSettings.BOARD_SIZE - 1 && j > 0) {
            arr.push(Square.at(i + 1, j - 1));
            i++;
            j--;
        }   

        return arr;
    }
}
