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

// var multiple7 = []
var count = 0

for(var i = 100;  i <= 1000; i++) {
  if (i % 7 === 0) {
    // multiple7.push(i)
    count++
  }
}
// console.log(multiple7.length)
console.log(count)

console.log("")

// 10 - Chanceux 

var somme = 0

for (var i = 0; i < 20; i++){
  var number = Math.floor(Math.random()*(6 - 1 + 1) + 1)
  if (number >= 5){
    console.log(number)
    somme = somme + number
  }
}

console.log("") 
console.log(somme)

console.log("")

// // Des boites


// box1 = 12
// box2 = 5
// i = 12

// box1 = box2   ->   5
// box1 + box2  ->  5 + 5 = 10
// box2 = box1 + i ->  5 + 12 = 17

// i = 13

// box1 = box2   ->   17
// box1 + box2  ->  17 + 17 = 34
// box2 = box1 + i ->  17 + 13 = 30

// box1 = 17
// box2 = 30
// i = 14


// // D'autres boites


// box1 = 12
// i = 12 // i !== 0 // i = i - 3 

// box1 = 12
// box1 = box1 + i   ->  12 + 12 = 24

// box1 = 24
// box1 = box1 + i   ->  24 + 9 = 33

// box1 = 33
// box1 = box1 + i   ->  33 + 6 = 39

// box1 = 39
// box1 = box1 + i   ->  39 + 3 = 42

// box1 = 24
// i = 0


// // Encore des boites


// box1 = 0
// box2 = 3
// i = 0 // i > -4 // i--

// i % 2 === 0 --> 0 = oui
// box1 + i --> 0 + 0 = 0
// box2++ --> 3 + 1 = 4

// i = -1

// i % 2 === 0 --> -1 = non
// box2 + i --> 4 + (-1) = 3
// box1++ --> 0 - 1 = -1

// i = -2

// i % 2 === 0 --> -2 = oui
// box1 + i --> -1 + (-2) = -3
// box2++ --> 4 + 1 = 5

// i = -3

// i % 2 === 0 --> -3 = non
// box2 + i --> 5 + (-3) = 2
// box1++ --> -1 - 1 = -2

// box1 = -2
// box2 = 5
// i = -4


// Mega Bonus - CORRECTION



// Mega Bonus II - CORRECTION

var user = {
  firstName: "Salwa",
  lastName: "Rayan",
  age: 22
}

var entries = Object.entries(user)

console.table(entries)