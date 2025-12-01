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

let Show = document.querySelector("#show")

info.map((e)=>{
    Show.innerHTML += `
    <tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.city}</td>
    </tr>
    `
})