import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

    let board;
    beforeEach(() => board = new Board()); 

    it('can move any number of spaces in any one direction, including diagonally', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(5, 4), queen);

        const moves = queen.getAvailableMoves(board);
            
        moves.should.have.length(25);
        moves.should.deep.include.members([  
            Square.at(0, 4), 
            Square.at(1, 4),
            Square.at(2, 4),
            Square.at(3, 4),
            Square.at(4, 4),
            Square.at(6, 4),
            Square.at(7, 4),
            Square.at(5, 0),
            Square.at(5, 1),
            Square.at(5, 2),
            Square.at(5, 3),
            Square.at(5, 5),
            Square.at(5, 6),
            Square.at(5, 7),
            Square.at(6, 5), // top right diagonal
            Square.at(7, 6),
            Square.at(4, 5), // bottom right diagonal
            Square.at(3, 6),
            Square.at(2, 7),
            Square.at(4, 3), // bottom left diagonal
            Square.at(3, 2),
            Square.at(2, 1),
            Square.at(1, 0),
            Square.at(6, 3), // top left diagonal
            Square.at(7, 2)
        ]);         
    });

});
