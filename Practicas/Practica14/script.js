var arreglo= ['manzana','kiwi','PLATANO','Mandarina']
console.log(arreglo)
console.log(arreglo[0].toUpperCase())
console.log(arreglo[2].toLocaleLowerCase())
console.log(arreglo[3].toLocaleLowerCase())

console.log(arreglo[0].indexOf('z'))
console.log(arreglo[1].indexOf('z'))
console.log(arreglo[2].lastIndexOf('a'))
console.log(arreglo[3].lastIndexOf('z'))

alert("tu arreglo es de tamaño "+arreglo.length)
alert("tu arreglo es de tamaño ".concat(arreglo.length))

var mensaje ="hola Mundo"
var porcion=mensaje.substring(2)
console.log(porcion)
porcion=mensaje.substring(5,8)
console.log(porcion)
porcion=mensaje.substring(7)
console.log(porcion)
porcion=mensaje.substring(1,8)
console.log(porcion)
porcion=mensaje.substring(3,4)
console.log(porcion)
porcion=mensaje.substring(5,0)
console.log(porcion)
porcion=mensaje.substring(0,5)
console.log(porcion)

var mensaje = "hola mundo , soy una cadena de texto "

var palabras = mensaje.split(' ')
alert(palabras)
var palabra = 'hola'
var letras = palabra.split("")
alert(letras)

var mensaje= palabras.join('-')
alert(mensaje)

alert(arreglo)
arreglo - arreglo.pop()
arreglo- arreglo.shift()
arreglo.push('platano')
arreglo.unshift('ceresa')
alert(arreglo)
alert(arreglo.reverse())

var numero1 = 2
var numeto2=0


if(isNaN(numero1/numeto2)){
    alert("divicion invalida")
}else{
    alert("divicion igual a "+numero1/numero2)

}

var numero1 = 123.456789
console.log(numero1.toFixed(2))
console.log(numero1.toFixed(6))
console.log(numero1.toFixed())