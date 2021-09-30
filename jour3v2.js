// 01 - Nombre pairs

// var even = []
var max = 47
var total = 0

for (var i = 11; i < max; i++){
  if (i % 2 === 0) {
    // even.push(i)
    console.log(i)
    total = total + i
  }
}
console.log("")
// console.table(even) 
console.log(total)

console.log("")

// 02 - Nombre impairs

// var odd = []
var max = 558
var total = 0
for (var i = 109; i < max; i++) {
  if (i % 2 !== 0) {
    console.log(i)
    // odd.push(i)
    total = total + i
  }
}
console.log("")
// console.table(odd)
console.log(total)

console.log("")

// 03 - Puissance et racine carrée

var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []

for (var i = 0; i < numbers.length; i++) {
  var numberSquare = numbers[i]**2
  squares.push(numberSquare)
}
console.table(squares)

console.log("")

for (var i = 0; i < squares.length; i++) {
  var numberRoots = Math.sqrt(squares[i])
  roots.push(numberRoots)
}
console.table(roots)

console.log("")

// 04 - Tale de multiplication v1

for (var i = 0; i <= 10; i++){
  var multi =  3 * i
  console.log(`3 x ${i} = ${multi}`)
}

console.log("")

// 05 - Table de multiplication v2

for(var i = 0; i <= 10; i++) {
  for(var j = 0; j <= 10; j++) {
    var multi = i * j
    console.log(`${i} x ${j} = ${multi}`)
  }
  console.log("")
}

// 06 - Factorielle v1

var factorielle = 7

for (var i = 1; i < 7; i++){
  factorielle = factorielle * i
}
console.log(factorielle)

console.log("")

// 07 - Factorielle v2

for (var i = 0; i <= 8; i++){ 
  var factorielle = 1  // numero con il quale si fa il fattoriale
  for (var j = 1; j <= i; j++){ // numeri con il quale si calcola il fattoriale
    factorielle = factorielle * j
  }
console.log(`${i}! = ${factorielle}`)
console.log("")
}

// 08 - Somme de carrée

var somme = 0

for (var i = 5; i <= 10; i++) {
  var square = i**2
  somme = somme + square
}

console.table(somme)

console.log("")

// 09 - Comptons

var multiple7 = []

for(var i = 100;  i <= 1000; i++) {
  if (i % 7 === 0) {
    multiple7.push(i)
  }
}
console.log(multiple7.length)

console.log("")

// 10 - Chanceux 

var somme = 0

for (var i = 0; i < 20; i++){
  var number = Math.floor(Math.random()*(6 - 1 + 1) + 1)
  console.log(number)
  if (number >= 5){
    somme = somme + number
  }
}

console.log("") 
console.log(somme)

console.log("")

// Mega Bonus 

