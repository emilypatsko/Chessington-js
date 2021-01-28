import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let arr = [];

        for (let i = row - 1; i < row + 2; i++) {
            for (let j = col - 1; j < col + 2; j++) {
                if (i == row && j == col) {
                    continue;
                } else {
                    arr.push(Square.at(i, j));
                }
            }
        }

        return arr;
    }
}
