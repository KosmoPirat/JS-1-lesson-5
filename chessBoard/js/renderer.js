'use strict';
let renderer = {
    render() {
        let table = this.generateTable();
        document.body.insertAdjacentHTML('afterbegin', table);
        this.renderUserPosition(player);
    },

    generateTable() {
        let board = '';
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                //board += '<td data-x="' + x + '" data-y="' + y + '"> </td>';
                board += `<td data-x="${x}" data-y="${y}"> </td>`;
            }
            board += '</tr>';
        }
        return '<table><tbody>' + board + ' </tbody></table>';
    },

    getSquare(player) {
        return document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
    },

    renderUserPosition(player) {
        let square = this.getSquare(player);
        square.classList.add('user');
    },

    clearUserPosition() {
        document.querySelector('.user').classList.remove('user');
    }
};
