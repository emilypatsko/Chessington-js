import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board()); 

    it('can move in an L shape in any direction', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(2, 2), knight);

        const moves = knight.getAvailableMoves(board);
            
        moves.should.have.length(8);
        moves.should.deep.include.members([
            Square.at(0, 1),
            Square.at(0, 3),
            Square.at(1, 0),
            Square.at(1, 4),
            Square.at(3, 0),
            Square.at(3, 4),
            Square.at(4, 1),
            Square.at(4, 3)
        ]);
    });
});
