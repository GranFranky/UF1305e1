function copyAnio() {
  let anio = new Date().getFullYear();
  document.getElementById("copyanio").innerHTML = anio;
}



function fechahora() {
  let datofecha = new Date();
  let dia, hora;
  let arrdia = ["domingo","lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]; // defino la array dia con los días de la semana
  document.getElementById("fechahora").innerHTML = "RESULTADOS: Hoy es: " + arrdia[datofecha.getDay()] + ". La hora actual es: " + datofecha.getHours() + ':' + datofecha.getMinutes();
}

function voltear(){
  let cadnum = prompt("Introduce un número:", "introduce solo números");    // Solicitamos el número 
  let arrnum = cadnum.split();                                              // convierte cadnum en arry
  let revnum = arrnum.reverse();                                            // damos la vuelta al array
  alert(revnum);
}
