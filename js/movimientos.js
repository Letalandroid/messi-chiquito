const pj = document.getElementById("player");
let move = 0;

const derecha = () => {

    move += 10;
    pj.style.left = `${move}px`;
    pj.style.transform = "rotateY(180deg)";

}

const izquierda = () => {

    move -= 10;
    pj.style.left = `${move}px`;
    pj.style.transform = "rotateY(0)";

}

const saltar = () => {

    pj.style.animationName = "saltar";

    pj.addEventListener("animationend", () => {

        pj.style.animationName = "";

    });

}

export const mover = {
    derecha,
    izquierda,
    saltar
}