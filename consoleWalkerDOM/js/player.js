'use strict';

let player = {
    x: getRandomInRange(0, config.colsCount - 1),
    y: getRandomInRange(0, config.rowsCount - 1),
    rotateAngle: 0,

    /**
     * Метод задает пользователю новое расположение.
     * @param {{x: int, y: int}} nextPoint координаты куда ставим пользователя.
     */
    changePosition(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
        this.rotateAngle = nextPoint.rotateAngle;
    }
};
