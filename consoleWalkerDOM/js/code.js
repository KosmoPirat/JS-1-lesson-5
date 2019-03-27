'use strict';

renderer.render();

window.addEventListener('keydown', function (event) {
    mover.makeStep(event);
});

