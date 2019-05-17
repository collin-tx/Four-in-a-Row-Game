class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    // gets associated token
    get HTMLToken() {
        return document.getElementById(this.id);;
    }

    // draws new HTML token
    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', "token");
        token.style.backgroundColor = this.owner.color;
    }
}
