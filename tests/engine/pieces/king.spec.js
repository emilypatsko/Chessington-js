import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    describe('white king', () => {

        let board;
        beforeEach(() => board = new Board()); 

        it('can move one square in any direction', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(1, 1), king);

            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(8);
            moves.should.deep.include.members([
                Square.at(0,0),
                Square.at(0,1),
                Square.at(0,2),
                Square.at(1,0),
                Square.at(1,2),
                Square.at(2,0),
                Square.at(2,1),
                Square.at(2,2)
            ]);
        });
    });

    describe('black king', () => {

        let board;
        beforeEach(() => board = new Board()); 

        it('can move one square in any direction', () => {
            const king = new King(Player.BLACK);
            board.setPiece(Square.at(1, 1), king);

            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(8);
            moves.should.deep.include.members([
                Square.at(0,0),
                Square.at(0,1),
                Square.at(0,2),
                Square.at(1,0),
                Square.at(1,2),
                Square.at(2,0),
                Square.at(2,1),
                Square.at(2,2)
            ]);
        });
    });
});
