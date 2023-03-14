//returns an array of all the people in the localstorage
function arrOfPeople() {
  //an array of people
  let arr = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("peo")) {
      arr.push(localStorage.getItem(localStorage.key(i)));
    }
  }
  console.log(arr);
  return arr;
}

//Will add people to localstorage
function addpeople() {
  document.getElementById("personadded").innerHTML = " ";
  let Person = [];
  let name = document.getElementById("Name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;

  let id = arrOfPeople().length + 1;
  let flag = true;

  let isname = false;
  let isusername = false;

  //if the fieleds are empty
  if (!name || !surname || !email || !username) {
    alert("Make sure that all the fields are filled in ");
  } else if (name && surname && email && username) {
    //if  all fields are there
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes("peo")) {
        let temparr = JSON.parse(localStorage.getItem(localStorage.key(i)));
        for (let j = 0; j < temparr.length; j++) {
          // //checks if its the names and surname that is the same
          if (temparr[0] == name && temparr[1] == surname) {
            flag = false;
            isname = true;
          } else if (temparr[3] == username) {
            //checks if the username is already taken
            flag = false;
            isusername = true;
          }
        }
      }
    }
    if (flag == true) {
      //adds all the inputs to an array and saves it to localstorage
      Person.push(name);
      Person.push(surname);
      Person.push(email);
      Person.push(username);
      document.getElementById("personadded").innerHTML = "Person added";
      localStorage.setItem("peo" + id, JSON.stringify(Person));
      console.log(localStorage);
    } else if (flag == false) {
      if (isname == true) {
        alert("This person already here");
      } else if (isusername == true) {
        alert("This username is already taken pls enter a new one");
      }
    }
  }
}
