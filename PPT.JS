const elecciones = ["piedra","papel","tijeras"]

const eleccioncomputadora = () => {
    const randomIndex = Math.floor((Math.random() * 3));
    return elecciones[randomIndex]
}
const determinarganador = (usuario, computadora) => {
    if (usuario === computadora) {
        return "¡Es un empate!";
    }  else if ((usuario === "piedra" && computadora === "tijeras") ||
      (usuario === "papel" && computadora === "piedra") ||
      (usuario === "tijeras" && computadora === "papel")) {
        return "GANASTE!!!";
      }else{
        return "perdiste!!"
      }  
        
   
}

const elecciondeusuario = (usuario) => {
    const computadora = eleccioncomputadora();
    const resultado = determinarganador(usuario,computadora);
    const resultadoganador = document.getElementById("resultadoderonda");
    resultadoganador.textContent = `elegiste ${usuario}. la computadora eligio ${computadora}. ${resultado}`
   
} 