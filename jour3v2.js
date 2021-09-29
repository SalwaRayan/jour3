// 01 - Nombre pairs

var even = []
var max = 47
var total = 0

for (var i = 11; i < max; i++){
  if (i % 2 === 0) {
    even.push(i)
    total = total + i
  }
}
console.table(even)
console.log(total)


// 02 - Nombre impairs

var odd = []
var max = 558
var total = 0
for (var i = 109; i < max; i++) {
  if (i % 2 !== 0) {
    odd.push(i)
    total = total + i
  }
}
// console.table(odd)
console.log(odd)
console.log(total)

// 03 - Puissance et racine carrée

var numbers = [1, 2, 3, 4, 5]
var square = []
var roots = []

for (var i = 0; i < numbers.length; i++) {
  var numberSquare = numbers[i]**2
  square.push(numberSquare)
}
console.table(square)


for (var i = 0; i < numbers.length; i++) {
  var numberRoots = Math.sqrt(square[i]);
  roots.push(numberRoots)
}
console.table(roots)

// 04 - Tale de multiplication v1

var limite = 10

for (var i = 0; i <= limite; i++){
  var multi =  3 * i
  console.log(`3 x ${i} = ${multi}`)
}

// 05 - Table de multiplication v2

for(var i = 0; i <= 10; i++) {
  for(var j = 0; j <= 10; j++) {
    var multi = i * j
    console.log(`${i} x ${j} = ${multi}`)
  }
  console.log("")
}

// 06 - Factorielle v1

var numberFactorielle = 7
var factorielle = 1

for (var i = 7; i > 0; i--){
  var factorielle = factorielle * i
}
console.log(factorielle)

// 07 - Factorielle v2

//code

// 08 - Somme de carrée

var somme = 0

for (var i = 5; i <= 10; i++) {
  var square = i**2
  somme = somme + square
}
console.table(somme)

// 09 - Comptons

var multiple7 = []

for(var i = 100;  i <= 1000; i++) {
  if (i % 7 === 0) {
    multiple7.push(i)
  }
}
console.log(multiple7.length)

// 10 - Chanceux - A CORRIGER

var somme = 0

for (var i = 0; i < 20; i++){
  var number = Math.floor(Math.random()*(6 - 1 + 1) + 1)
  if (number >= 5){
    somme = somme + number
  }
}
console.log(somme)

// 11 - 