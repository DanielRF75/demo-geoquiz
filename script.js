class pais {
    nombre
    capital
    constructor (nombre, capital){
        this.nombre = nombre
        this.capital = capital
    }
}

const paises = [
    new pais("España", "Madrid"),
    new pais("Francia", "Paris"),
    new pais("Italia", "Roma"),
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio (0 a i)
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
    return array;
}

const paisesRandom = shuffle(paises)
console.log(paisesRandom[0].nombre)
document.querySelector("#mostrar-pais").innerHTML = "hola"
