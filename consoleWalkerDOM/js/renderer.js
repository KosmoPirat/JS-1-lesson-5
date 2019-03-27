'use strict';

let renderer = {
    render() {
        let table = this.generateTable();
        document.body.insertAdjacentHTML('afterbegin', table);
        this.renderBarricadePosition(barricade);
        this.renderUserPosition(player);
    },

    generateTable() {
        let board = '';
        for (let x = 0; x < config.rowsCount; x++) {
            board += '<div class="col">';
            for (let y = 0; y < config.colsCount; y++) {
                board += `<div class="row" data-x="${x}" data-y="${y}"> </div>`;
            }
            board += '</div>';
        }
        return '<div class="field">' + board + ' </div>';
    },

    getSquareBarricade(barricade, index) {
        return document.querySelector(`[data-x="${barricade.barArray[index].x}"][data-y="${barricade.barArray[index].y}"]`);
    },

    getSquareBarricadeAndPlayer(player) {
        return document.querySelector(`.barricade[data-x="${player.x}"][data-y="${player.y}"]`);
    },

    getSquarePlayer(player) {
        return document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
    },

    renderBarricadePosition(barricade) {
        for(let i = 0; i < barricade.barArray.length - 1; i++) {
            let square = this.getSquareBarricade(barricade, i);
            square.classList.add('barricade');
        }
    },

    renderUserPosition(player) {
        let square = this.getSquarePlayer(player);
        square.classList.add('user');
        square.style['-webkit-transform'] = `rotate(${player.rotateAngle}deg)`;
        square.style['transform'] = `rotate(${player.rotateAngle}deg)`;
    },

    clearUserPosition() {
        document.querySelector('.user').classList.remove('user');
    }
};
