let CWidth = window.innerWidth;
let CHeight = window.innerHeight;

for (let i = 0; i < 400; i++) {

    let numRandom = Math.floor(Math.random() * 4) + 1;

    let color;

switch (numRandom) {
    case 1:
        color = "rgb(255, 255, 255)"; // Blanco
        break;
    case 2:
        color = "rgb(221, 38, 38)"; // Crema
        break;
    case 3:
        color = "rgb(255, 209, 253)"; // Rosa
        break;
    case 4:
        color = "rgb(255, 0, 0)"; // Rojo
        break;
    default:
        color = "rgb(0, 0, 0)"; // Color por defecto si no hay coincidencia (opcional)
        break;
}

    //Tamaño
    let randomWidth = Math.floor(Math.random() * 200) + 75;
    let randomHeight = Math.floor(Math.random() * 220) + 95;

    //Posicion
    let randomTop = Math.floor(Math.random() * (CHeight - randomHeight)); 
    let randomLeft = Math.floor(Math.random() * (CWidth - randomWidth)); 

    //Creacion del div
    const newDiv = document.createElement('div');

    //Asignando el color random
    newDiv.style.backgroundColor = `${color}`;

    //Asignando el tamaño random
    newDiv.style.width = `${randomWidth}px`;
    newDiv.style.height = `${randomHeight}px`;

    //Asignando la posicion random
    newDiv.style.position = 'absolute'; 
    newDiv.style.top = `${randomTop}px`;
    newDiv.style.left = `${randomLeft}px`;

    // Agrega el div al contenedor
    container.appendChild(newDiv);

    // Sombra aleatoria
let shadowOffsetX = Math.floor(Math.random() * 10) - 5; // Desplazamiento horizontal
let shadowOffsetY = Math.floor(Math.random() * 10) - 5; // Desplazamiento vertical
let shadowBlur = Math.floor(Math.random() * 20) + 5;    // Difuminado
let shadowColor = `rgba(0, 0, 0, 0.5)`;                // Color de sombra (semitransparente negro)

newDiv.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`;
}
 