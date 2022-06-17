const container = $(".container");
let calendarHours = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

//Loop generates the various calendar rows for every hour in calendarHours
for (i=0; i < calendarHours.length; i++) {
  let row = $("<div class='row'>")

  let timeBox = $("<div class='col-2 col-sm-2 col-md-2 time-box'>");
  let timeStamp = $("<p class='time-stamp'>" + calendarHours[i] + "</p>");

  row.append(timeBox.append(timeStamp));

  let mainBox = $("<div class='col-8 col-sm-9 col-md-9 main-row'>");
  let input = $("<textarea class='input' placeholder='Input task here'>");

  row.append(mainBox.append(input));


  let saveBox = $("<div class='col-2 col-sm-1 col-md-1 save-box'>");
  let saveImg = $("<img class='save-icon' src='./assets/images/save-icon.png'>");

  row.append(saveBox.append(saveImg));

  container.append(row);
}

//Displays today's date at the top of the page
$("#currentDay").text(moment().format("[Today is ]dddd, MMMM Do, YYYY"));

//TO-DO: Create a conditional statement that makes all the times before the current hour
//red, the current hour green, and the rest of the day white




//TO-DO: Store user text in each box into local storage
const saveButton = $(".save-box");
const userInput = $(".input");
let savedInputs = [];

function saveText(event) {
  event.target.style.backgroundColor = 'red';
  //Gets the value of each individual text area from its corresponding row
  //Runs different command depending on if the <div> or the <img> was clicked, same results
  if (event.target.classList.contains("save-icon")) {
    let inputValue = event.target.parentElement.parentElement.querySelector("textarea").value;
    console.log(inputValue);
  } else {
    let inputValue = event.target.parentElement.querySelector("textarea").value;
    console.log(inputValue);
  }

  //TO-DO: Write the value of inputValue into localStorage (should also delete and replace
  //the previous value of itself if applicable)
    //This will probably end up being placed in the conditional statement above ^
}

saveButton.on("click", saveText);