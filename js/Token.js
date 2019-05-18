class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
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

    // gets left offset of html element
    get offsetLeft() {
            return this.HTMLToken.offsetLeft;

        }
        //moves token one column to the left
    moveLeft() {
            if (this.columnLocation > 0) {
                this.HTMLToken.style.left = this.offsetLeft - 76;
                this.columnLocation -= 1;
            }
        }
        //moves token one column to the right
    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            this.HTMLToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }

    }

    //plays active token
    drop(target, reset) {
        this.dropped = true;

        $(this.HTMLToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);

    }
}
