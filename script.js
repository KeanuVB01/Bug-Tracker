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
//populates assigned to
var select = document.getElementById("projectname");
var options = arrProjects();

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

//so we can make a ID with projectarr.lenght 1++
function totalProjects() {
  let projectarr = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("pro")) {
      projectarr.push(localStorage.getItem(localStorage.key(i)));
    }
  }
  console.log(projectarr);
  let total = 1 * projectarr.length + 1;

  return total;
}

function addproject() {
  let proName = document.getElementById("projectName").value;
  if (proName && isNaN(proName)) {
    //displays the id to the user
    document.getElementById("projectID").innerHTML = "pro" + totalProjects();

    localStorage.setItem("pro" + totalProjects(), proName);
    //for debuging and making sure it saved right
    console.log(localStorage);
  } else {
    alert("no name was entered");
  }
}
function ticketarr() {
  let ticketarr = [];
  for (let j = 0; j < localStorage.length; j++) {
    if (localStorage.key(j).includes("Tic")) {
      var temp = JSON.parse(localStorage.getItem(localStorage.key(j)));
      console.log(JSON.parse(localStorage.getItem(localStorage.key(j))).length);
      temp.push(localStorage.key(j));
      ticketarr.push(JSON.stringify(temp));
    }
  }

  return ticketarr;
}
console.log(ticketarr());

