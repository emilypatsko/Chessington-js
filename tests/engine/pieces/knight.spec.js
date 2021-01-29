import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board()); 

    let testCases = [
        { caseType: "normal", squareToCheck: Square.at(2, 2), movesLength: 8, movesAvailable: [
            Square.at(0, 1),
            Square.at(0, 3),
            Square.at(1, 0),
            Square.at(1, 4),
            Square.at(3, 0),
            Square.at(3, 4),
            Square.at(4, 1),
            Square.at(4, 3)
        ]},
        { caseType: "edge case", squareToCheck: Square.at(1, 6), movesLength: 4, movesAvailable: [
            Square.at(0, 4),
            Square.at(2, 4),
            Square.at(3, 5),
            Square.at(3, 7)
        ]},
        { caseType: "corner case", squareToCheck: Square.at(7, 0), movesLength: 2, movesAvailable: [
            Square.at(5, 1),
            Square.at(6, 2)
        ]}
    ];   
    
    testCases.forEach(testCase => {
        it(`can move in an L shape in any direction (${testCase.caseType})`, () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(testCase.squareToCheck, knight);
    
            const moves = knight.getAvailableMoves(board);
                
            moves.should.have.length(testCase.movesLength);
            if (testCase.movesLength != 0) {
                moves.should.deep.include.members(testCase.movesAvailable);
            };            
        });
    });    
});
