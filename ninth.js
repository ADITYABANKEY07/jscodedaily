let Ninth = () => {
  // let text = document.querySelector("#heading");
  // let paratag = document.querySelector("#para");
  // text.innerHTML = "This is a Js";
  // paratag.innerHTML = "This is a <b>bold</b> and <strong>Strong</strong>";
  // paratag.style.fontSize = "56px"
  // paratag.style.color = "red"

};

  // ++++++++++++++++++++++++ Day 2 ++++++++++++++++++++++++ 

  // let ImgBtn = () => {
  //   let box = document.querySelector('.main-box')
    // box.style.backgroundImage = "url(https://images.pexels.com/photos/34558609/pexels-photo-34558609.jpeg)"
    // box.style.backgroundSize = "cover"
    // box.style.width = "300px"
    // box.style.height = "300px"

  //   let texth1 = document.querySelector("#text")
  //   texth1.style.color = "red"
  //   let textp = document.querySelector("#text2")
  //   textp.style.color = "blue"

  // }

  // let ListBtn  = () =>{
  //   let unorderlist = document.querySelector('.unorder')
  //   unorderlist.innerHTML = `         <ul>
  //   <li>Apple</li>
  //   <li>Banana</li>
  //   <li>Mango</li>
    
  // </ul>`
  // }

  // let ImgSrcTag = () => {
  //   let imgbox = document.querySelector("#imgsrctag")
  //   imgbox.src = "./doggyjs.jpg"
  // }

        //  <!-- Input Tag -->

let InpBtn = () => {
  let textInp = document.querySelector("#inp").value
  // alert(`Welcome back ${textInp}`)
  if(textInp%2===0){
    alert("It is even")
    console.log("Even")
  }
  else{
    alert("It is odd")
    console.log("Odd")
  }

  // Using ternary operator
  // (textInp%2==0) ? alert("It is even") : alert("It is odd")

}