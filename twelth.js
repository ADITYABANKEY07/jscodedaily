// Map: It iterate value one by one and make new Arrary and it return all value

// let num = [2,6,4,8,1]

// let newArr = num.map((e)=>{
//     return e*2
// })

// console.log(newArr)

// Callback function: It is a function which is pass any paramter
// Higher order function: Map is a higher function because we taken inside function

// Filter: It iterate value one by one and give filter the value according to condition and make new Arrary

// let newFilter = num.filter((e)=>{
//     return e>4
// })

// console.log(newFilter)

// ForEach Loop : It doesn't return array it return string 

// num.forEach((e)=>{
//     console.log(e*2)
// })

// ========================== Array of Objects ========================== //

let info = [
    {
        name : "Aditya",
        age: 24,
        city: "Bhopal"
    },
        {
        name : "Shriram",
        age: 37,
        city: "Indore"
    },
        {
        name : "Kamlesh",
        age: 41,
        city: "Gwalior"
    },
]

let newData = info.map((e)=>{
    return e.name
})

console.log(newData)

let filterData = info.filter((e)=>{
    return e.city[1]
})

console.log(filterData)

//find
// find vs filter
// reduce


