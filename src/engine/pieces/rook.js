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

        return arr;
    }
}
