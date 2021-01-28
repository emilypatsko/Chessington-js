import GameSettings from '../gameSettings';
import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // This method will return all moves that can be made by a pawn
        
        // Find where our piece is. If the player is white, the pawn can move up a space
        // If the player is black, the pawn can move down a space
        // Additionally, if it is a pawn's first move, it may move up to 2 spaces
        let location = board.findPiece(this);
        if (this.player === Player.WHITE) {
            if (location.row == 2) {
                return [Square.at(location.row + 1, location.col)]
            } else if (location.row == 1) {
                return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
            }
        } else {
            if (location.row == 5) {
                return [Square.at(location.row - 1, location.col)]
            } else if (location.row == 6) {
                return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
            }
        }
    }
}
