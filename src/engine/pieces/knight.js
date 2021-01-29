import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        // Moves that a knight can ordinarily make
        let moves = [ 
            Square.at(row - 2, col - 1),
            Square.at(row - 2, col + 1),
            Square.at(row - 1, col - 2),
            Square.at(row - 1, col + 2),
            Square.at(row + 1, col - 2),
            Square.at(row + 1, col + 2),
            Square.at(row + 2, col - 1),
            Square.at(row + 2, col + 1)
        ];

        // Only return the moves that don't go off the board
        let arr = [];

        moves.forEach(move => {
            if (move.row >= 0 && move.row <= 7 && move.col >= 0 && move.col <= 7) {
                arr.push(move);
            }
        });

        return arr;
    }
}
