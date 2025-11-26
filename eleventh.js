function signup() {
  let NameInp = document.getElementById("nameinp").value.trim();
  let NumInp = document.getElementById("numinp").value.trim();
  let EmailInp = document.getElementById("emailinp").value.trim();
  let PassInp = document.getElementById("passinp").value.trim();
  let CpassInp = document.getElementById("cpassinp").value.trim();

  let Errname = document.getElementById("errname");
  let Errnum = document.getElementById("errnum");
  let Erremail = document.getElementById("erremail");
  let Errpass = document.getElementById("errpass");
  let Errcpass = document.getElementById("errcpass");

  Errname.innerHTML = "";
  Errnum.innerHTML = "";
  Erremail.innerHTML = "";
  Errpass.innerHTML = "";
  Errcpass.innerHTML = "";

  if (NameInp == "") {
    Errname.innerHTML = "Please enter a name";
    Errname.style.color = "red";
    return false;
  } else if (NumInp == "") {
    Errnum.innerHTML = "Please enter a number";
    Errnum.style.color = "red";
    return false;
  } else if (EmailInp == "") {
    Erremail.innerHTML = "Please enter a email";
    Erremail.style.color = "red";
    return false;
  } else if (PassInp == "") {
    Errpass.innerHTML = "Please enter a password";
    Errpass.style.color = "red";
    return false;
  } else if (CpassInp == "") {
    Errcpass.innerHTML = "Please enter a confirm password";
    Errcpass.style.color = "red";
    return false;
  } else if (PassInp !== CpassInp) {
    Errcpass.innerHTML = "Password is not matching";
    return false;
  } else if (!(EmailInp.includes("@") && EmailInp.includes(".com"))) {
    Erremail.innerHTML = "Please enter valid email";
    return false;
  } else if (
    !(
      PassInp.match(/[1234567890]/) &&
      PassInp.match(/[!@#$%^&*]/) &&
      PassInp.match(/[A-Z]/) &&
      PassInp.match(/[a-z]/)
    )
  ) {
    Errpass.innerHTML = "Make a strong password"
    return false
  }
  else if(NumInp.length != 10){
    Errpass.innerHTML = "Please enter a valid number"
    return false
  }
  else if(isNaN(NumInp)){
    Errnum.innerHTML = "Please enter a number only"
    return false
  }
  // return true
  localStorage.setItem("Name",NameInp)
  localStorage.setItem("Phone no.",NumInp)
  localStorage.setItem("Email",EmailInp)
  localStorage.setItem("Password",PassInp)

  location.href = ("tenthjs.html")

  return false
}
