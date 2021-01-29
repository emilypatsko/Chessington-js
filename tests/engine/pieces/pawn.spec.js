import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Pawn', () => {

    describe('white pawns', () => {

        let board;
        beforeEach(() => board = new Board()); 

        let whiteTestCases = [
            { caseType: "normal", squareToCheck: Square.at(2, 0), movesLength: 1, movesAvailable: Square.at(3, 0) },
            { caseType: "edge case", squareToCheck: Square.at(7, 0), movesLength: 0, movesAvailable: [] }
        ];   
        
        whiteTestCases.forEach(testCase => {
            it(`can only move one square up if they have already moved (${testCase.caseType})`, () => {
                const pawn = new Pawn(Player.WHITE);
                board.setPiece(testCase.squareToCheck, pawn);

                const moves = pawn.getAvailableMoves(board);

                moves.should.have.length(testCase.movesLength);
                if (testCase.movesLength != 0) {
                    moves.should.deep.include(testCase.movesAvailable);
                }
            });
        });

        it('can move one or two squares up on their first move', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
        });

    });

    describe('black pawns', () => {

        let board;
        beforeEach(() => board = new Board(Player.BLACK));    

        let blackTestCases = [
            { caseType: "normal", squareToCheck: Square.at(5, 0), movesLength: 1, movesAvailable: Square.at(4, 0) },
            { caseType: "edge case", squareToCheck: Square.at(0, 0), movesLength: 0, movesAvailable: [] }
        ];   
        
        blackTestCases.forEach(testCase => {
            it(`can only move one square down if they have already moved (${testCase.caseType})`, () => {
                const pawn = new Pawn(Player.BLACK);
                board.setPiece(testCase.squareToCheck, pawn);

                const moves = pawn.getAvailableMoves(board);

                moves.should.have.length(testCase.movesLength);
                if (testCase.movesLength != 0) {
                    moves.should.deep.include(testCase.movesAvailable);
                }
            });
        });

        it('can move one or two squares down on their first move', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 7), Square.at(5, 7)]);
        });

    });

});
