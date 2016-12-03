// function add (a, b) {
//   return a + b
// }
//
// console.log(add(3, 1))
//
// let toAdd = [9, 5]
//
// console.log(add(...toAdd))

// let groupA = ['Jen', 'Cory']
// let groupB = ['Bill']
// let final = [...groupB, 3, ...groupA]
//
// console.log(final)

let person = ['Bill', 26]
let personTwo = ['Andrew', 25]
function greeting(name, age) {
  console.log('Hi ' + name + ', you are ' + age)
}

greeting(...person)
greeting(...personTwo)

let names = ['Mike', 'Ben']
let final = [...names, 'Bill']

final.forEach((name) => {
  console.log('Hi ' + name)
})
