import {mover} from "./movimientos.js";

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case 'd':
            mover.derecha();
            break;

        case 'a':
            mover.izquierda();
            break;

        case 'w':
            mover.saltar();

    }

});