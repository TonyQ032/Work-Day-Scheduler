//Displays today's date at the top of the page
$("#currentDay").text(moment().format("[Today is ]dddd, MMMM Do, YYYY"));

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

//TO-DO: Store user text in each box into local storage
const saveButton = $(".save-box");
const userInput = $(".input");
let savedInputs = [];

function displayHours() {
  //Generates all necessary HTML
  for (let hour in calendarHours) {
    let row = $("<div class='row'>")

    let timeBox = $("<div class='col-2 col-sm-2 col-md-2 time-box'>");
    let timeStamp = $("<p class='time-stamp'>" + hour + "</p>");
  
    row.append(timeBox.append(timeStamp));
  
    let mainBox = $("<div class='col-8 col-sm-9 col-md-9 main-row'>");
    let input = $("<textarea class='input' placeholder='Input task here'>");
  
    row.append(mainBox.append(input));
  
  
    let saveBox = $("<div class='col-2 col-sm-1 col-md-1 save-box'>");
    let saveImg = $("<img class='save-icon' src='./assets/images/save-icon.png'>");
  
    row.append(saveBox.append(saveImg));
  
    container.append(row);

  }

  saveFunction()
  //let momentHour = moment().format("H");
  //color(momentHour);
}

function saveFunction() {
  ($(".save-box").get().forEach(element => {
    $(element).on("click", function() {
      if (element.classList.contains("save-icon")) {
        let userText = element.parentElement.parentElement.querySelector("textarea").value;
        console.log(userText);

        let time = element.parentElement.parentElement.querySelector("p").innerHTML;
        console.log(time);
        
        return userText, time;

      } else {
        let userText = element.parentElement.querySelector("textarea").value;
        console.log(userText);

        let time = element.parentElement.querySelector("p").innerHTML;
        console.log(time);

        return userText, time;
      }
      
    })
  }))
}

displayHours()

function retrieveHours() {
  if (localStorage.length === 0) {
    return
  } else {
    calendarHours = JSON.parse(localStorage.getItem("calendarHours"));
  }
}

retrieveHours();


//Function that determines color of time blocks
function color() {

}

function saveData(time, userText) {
  for (let hour in calendarHours) {
    if (hour === time) {
      calendarHours[time] = userText;
    }
  }
  localStorage.setItem("calendarHours", JSON.stringify(calendarHours))
}

//TO-DO: Create a conditional statement that makes all the times before the current hour
//red, the current hour green, and the rest of the day white

  //TO-DO: Write the value of inputValue into localStorage (should also delete and replace
  //the previous value of itself if applicable)
    //This will probably end up being placed in the conditional statement above ^
