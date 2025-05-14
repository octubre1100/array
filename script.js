let colores = ["rojo", "azul" , "amarrillo","verde", "fucsia"]
console.log (colores)
console.log (colores[0])
console.log (colores[4])
console.log (colores.length)
colores.push("naranja")
console.log (colores)
colores.unshift("turquesa")
console.log (colores)
colores.pop()
console.log (colores)
colores.shift()
console.log(colores)
colores[1] = "lila"
for (let k = 0; k <colores.length; k++){
console.log(colores[k])
}
let nuevosColores = [prompt("ingrese un color"), prompt("ingrese un color"),prompt("ingrese un color")]
console.log (nuevosColores)  