function populate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = JSON.parse(arr[i]);

    //done
    if (temp[4] == "resolve") {
      if (temp[5] == "medium") {
        var open = document.getElementById("Done");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="mediumItem">
        <h4 class="mediumItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemMediumType">Medium</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      } else if (temp[5] == "low") {
        var open = document.getElementById("Done");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="lowItem">
        <h4 class="lowItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemLowType">Low</h5> 
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      } else if (temp[5] == "high") {
        var open = document.getElementById("Done");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="highItem">
        <h4 class="highItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemHighType">High</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      }

      //in progress
    } else if (temp[4] == "progress") {
      if (temp[5] == "medium") {
        var open = document.getElementById("InProgress");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="mediumItem">
        <h4 class="mediumItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemMediumType">Medium</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>          </article>`
        );
      } else if (temp[5] == "low") {
        var open = document.getElementById("InProgress");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="lowItem">
        <h4 class="lowItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemLowType">Low</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>          </article>`
        );
      } else if (temp[5] == "high") {
        var open = document.getElementById("InProgress");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="highItem">
        <h4 class="highItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemHighType">High</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      }
      //to do
    } else if (temp[4] == "open") {
      if (temp[5] == "medium") {
        var open = document.getElementById("ToDoSection");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="mediumItem">
        <h4 class="mediumItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemMediumType">Medium</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      } else if (temp[5] == "low") {
        var open = document.getElementById("ToDoSection");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="lowItem">
        <h4 class="lowItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemLowType">Low</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      } else if (temp[5] == "high") {
        var open = document.getElementById("ToDoSection");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="highItem">
        <h4 class="highItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemHighType">High</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      }
    }
    //in review
    else if (temp[4] == "overdue") {
      if (temp[5] == "medium") {
        var open = document.getElementById("InReview");
        open.insertAdjacentHTML(
          "beforeend",
          `
          <article class="mediumItem">
        <h4 class="mediumItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemMediumType">Medium</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      } else if (temp[5] == "low") {
        var open = document.getElementById("InReview");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="lowItem">
        <h4 class="lowItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemLowType">Low</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      } else if (temp[5] == "high") {
        var open = document.getElementById("InReview");
        open.insertAdjacentHTML(
          "beforeend",
          `<article class="highItem">
        <h4 class="highItemHeader">${temp[1]}</h2>
        <p>${temp[10]}</p>
        <h5 class="itemHighType">High</h5>
        <button title="viewTicket" class="btnViewTicket" value="${temp[11]}" onclick="return ticketOpen(value)"><a id="btnProjects" href="#ticketOverlay">View/Edit Issue</a></button>
          </article>`
        );
      }
    }
  }
  arr = [];
}

function clear() {
  const todo = document.getElementById("ToDoSection");
  const InProgress = document.getElementById("InProgress");
  const InReview = document.getElementById("InReview");
  const Done = document.getElementById("Done");
  //Done
  while (Done.firstChild) {
    Done.removeChild(Done.lastChild);
  }

  Done.innerHTML = ` <header id="DoneHeader" class="sectionsHeader">
  <h3 class="sectionHeaderTitle">Done</h3>
</header>`;

  //InProgress
  while (InProgress.firstChild) {
    InProgress.removeChild(InProgress.lastChild);
  }

  InProgress.innerHTML = ` <header id="InProgressHeader" class="sectionsHeader">
  <h3 class="sectionHeaderTitle">In Progress</h3>
</header>`;

  //InReview
  while (InReview.firstChild) {
    InReview.removeChild(InReview.lastChild);
  }

  InReview.innerHTML = ` <header id="InReviewHeader" class="sectionsHeader">
  <h3 class="sectionHeaderTitle">Overdue</h3>
</header>`;

  //todo
  while (todo.firstChild) {
    todo.removeChild(todo.lastChild);
  }

  todo.innerHTML = ` <header id="ToDoHeader" class="sectionsHeader">
<h3 class="sectionHeaderTitle">To Do</h3>
</header> `;
}

function search() {
  clear();
  let temp = [];
  let projectname = document.getElementById("projectname").value;
  if (projectname == "none") {
    document.getElementById("dateCreated").innerHTML = "All";
    location.reload();
  } else {
    document.getElementById("dateCreated").innerHTML = projectname;
  }
  let othertemp = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("Tic")) {
      let alltic = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (projectname == alltic[0]) {
        var temps = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(
          JSON.parse(localStorage.getItem(localStorage.key(i))).length
        );
        temps.push(localStorage.key(i));
        temp.push(JSON.stringify(temps));
        /*
        temp.push(localStorage.getItem(localStorage.key(i)));
        */
      }
    }
  }
  console.log("temp is running");
  console.log(temp);
  populate(temp);
}

function refreshPage() {
  location.reload();
}

window.addEventListener("load", function () {
  populate(ticketarr());
});

function testReturn() {
  addproject();
  console.log("Confirmed");
  //location.href = ("http://127.0.0.1:5500/GroupPage/index.html");
  //history.back();
}
function dropdownStatus(arrTest) {
  for (
    var i = document.getElementById("StatusSelect").options.length;
    i-- > 0;

  )
    document.getElementById("StatusSelect").options[i] = null;

  var select = document.getElementById("StatusSelect");
  let opt = arrTest[4];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
  if (
    arrTest[4] != "resolve" &&
    arrTest[4] != "progress" &&
    arrTest[4] != "overdue"
  ) {
    var select = document.getElementById("StatusSelect");
    let opt = "resolve";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let progress = "progress";
    let progressel = document.createElement("option");
    progressel.textContent = progress;
    progressel.value = progress;
    select.appendChild(progressel);

    let overdue = "overdue";
    let overdueel = document.createElement("option");
    overdueel.textContent = overdue;
    overdueel.value = overdue;
    select.appendChild(overdueel);
  } else if (
    arrTest[4] != "open" &&
    arrTest[4] != "progress" &&
    arrTest[4] != "overdue"
  ) {
    var select = document.getElementById("StatusSelect");
    let opt = "open";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let progress = "progress";
    let progressel = document.createElement("option");
    progressel.textContent = progress;
    progressel.value = progress;
    select.appendChild(progressel);

    let overdue = "overdue";
    let overdueel = document.createElement("option");
    overdueel.textContent = overdue;
    overdueel.value = overdue;
    select.appendChild(overdueel);
  } else if (
    arrTest[4] != "open" &&
    arrTest[4] != "resolve" &&
    arrTest[4] != "overdue"
  ) {
    var select = document.getElementById("StatusSelect");
    let opt = "open";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let progress = "resolve";
    let progressel = document.createElement("option");
    progressel.textContent = progress;
    progressel.value = progress;
    select.appendChild(progressel);

    let overdue = "overdue";
    let overdueel = document.createElement("option");
    overdueel.textContent = overdue;
    overdueel.value = overdue;
    select.appendChild(overdueel);
  } else if (
    arrTest[4] != "open" &&
    arrTest[4] != "resolve" &&
    arrTest[4] != "progress"
  ) {
    var select = document.getElementById("StatusSelect");
    let opt = "open";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let progress = "resolve";
    let progressel = document.createElement("option");
    progressel.textContent = progress;
    progressel.value = progress;
    select.appendChild(progressel);

    let overdue = "progress";
    let overdueel = document.createElement("option");
    overdueel.textContent = overdue;
    overdueel.value = overdue;
    select.appendChild(overdueel);
  }
}
function dropdownprority(arrTest) {
  for (
    var i = document.getElementById("prioritydropdown").options.length;
    i-- > 0;

  )
    document.getElementById("prioritydropdown").options[i] = null;

  var select = document.getElementById("prioritydropdown");
  let opt = arrTest[5];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
  if (arrTest[5] != "high" && arrTest[5] != "medium") {
    var select = document.getElementById("prioritydropdown");
    let opt = "high";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let medium = "medium";
    let mediumsel = document.createElement("option");
    mediumsel.textContent = medium;
    mediumsel.value = medium;
    select.appendChild(mediumsel);
  } else if (arrTest[5] != "low" && arrTest[5] != "medium") {
    var select = document.getElementById("prioritydropdown");
    let opt = "low";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let medium = "medium";
    let mediumsel = document.createElement("option");
    mediumsel.textContent = medium;
    mediumsel.value = medium;
    select.appendChild(mediumsel);
  } else if (arrTest[5] != "low" && arrTest[5] != "high") {
    var select = document.getElementById("prioritydropdown");
    let opt = "low";
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

    let high = "high";
    let highsel = document.createElement("option");
    highsel.textContent = high;
    highsel.value = high;
    select.appendChild(highsel);
  }
}
function droupdownperson(arrTest) {
  for (
    var i = document.getElementById("assigndropdown").options.length;
    i-- > 0;

  )
    document.getElementById("assigndropdown").options[i] = null;

  var select = document.getElementById("assigndropdown");
  let opt = arrTest[10];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
  let temp = arrOfPeople();
  for (let j = 0; j < temp.length; j++) {
    let nametemp = JSON.parse(temp[j]);
    if (nametemp[0] != arrTest[10]) {
      var select = document.getElementById("assigndropdown");
      let opt = nametemp[0];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
}
function ticketOpen(ticketNumber) {
  let complete = localStorage.getItem(ticketNumber);
  let arrTest = JSON.parse(complete);
  // document.getElementById("project").setAttribute("value",arrTest[0]);
  //document.forms['ticketForm']['project'].innerHTML = extract(arrTest[0].toString());
  console.log(arrTest);
  // document.getElementById("projectNameTicket").innerHTML = extract(arrTest[0].toString());
  // document.forms['ticketForm']['Summary'].value = extract(arrTest[1].toString());
  // document.forms['ticketForm']['detailed'].value = extract(arrTest[2].toString());
  // document.forms['ticketForm']['issueIde'].value = extract(arrTest[3].toString());
  // document.getElementById("assignLabel").innerHTML = extract(arrTest[10]).replace('"',"");
  // document.getElementById("statusLabel").innerHTML = extract(arrTest[4]);
  // document.getElementById("priorityLabel").innerHTML = extract(arrTest[5]);
  // document.forms['ticketForm']['targetdate'].value = extract(arrTest[6].toString());
  // document.forms['ticketForm']['actualedate'].value = extract(arrTest[7].toString());
  // document.forms['ticketForm']['resolustion'].value = extract(arrTest[8].toString());
  document.getElementById("ticketNumberLabel").innerHTML = ticketNumber;

  document.getElementById("projectNameTicket").innerHTML =
    arrTest[0].toString();
  document.forms["ticketForm"]["Summary"].value = arrTest[1];
  document.forms["ticketForm"]["detailed"].value = arrTest[2];
  document.forms["ticketForm"]["issueIde"].value = arrTest[3];
  // document.getElementById("assignLabel").innerHTML = arrTest[10].replace(
  // '"',
  // ""
  //);
  dropdownStatus(arrTest);
  dropdownprority(arrTest);
  droupdownperson(arrTest);
  //document.getElementById("statusLabel").innerHTML = arrTest[4];
  //document.getElementById("priorityLabel").innerHTML = arrTest[5];
  document.forms["ticketForm"]["targetdate"].value = arrTest[6];
  document.forms["ticketForm"]["actualedate"].value = arrTest[7];
  document.forms["ticketForm"]["resolustions"].value = arrTest[8];
}

function extract(input) {
  if (input[0] == "[") {
    input = input.substring(2, input.length - 1);
  } else {
    input = input.substring(1, input.length - 1);
  }

  return input;
}

function saveTicketTest() {
  let a = document.getElementById("ticketNumberLabel").innerHTML;
  saveTicket(a);
}

function saveTicket(ticketKey) {
  let Ticket = [];
  let project = document.getElementById("projectNameTicket").innerHTML;
  let shortSummary = document.getElementById("summarys").value;
  let detailed = document.getElementById("detaileds").value;
  let identified = document.getElementById("issueIdes").value;
  let status = document.getElementById("StatusSelect").value;
  console.log(status);
  let priority = document.getElementById("prioritydropdown").value;
  let targetdate = document.getElementById("targetdates").value;
  let actualdate = document.getElementById("actualedates").value;
  let resolustionMessage = document.getElementById("resolustions").value;
  let dateplaced = new Date();
  let assignPerson = document.getElementById("assigndropdown").value;

  console.log(ticketKey);
  if (
    shortSummary &&
    detailed &&
    identified &&
    status &&
    priority &&
    targetdate
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

    localStorage.setItem(ticketKey, string);
    console.log(localStorage);
    alert("Edit Saved");
    window.location.href = "#";
    location.reload();
  } else {
    //display added
    alert("Please fill in the required fields");
  }
}

function loadData() {
  //for population reasons
  localStorage.setItem(
    "Tic1",
    '["Project Beta","Crash Error 1","Crash Error occurs when user opens a new tab","User 256","overdue","low","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic1"]'
  );
  localStorage.setItem(
    "Tic2",
    '["Project Tales","UI Bug 1","UI text is not in borders","User 256","resolve","medium","2023-05-07","2023-04-10","","2022-08-29T14:47:01.594Z","zak","Tic2"]'
  );
  localStorage.setItem(
    "Tic3",
    '["Project Agility","Crash Error 2","Crash Error occurs when user opens a new tab","User 256","resolve","low","2023-05-07","2023-04-10","","2022-08-29T14:46:35.716Z","keanu","Tic3"]'
  );
  localStorage.setItem(
    "Tic4",
    '["Project Tales","Log Out Issue 1","Cannot log out from Main Menu","User 256","overdue","medium","2023-05-07","2023-04-10","","2022-08-29T14:46:54.947Z","keanu","Tic4"]'
  );
  localStorage.setItem(
    "Tic5",
    '["Project Beta","Conversion Error 1","Converts Units to Imperial not metric","User 256","overdue","low","0123-03-12","","Zak","2022-08-29T14:32:32.115Z","keanu","Tic5"]'
  );
  localStorage.setItem(
    "Tic6",
    '["Project Tales","Crash Error 3","Crash Error occurs when user opens a new tab","User 256","overdue","low","2023-05-07","2023-04-10","","2022-08-29T14:48:02.744Z","zak","Tic6"]'
  );
  localStorage.setItem(
    "Tic7",
    '["Project Tales","Conversion Error 2","Converts Units to Imperial not metric","User 256","overdue","high","2023-05-07","2023-04-10","","2022-08-29T14:46:46.899Z","keanu","Tic7"]'
  );
  localStorage.setItem(
    "Tic8",
    '["Project Tales","UI Error 2","UI text is not in borders","User 256","open","high","2023-05-07","2023-04-10","","2022-08-29T14:47:17.098Z","zak","Tic8"]'
  );
  localStorage.setItem(
    "Tic9",
    '["Project Beta","Crash Error 4","Crash Error occurs when user opens a new tab","User 256","overdue","low","2023-05-07","2023-04-10","","2022-08-29T14:47:46.769Z","keanu","Tic9"]'
  );
  localStorage.setItem(
    "Tic10",
    '["Project Beta","Conversion Error 3","Converts Units to Imperial not metric","User 98","open","high","0123-03-12","","Zak","2022-08-29T14:32:32.115Z","keanu","Tic10"]'
  );
  localStorage.setItem(
    "Tic11",
    '["Project Beta","Crash Error 5","Crash Error occurs when user opens a new tab","User 256","open","low","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic11"]'
  );
  localStorage.setItem(
    "Tic12",
    '["Project Beta","Crash Error 6","Crash Error occurs when user opens a new tab","User 256","progress","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","zak","Tic12"]'
  );
  localStorage.setItem(
    "Tic13",
    '["Project Beta","Crash Error 7","Crash Error occurs when user opens a new tab","User 256","open","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic13"]'
  );
  localStorage.setItem(
    "Tic14",
    '["Project Beta","Crash Error 8","Crash Error occurs when user opens a new tab","User 256","resolve","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic14"]'
  );
  localStorage.setItem(
    "Tic15",
    '["Project Beta","Crash Error 9","Crash Error occurs when user opens a new tab","User 256","progress","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic15"]'
  );
  localStorage.setItem(
    "Tic16",
    '["Project Agility","Crash Error 10","Crash Error occurs when user opens a new tab","User 256","resolve","low","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","zak","Tic16"]'
  );
  localStorage.setItem(
    "Tic17",
    '["Project Beta","Crash Error 11","Crash Error occurs when user opens a new tab","User 256","progress","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","zak","Tic17"]'
  );
  localStorage.setItem(
    "Tic18",
    '["Project Agility","Crash Error 12","Crash Error occurs when user opens a new tab","User 256","progress","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic18"]'
  );
  localStorage.setItem(
    "Tic19",
    '["Project Beta","Crash Error 13","Crash Error occurs when user opens a new tab","User 256","progress","medium","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","keanu","Tic19"]'
  );
  localStorage.setItem(
    "Tic20",
    '["Project Tales","Crash Error 14","Crash Error occurs when user opens a new tab","User 256","progress","low","2023-05-07","2023-04-10","","2022-08-29T14:48:08.280Z","zak","Tic20"]'
  );
  //adds people
  localStorage.setItem("pro1", "Project Beta");
  localStorage.setItem("pro2", "Project Tales");
  localStorage.setItem("pro3", "Project Agility");
  //Add people

  localStorage.setItem("peo1", '["keanu","ver burgh","asdf","Keanu"]');
  localStorage.setItem("peo2", '["Marcatlady","BOb","asdfsadf","Marcatlady"]');
  localStorage.setItem("peo3", '["zak ","Du Plooy","ZAK","Monal"]');

  location.reload();
  console.log(ticketarr());
}
