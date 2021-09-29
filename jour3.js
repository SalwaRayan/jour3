// 01 - Fruits

var fruits = ["mango", "lemon", "blueberry"]

console.log(fruits)
// console.table(fruits)

// 02 - Access

var ingredients = ["eggs", "milk", "butter"]

console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))

// 03 - Add and Remove

var objects = ["pen", "book", "lamp"]

console.log(objects)

objects.unshift("chair")
console.log(objects)

objects.pop()
console.log(objects)

objects.push("laptop")
console.log(objects)

objects.shift()
console.log(objects)

// 04 - Order

var numbers = [4, 10, 8, 12, 6]

numbers.reverse()
console.log(numbers)

numbers.sort((a, b) => a - b) 
console.log(numbers)

// 05 - Boucle

var total = 0
var limit = 10

for (var i = 1; i <= limit ; total = total + i++){
  console.log(total + i)
}

    // var total = 0
    // var limit = 10

    // for (var i = 0; i <= limit ; i++){
    //   total = total + i 
    //   console.log(total)
    // }

// 06 - Reverse

var sentence = "Hello Konexio !"

var reverseSentence = "";

for (var i = sentence.length - 1; i >= 0; i--) {
  reverseSentence += sentence[i];
}
console.log(reverseSentence)

    // for(var i = 0; i < sentence.length; i++){
    //   reverseSentence = sentence[i] + reverseSentence
    // }
    // console.log(reverseSentence)

// Bonus

for(var i = 0;  i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "fizzbuzz")
  } else if (i % 5 === 0) {
    console.log(i, "buzz") 
  } else if (i % 3 === 0) {
    console.log(i, "fizz")
  } else if (i % 7 === 0) {
    console.log("")
  } else {
    console.log(i)
  }

  // if (i % 3 === 0 && i % 5 === 0) {
  //   console.log(`${i} fizzbuzz`)
  // } else if (i % 5 === 0) {
  //   console.log(`${i} buzz`) 
  // } else if (i % 3 === 0) {
  //   console.log(`${i} fizz`)
  // } else if (i % 7 === 0) {
  //   console.log("")
  // } else {
  //   console.log(i)
  // }

}

// Bonus II

var total = 0
var limit = 10
// var i = 1
var counter = 0

// while (i <= limit){
//   total = total + i++
// }
// console.log(total)

while (counter <= limit) {
  total = total + counter
  counter++
}
console.log(total)

//  Bonus III

var mate = ["Ahmed", "KévinA", "Alin", "Bilal", "Chaïma", "Edouard", "Eloi", "Evan", "Hanaa", "Hélène", "Jeremy", "Karimou", "KévinJ", "Marco", "Rébecca", "Syrine", "Jong", "Vincent"]
var randomMate = mate[Math.floor(Math.random()*mate.length)]

console.log(randomMate)

// Bonus IV

var array = []
var limit = 20

for (var i = 0; i < limit ; i++ ) {
  var number = Math.floor(Math.random()*(100 - 0 + 1) + 0)
  array.push(number)
}

console.table(array)

var max = -1

for (var i = 0; i < array.length; i++){
  if (array[i] > max) {
    max = array[i]
  }
}

console.log(max)