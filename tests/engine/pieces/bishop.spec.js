import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {

    let board;
    beforeEach(() => board = new Board()); 

    it('can move any number of spaces along a diagonal', () => {
        const bishop = new Bishop(Player.WHITE); // does it matter to test this for black as well?
        board.setPiece(Square.at(3, 3), bishop);

        const moves = bishop.getAvailableMoves(board);
            
        moves.should.have.length(13);
        moves.should.deep.include.members([
            Square.at(0, 0),
            Square.at(1, 1),
            Square.at(2, 2),
            Square.at(4, 4),
            Square.at(5, 5),
            Square.at(6, 6),
            Square.at(7, 7),
            Square.at(6, 0),
            Square.at(5, 1),
            Square.at(4, 2),
            Square.at(2, 4),
            Square.at(1, 5),
            Square.at(0, 6)
        ]);
    });
});
