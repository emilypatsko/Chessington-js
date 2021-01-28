import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Rook', () => {

    let board;
    beforeEach(() => board = new Board()); 

    it('can move any number of spaces in a straight line (no diagonals)', () => {
        const rook = new Rook(Player.WHITE);
        board.setPiece(Square.at(4, 1), rook);

        const moves = rook.getAvailableMoves(board);
            
        moves.should.have.length(14);
        moves.should.deep.include.members([            
            Square.at(4, 0),
            Square.at(4, 2),
            Square.at(4, 3),
            Square.at(4, 4),
            Square.at(4, 5),
            Square.at(4, 6),
            Square.at(4, 7),    
            Square.at(0, 1),
            Square.at(1, 1),
            Square.at(2, 1),
            Square.at(3, 1),
            Square.at(5, 1),
            Square.at(6, 1),
            Square.at(7, 1)       
        ]);
    });

});
