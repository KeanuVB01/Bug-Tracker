function arrProjects() {
  let projectarr = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("pro")) {
      projectarr.push(localStorage.getItem(localStorage.key(i)));
    }
  }
  console.log(projectarr);

  return projectarr;
}

function arrPeopl() {
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
//populates assigned to
var select = document.getElementById("assign");
var options = arrPeopl();

for (var i = 0; i < options.length; i++) {
  let peopleName = JSON.parse(options[i]);
  var opt = peopleName[3];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

//populates the listbox in create ticket with projects
var select = document.getElementById("project");
var options = arrProjects();

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}
function Ticketarr() {
  let Ticketarr = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("Tic")) {
      Ticketarr.push(localStorage.getItem(localStorage.key(i)));
    }
  }

  return Ticketarr;
}

function saveTicket() {
  let Ticket = [];
  let project = document.getElementById("project").value;
  let shortSummary = document.getElementById("summary").value;
  let detailed = document.getElementById("detailed").value;
  let identified = document.getElementById("issueIde").value;
  let status = document.getElementById("status").value;
  let priority = document.getElementById("priority").value;
  let targetdate = document.getElementById("targetdate").value;
  let actualdate = document.getElementById("actualedate").value;
  let resolustionMessage = document.getElementById("resolustion").value;
  let dateplaced = new Date();
  let assignPerson = document.getElementById("assign").value;

  if (
    project &&
    shortSummary &&
    detailed &&
    identified &&
    status &&
    targetdate &&
    dateplaced
  ) {
    Ticket.push(project);
    Ticket.push(shortSummary);
    Ticket.push(detailed);
    Ticket.push(identified);
    Ticket.push(status);
    Ticket.push(priority);
    Ticket.push(targetdate);
    Ticket.push(actualdate);
    Ticket.push(resolustionMessage);
    Ticket.push(dateplaced);
    Ticket.push(assignPerson);
    console.log(Ticket);

    // add array to localstorage
    let string = JSON.stringify(Ticket);
    let id = Ticketarr().length + 1;
    localStorage.setItem("Tic" + id, string);
    console.log(localStorage);
    //display added
    alert("Ticket added ticket id: Tic" + id);
  } else {
    alert("Make sure that you fill in all the required  field");
  }
}
