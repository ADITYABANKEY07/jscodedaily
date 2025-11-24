let Valid = () => {
  // trim remove whitespace from starting and ending // String Method: 1
  let Name = document.querySelector("#name").value.trim();
  let Number = document.querySelector("#number").value.trim();
  let Email = document.querySelector("#email").value.trim();
  let Password = document.querySelector("#password").value.trim();
  let Cpassword = document.querySelector("#cpassword").value.trim();

  let Errname = document.querySelector("#errname");
  let Errnumber = document.querySelector("#errnum");
  let Erremail = document.querySelector("#erremail");
  let Errpass = document.querySelector("#errpass");
  let Errcpass = document.querySelector("#errcpass");

  Errname.innerHTML = ""
Errnumber
Erremail.innerHTML = ""
Errpass.innerHTML = ""
Errcpass.innerHTML = ""

  if (Name == "") {
    Errname.innerHTML = "Please Enter Name";
    Errname.style.color = "red";
    return false;
  } else if (Number == "") {
    Errnumber.innerHTML = "Please Enter Number";
    Errnumber.style.color = "red";
    return false;
  } else if (Email == "") {
    Erremail.innerHTML = "Please Enter Email";
    Erremail.style.color = "red";
    return false;
  } else if (Password == "") {
    Errpass.innerHTML = "Please Enter Password";
    Errcpass.focus()
    Errpass.style.color = "red";
    return false;
  } else if (Cpassword == "") {
    Errcpass.innerHTML = "Please Enter Cpassword";
    Errcpass.style.color = "red";
    return false;
  }

  // If Number length is less than 10
  else if (Number.length != 10) {
    Errnumber.innerHTML = "Please enter vaild number";
    return false;
  }

  // isNan:- If alphabetic then returns true  String Method:2
  else if (isNaN(Number)) {
    Errnumber.innerHTML = "Please enter number only";
    return false;
  }

  // .includes it returns a boolean value (true or false) based on whether the value is found.
  else if (!(Email.includes("@") && Email.includes(".com"))) {
    Erremail.innerHTML = "Please enter valid email";
    return false;
  }

  // Make Strong password

  else if (!(Password.match(/[1234567890]/) && Password.match(/[!@#$%^&*]/) && Password.match(/[A-Z]/) && Password.match(/[a-z]/))) {
    Errpass.innerHTML = "Please make a strong password";
    return false;
  }

    // If Password is not matching
  
  else if (Password !== Cpassword) {
    Errcpass.innerHTML = "Password is Not Matching";
    document.querySelector("cpassword").value = "";
    return false;
  }

  return true;
};
