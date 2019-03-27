'use strict';
function fillChessBoard() {
    let chessBoardWrap = document.createElement('div');
    chessBoardWrap.classList.add('chess-board-wrap');
    document.body.insertAdjacentElement('afterbegin', document.body.appendChild(chessBoardWrap));
    let chessBoard = document.querySelector('.chess-board');
    chessBoardWrap.insertAdjacentElement('afterbegin',chessBoard);
    let chessletterSymbol = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    let chessCell;
    let toggle = false;
    for (let i = 7; i >= 0; i--) {
        toggle = !toggle;
        for (let j = 7; j >= 0; j--) {
            chessCell = document.createElement('div');
            chessCell.className = 'chess-cell';
            if (toggle) chessCell.classList.add('white-cell');
            else chessCell.classList.add('black-cell');
            chessCell.setAttribute('data-letter-symbol', chessletterSymbol[j]);
            chessCell.setAttribute('data-number-symbol', i + 1);
            chessBoard.appendChild(chessCell);
            toggle = !toggle;
        }
    }
}

fillChessBoard();

