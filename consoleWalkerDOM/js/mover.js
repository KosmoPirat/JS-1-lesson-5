'use strict';
let mover = {
    makeStep(event) {
        let newPosition = this.getNewPosition(event);

        if(!this.canPlayerMakeStep(newPosition)) {
            return;
        }

        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(player);
    },

    getNewPosition(event) {
        switch (event.key) {
            case "ArrowUp":
                return {x: player.x, y: player.y - 1, rotateAngle: 0};
            case "ArrowDown":
                return {x: player.x, y: player.y + 1, rotateAngle: 180};
            case "ArrowLeft":
                return {x: player.x - 1, y: player.y, rotateAngle: -90};
            case "ArrowRight":
                return {x: player.x + 1, y: player.y, rotateAngle: 90};
            default:
                return {x: player.x, y: player.y};
        }
    },

    canPlayerMakeStep(nextPoint) {

        return renderer.getSquarePlayer(nextPoint) !== null && renderer.getSquarePlayer(nextPoint) !==
         renderer.getSquareBarricadeAndPlayer(nextPoint);
    },
};
