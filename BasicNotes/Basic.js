// const sumar= (a,b) => a=b;
// //arrow function
// const numeros = [1,2,3,4,5];
// numeros.forEach((el,index)=> console.log(`el numero ${el} esta en la posicion ${index}`));

// /*function perro() {
//     console.log('perro');    
// }*/

// const perro ={
//     nombre: "kenai";
//     ladrar() {console.log(this)}
//     /*en objetos no se usan las aroow functions*/

// }
/*////////////POO/////////////*/

/*================LOS PROTOTIPOS========== */
//funicion constructora
function Animal (nombre,genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    
}
//Metodos deben llevarse a prototype de la funcion contructora
Animal.prototype.sonar = function() {
    console.log("hago sonidos por que estoy vivo")
}
Animal.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre}`)
}
//Herencia prototipica
function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}
//perro heredando animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//sobreescribiir metodos del protoripo de padre en hijo
Perro.prototype.sonar = function(){
    console.log('soy un perro y ladro')
}
Perro.prototype.saludar = function(){
    console.log('Guauuu Guauuu')
}
const maximiliano = new Animal('maximo','macho','pequenio')
const dog = new Animal('maximo','macho'), cuy = new Animal("cobi","hembra");