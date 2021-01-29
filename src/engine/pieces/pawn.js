import GameSettings from '../gameSettings';
import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    // squareInFrontEmpty(square) {
    //     let row = square.row;
    //     let col = square.col;

    //     if (this.player === Player.WHITE) {
    //         let squareInFront = Square.at(row + 1, col);
    //     } else {
    //         let squareInFront = Square.at(row - 1, col);
    //     }

    //     return (board.getPiece(squareInFront) === undefined);
    // }

    getAvailableMoves(board) {
        // This method will return all moves that can be made by a pawn
        
        // Find where our piece is. If the player is white, the pawn can move up a space
        // If the player is black, the pawn can move down a space
        // Additionally, if it is a pawn's first move, it may move up to 2 spaces
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let arr = [];

        if (this.player === Player.WHITE) {
            if (row == 1) {

                let squareInFront = Square.at(row + 1, col);
                let pieceInFront = board.getPiece(squareInFront);

                if (pieceInFront === undefined) {
                    // want to do this only if there's an empty square in front
                    arr.push(squareInFront);
                    squareInFront = Square.at(row + 2, col);
                    pieceInFront = board.getPiece(squareInFront);

                    if (pieceInFront == undefined) {
                        // only do this if the above is okay and there's an empty square in front
                        arr.push(squareInFront);
                    }
                }                            
            } else if (row > 1 && row < 7) {

                let squareInFront = Square.at(row + 1, col);
                let pieceInFront = board.getPiece(squareInFront);

                if (pieceInFront === undefined) {
                    // want to do this only if there's an empty square in front
                    arr.push(squareInFront);
                }
            } 

            // consider pieces diagonally in front that could be taken
            if (row + 1 <= 7 && col - 1 >= 0) {
                let pieceToLeft = board.getPiece(Square.at(row + 1, col - 1));
                if (pieceToLeft !== undefined && pieceToLeft.player === Player.BLACK) {
                    arr.push(Square.at(row + 1, col - 1));
                }
            }

            if (row + 1 <= 7 && col + 1 <= 7) {
                let pieceToRight = board.getPiece(Square.at(row + 1, col + 1));
                if (pieceToRight !== undefined && pieceToRight.player === Player.BLACK) {
                    arr.push(Square.at(row + 1, col + 1));
                }
            }

        } else {
            if (row == 6) {

                let squareInFront = Square.at(row - 1, col);
                let pieceInFront = board.getPiece(squareInFront);

                if (pieceInFront == undefined) {
                    // want to do this only if there's an empty square in front
                    arr.push(squareInFront);
                    squareInFront = Square.at(row - 2, col);
                    pieceInFront = board.getPiece(squareInFront);

                    if (pieceInFront == undefined) {
                        // only do this if the above is okay and there's an empty square in front
                        arr.push(squareInFront);
                    }
                }         
            } else if (row < 6 && row > 0) {

                let squareInFront = Square.at(row - 1, col);
                let pieceInFront = board.getPiece(squareInFront);

                if (pieceInFront == undefined) {
                    // want to do this only if there's an empty square in front
                    arr.push(squareInFront);
                }
            } 

            // consider pieces diagonally in front that could be taken
            if (row - 1 >= 0 && col + 1 <= 7) {
                let pieceToLeft = board.getPiece(Square.at(row - 1, col + 1));
                if (pieceToLeft !== undefined && pieceToLeft.player === Player.WHITE) {
                    arr.push(Square.at(row - 1, col + 1));
                }
            }

            if (row - 1 >= 0 && col - 1 >= 0) {
                let pieceToRight = board.getPiece(Square.at(row - 1, col - 1));
                if (pieceToRight !== undefined && pieceToRight.player === Player.WHITE) {
                    arr.push(Square.at(row - 1, col - 1));
                }
            }
        }

        return arr;
    }
}
