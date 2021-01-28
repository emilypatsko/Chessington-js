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
        return [
            Square.at(row - 1, col - 1),
            Square.at(row - 1, col),
            Square.at(row - 1, col + 1),
            Square.at(row, col - 1),
            Square.at(row, col + 1),
            Square.at(row + 1, col - 1),
            Square.at(row + 1, col),
            Square.at(row + 1, col + 1)
        ]
    }
}
