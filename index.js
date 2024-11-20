let CWidth = window.innerWidth;
let CHeight = window.innerHeight;

for (let i = 0; i < 500; i++) {
    //Rango del  color
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 51);
    const b = Math.floor(Math.random() * 51);

    //Tamaño
    let randomWidth = Math.floor(Math.random() * 200) + 75;
    let randomHeight = Math.floor(Math.random() * 200) + 75;

    //Posicion
    let randomTop = Math.floor(Math.random() * (CHeight - randomHeight)); 
    let randomLeft = Math.floor(Math.random() * (CWidth - randomWidth)); 

    //Creacion del div
    const newDiv = document.createElement('div');

    //Asignando el color random
    newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    //Asignando el tamaño random
    newDiv.style.width = `${randomWidth}px`;
    newDiv.style.height = `${randomHeight}px`;

    //Asignando la posicion random
    newDiv.style.position = 'absolute'; 
    newDiv.style.top = `${randomTop}px`;
    newDiv.style.left = `${randomLeft}px`;

    // Agrega el div al contenedor
    container.appendChild(newDiv);
}
 
