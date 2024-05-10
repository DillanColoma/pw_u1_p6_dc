const sumar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
const sumar1 = () => {

}
const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
const multiplicar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}
function agregarElemento(){
    /*inner HTML es para los elementos que dentro de su contenido aceptan un elemento*/
    document.getElementById("idDivision").innerHTML ="<button>Nuevo</button>";

}
function quitarElemento(){
    /*inner HTML es para los elementos que dentro de su contenido aceptan un elemento*/
    document.getElementById("idDivision").innerHTML ="";
    
}
function conceptosJS(){
    /*TIPOS DE DATOS JAVA SCRIPT */
    /*let,var,const para almecenar tipos de datos*/
    /*Const se usa para datos que no van a ser modificados*/
    const IVA=15;
    console.log(IVA);
    
    /*var tipo de dato sirve para modificar aunque esta quedando en des uso porque
    el let maneja de mejor manera la memoria */
    var nombre ="Renato";
    console.log(nombre);
    nombre="Dillan";
    console.log(nombre)
    var apellido ="Coloma";
    console.log(apellido);
    apellido="Pozo";
    console.log(apellido)
    
}