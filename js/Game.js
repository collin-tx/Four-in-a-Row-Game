class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */

    createPlayers() {
        const players = [new Player("Player 1", "#e15258", 1, true),
            new Player("Player 2", "#e59a13", 2)
        ];
        return players;
    }

    // returns active player
    get activePlayer() {
        return this.players.find(player => player.active);
    }


    // Gets game ready for play 
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    };

}
