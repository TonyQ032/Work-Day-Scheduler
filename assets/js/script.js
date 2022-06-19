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

retrieveHours();

//Takes user's text along with the corresponding hour block and saves it into localStorage
function saveData(userText, time) {
  for (let hour in calendarHours) {
    if (hour === time) {
      calendarHours[time] = userText;
    }
  }
  localStorage.setItem("calendarHours", JSON.stringify(calendarHours))
}

//Creates rows, hours, and retrieves any saved tasks
function displayHours() {
  //Generates all necessary HTML
  for (let hour in calendarHours) {
    let row = $("<div class='row'>")

    let timeBox = $("<div class='col-2 col-sm-2 col-md-2 time-box'>");
    let timeStamp = $("<p class='time-stamp'>" + hour + "</p>");
  
    row.append(timeBox.append(timeStamp));
  
    let mainBox = $("<div class='col-8 col-sm-9 col-md-9 main-row'>");
    let input = $("<textarea class='input' placeholder='Input task here'>" + calendarHours[hour] + "</textarea>");
  
    row.append(mainBox.append(input));
  
  
    let saveBox = $("<div class='col-2 col-sm-1 col-md-1 save-box'>");
    let saveImg = $("<img class='save-icon' src='./assets/images/save-icon.png'>");
  
    row.append(saveBox.append(saveImg));
  
    container.append(row);

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

//Function that determines color of time blocks
function color() {

}
