function Third(){
    // let const 
    let a = 5
    {
        let a = 7
        console.log(a)
    }
    console.log(a)
}

Third()