//Displays today's date at the top of the page
$("#currentDay").text(moment().format("[Today is ]dddd, MMMM Do, YYYY"));

const saveButton = $(".save-box");
const userInput = $(".input");
const container = $(".container");

let calendarHours = {
  "9:00 AM": "",
  "10:00 AM": "",
  "11:00 AM": "",
  "12:00 PM": "",
  "1:00 PM": "",
  "2:00 PM": "",
  "3:00 PM": "",
  "4:00 PM": "",
  "5:00 PM": "",
}

//Creates rows, hours, and retrieves any saved tasks
function displayHours() {
  retrieveHours()
  //Generates all necessary HTML
  for (let hour in calendarHours) {
    let row = $("<div class='row'>")

    let timeBox = $("<div class='col-2 col-sm-2 col-md-2 time-box'>");
    let timeStamp = $("<p class='time-stamp'>" + hour + "</p>");
  
    row.append(timeBox.append(timeStamp));
  
    let mainBox = $("<div class='col-8 col-sm-8 col-md-9 main-row'>");
    let input = $("<textarea class='input' placeholder='Input task here'>" + calendarHours[hour] + "</textarea>");
  
    row.append(mainBox.append(input));
  
  
    let saveBox = $("<div class='col-2 col-sm-2 col-md-1 save-box'>");
    let saveImg = $("<img class='save-icon' src='./assets/images/save-icon.png'>");
  
    row.append(saveBox.append(saveImg));
  
    container.append(row);
  }
  
  //Next section assigns each row a value that corresponds with their time
  //This will be used to color code depending on hour
  const containerLength = document.querySelector(".container").children.length;
  console.log(containerLength);

  let currentHour = 11;
  console.log("It is currently " + currentHour);
  console.log(typeof currentHour);
  console.log(currentHour);

  let mRow = $(".main-row");
  let tBox = $(".time-box");
  let times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  //Gives each row and time box a time value
  for (i = 0; i < containerLength; i++) {
    $(tBox[i]).attr("data-hour", times[i]);
  }

  //Assigns each block a color depending on the time
  for (i = 0; i < containerLength; i++) {
    let tBoxData = parseInt($(tBox[i]).attr("data-hour"));
    console.log(tBoxData);
    
    if (tBoxData === currentHour) {
      console.log("Present time")
      $(tBox[i]).css("background-color", "#ff6961");
      $(mRow[i]).css("background-color", "#ff6961");

    } else if (tBoxData > currentHour) {
      console.log("This is the future");
      $(tBox[i]).css("background-color", "#77dd77");
      $(mRow[i]).css("background-color", "#77dd77");

    } else {
      console.log("this is the past")
      $(tBox[i]).css("background-color", "#d3d3d3");
      $(mRow[i]).css("background-color", "#d3d3d3");
    }
  }

  saveFunction()
}

//Adds click to save div and image. Takes user text and corresponding time
function saveFunction() {
  ($(".save-box").get().forEach(element => {
    $(element).on("click", function() {
      //If user clicks specifically on the save icon
      if (element.classList.contains("save-icon")) {
        let userText = element.parentElement.parentElement.querySelector("textarea").value;

        let time = element.parentElement.parentElement.querySelector("p").innerHTML;
        
        return saveData(userText, time);
      // If user clicks anywhere in the div
      } else {
        let userText = element.parentElement.querySelector("textarea").value;
        console.log(userText);

        let time = element.parentElement.querySelector("p").innerHTML;
        console.log(time);

        return saveData(userText, time);
      }
    })
  }))
}

displayHours()

//Retrieves any previously written tasks from localStorage and reassigns them 
//to the object "calendarHours"
function retrieveHours() {
  if (localStorage.length === 0) {
    return
  } else {
    let pulledHours = JSON.parse(localStorage.getItem("calendarHours"));
    calendarHours = pulledHours
  }
}


//Takes user's text along with the corresponding hour block and saves it into localStorage
function saveData(userText, time) {
  for (let hour in calendarHours) {
    if (hour === time) {
      calendarHours[time] = userText;
    }
  }
  localStorage.setItem("calendarHours", JSON.stringify(calendarHours))
}

//Reset button that clears all the text on page and from localStorage
const clearButton = $("<button id='clear-button'>Clear calendar</button>");
const clearDiv = $("<div id='clear-container'>");

container.append(clearDiv);
clearDiv.append(clearButton);

clearButton.on("click", resetEverything)

function resetEverything() {
  localStorage.clear();
  $("textarea").text("");
}