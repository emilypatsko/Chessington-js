import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board()); 

    let testCases = [
        { caseType: "normal", squareToCheck: Square.at(1, 1), movesLength: 8, movesAvailable: [
            Square.at(0, 0),
            Square.at(0, 1),
            Square.at(0, 2),
            Square.at(1, 0),
            Square.at(1, 2),
            Square.at(2, 0),
            Square.at(2, 1),
            Square.at(2, 2)
        ]},
        { caseType: "corner case", squareToCheck: Square.at(7, 7), movesLength: 3, movesAvailable: [
            Square.at(7, 6),
            Square.at(6, 6),
            Square.at(6, 7)
        ]},
        { caseType: "edge case", squareToCheck: Square.at(5, 0), movesLength: 5, movesAvailable: [
            Square.at(6, 0),
            Square.at(4, 0),
            Square.at(6, 1),
            Square.at(5, 1),
            Square.at(4, 1)
        ]}
    ];   
    
    testCases.forEach(testCase => {
        it(`can move one square in any direction (${testCase.caseType})`, () => {
            const king = new King(Player.WHITE);
            board.setPiece(testCase.squareToCheck, king);

            const moves = king.getAvailableMoves(board);

            moves.should.have.length(testCase.movesLength);
            if (testCase.movesLength != 0) {
                moves.should.deep.include.members(testCase.movesAvailable);
            }
        });
    });
});
