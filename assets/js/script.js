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