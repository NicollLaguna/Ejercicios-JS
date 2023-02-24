let miNombre = "Nicoll"
let miApellido = "Laguna"
let miEdad = 18
let miMascota = "Minmin"
let edadMascota = 1

console.log('Nombre: ' + miNombre)
console.log('Apellido: ' + miApellido)
console.log('Edad: ' + miEdad + ' años')
console.log('Nombre de mascota: ' + miMascota)
console.log('Edad de la mascota: ' + edadMascota + ' año')

let nombreCompleto = miNombre + ' ' + miApellido

let textPresentacion = 'Mi nombre es ' + nombreCompleto + ', tengo ' + miEdad + ' años' + ' y tengo una mascota que se llama ' + miMascota + ', que tiene ' + edadMascota + ' año de edad.'
console.log(textPresentacion)

sumaEdades = miEdad + edadMascota
console.log('Suma de las edades: ' + sumaEdades)

restaEdades = miEdad - edadMascota
console.log('Resta de edades: ' + restaEdades)

productoEdades = miEdad * edadMascota
console.log('Producto de las edades: ' + productoEdades)

divisionEdades = miEdad / edadMascota
console.log('División de las edades: ' + divisionEdades)

miNombre = prompt('Ingrese su nombre: ')
console.log('Nombre: ' + miNombre)

miApellido = prompt('Ingrese su apellido: ')
console.log('Apellido: ' + miApellido)

miEdad = prompt('Ingrese su edad: ')
console.log('Edad: ' + miEdad + ' años')

miMascota = prompt('Ingrese el nombre de su mascota: ')
console.log('Nombre de mascota: ' + miMascota)

edadMascota = prompt('Ingrese la edad de su mascota: ')
console.log('Edad de la mascota: ' + edadMascota + ' año/años')

let nombresCompleto = miNombre + ' ' + miApellido

let textsPresentacion = 'Mi nombre es ' + nombresCompleto + ', tengo ' + miEdad + ' años' + ' y tengo una mascota que se llama ' + miMascota + ' ,que tiene ' + edadMascota + ' años de edad.'
console.log(textsPresentacion)

sumaEdades = miEdad + edadMascota
console.log('Suma de las edades: ' + sumaEdades)

restaEdades = miEdad - edadMascota
console.log('Resta de edades: ' + restaEdades)

productoEdades = miEdad * edadMascota
console.log('Producto de las edades: ' + productoEdades)

divisionEdades = miEdad / edadMascota
console.log('División de las edades: ' + divisionEdades)

let alumno = {
    nombre: 'Nicolas',
    apellido: 'Gonzalez',
    edad: '20 años',
    nivelEductivo: 'universitario',
    rendimiento: 'excelente',
}

console.table(alumno)
console.log('Nombre: '+alumno.nombre)
console.log('Apellido: '+alumno.apellido)
console.log('Edad: '+alumno.edad)
console.log('Nivel educativo: '+alumno.nivelEductivo)
console.log('Rendimiento: '+alumno.rendimiento)

let mascota = {
    nombre: 'ChimChim',
    peso: '13 kg',
    raza: 'pomerania',
    edad: '3 meses',
    altura: '20 cm'
}
console.table (mascota)
console.log('Nombre: '+mascota.nombre)
console.log('Peso: '+mascota.peso)
console.log('Raza: '+mascota.raza)
console.log('Edad: '+mascota.edad)
console.log('Altura '+mascota.altura)

let frutas = [ 'fresa', 'manzana', 'pera', 'uva', 'banana'] 
console.log (frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros = [ '50', '100', '30', '15', '68'] 
console.log (numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = [
    padre = {  
        nombre: 'Rafael',
        apellido: 'Laguna',
        edad: '63 años',
        altura: '1.63 cm',
    } ,

    madre = {
        nombre: 'Luz Mila',
        apellido: 'Gonzalez',
        edad: '62 años',
        altura: '1.58 cm',
    },

    hijo1 = {
        nombre: 'Julian',
        apellido: 'Laguna',
        edad: '42 años',
        altura: '1.67 cm',
    },

    hijo2 = {
        nombre: 'Anlly',
        apellido: 'Laguna',
        edad: '39 años',
        altura: '1.57 cm',
    },

    hijo3 = {
        nombre: 'Nicoll',
        apellido: 'Laguna',
        edad: '18 años',
        altura: '1.61 cm',
    },
    
]

console.log(familia)
console.log (familia[0])
console.log (familia[1])
console.log (familia[2])
console.log (familia[3])
console.log (familia[4])

let textoAleatorio = frutas[1] + ' '+ numeros[3] + ' '+ JSON.stringify(familia[4])
console.log (textoAleatorio)


let edad = prompt ('Digita tu edad: ')
let laedad = prompt ('Digita la edad de tu compañero: ')

edadesIguales = edad === laedad 
soyMayor = edad > laedad
soyMenor = edad < laedad

console.log ('Mi edad es igual a la de mi compañero: '+edadesIguales)
console.log ('Mi edad es mayor a la de mi compañero: '+soyMayor)
console.log ('Mi edad es menor a la de mi compañero: '+soyMenor)

let soyMayorDeEdad = prompt ('Digitar mi edad: ')
if (soyMayorDeEdad >= 18){
    console.log('Soy mayor de edad: '+soyMayorDeEdad)
} else {
    console.log ('No soy mayor de edad')
}


let edad2 = prompt ('Digitar la edad: ')
let altura = prompt('Digite la altura: ')

puedeSubir = edad2 > 6 && altura >= 120

if (puedeSubir==true){
    console.log ('Puede subir a la atracción: '+ edad2+ ' años '+ altura+ ' cm')
}else {
    console.log ('No puede subir a la atracción')
}

let pase = prompt('Introzca que tipo de pase posee: ')
let saldo = prompt('Ingrese el saldo que dispone: ')

let puedePasar = pase == 'vip' || saldo > 1000 
if (puedePasar==true){
    console.log('La persona puede pasar: pase '+ pase+ ' saldo ' +saldo)
}else {
    console.log('La persona NO puede pasar66')
}

