import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let arr = [];

        for (let j = 0; j < GameSettings.BOARD_SIZE; j++) {
            if (j != col) {
                arr.push(Square.at(row, j));
            }            
        }

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != row) {
                arr.push(Square.at(i, col));
            }
        }

        // moves to right
        // let j = col;
        // let squareToRight;
        // let pieceToRight;
        // while (board.getPiece(squareToRight) === undefined || pieceToRight.player == board.getPiece&& j < 7) {
        //     j++;
        //     squareToRight = Square.at(row, j);
        //     arr.push(squareToRight);
        // }

        // pseudocode:
        // while (the square to the right is on the board) {
        //     if 
        // }

        // moves down

        // moves to left

        // moves up

        return arr;
    }
}
