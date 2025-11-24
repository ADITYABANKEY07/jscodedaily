function Sixth() {
  let Fruits = ["Apple", "Mango", "Grapes", "Orange"];
  // let Vegetable = ["Brinjal", "Cauliflower", "Cucumber", "Onion"]
  // document.write(Fruits)

  // Array Methods

  // document.write(Fruits.length) //length

  // document.write(Fruits[1]) // array element access using indexing[]

  //  POP, Push, Shift, Unshift

  //   Fruits.pop() //POP :- Remove element from last
  //   Fruits.push("DragonFruits") //Push :- Add element from last
  //   Fruits.shift() //Shift :- Remove element from start
  //   Fruits.unshift("Banana") //UnShift :- Add element from start
  //   alert(Fruits);

  // Slice

  //   alert(Fruits.slice(1,3))

  // Splice : Remove from between the element string to array

  //   3 parameter : [Indexing,
  // Delete Count(If no delete -0 other wise any number),
  // "String" ]

//   console.log(Fruits.slice(0,-2))
//   (Fruits.splice(1,2,"Peach", "Banana"));
//   alert(Fruits);

// console.log(Fruits.reverse())

// console.log(Fruits.concat(Vegetable))

// console.log(Vegetable)
// Vegetable.splice(1, 3, "Potato")
// console.log(Vegetable)

// join('seperator)
// console.log(Fruits.join(','))

let text  = "Aditya"

console.log(text.split('').reverse().join(''))

}
