//displaying live time
var dateTime = function () {
   var today = moment().format("MMM Do YYYY h:mm:ss");
   $("#currentDay").text(today);
};
setInterval(dateTime, 1000);
var taskBlock = $(".writtenTask");
var saveBtn = $(".saveBtn");
//var hour = $(".hour");
var tableHeader = $("th");
var tableData = $('td');
var timeRow = $("tr");
//var dayHour = hour;
var taskInput = $(".taskInput")

var saveBtn = $(".saveBtn")
var taskInput = $(".taskInput")
var nine = document.getElementById("time-9").getAttribute("data-time");
var ten = document.getElementById("time-10").getAttribute("data-time");
var eleven = document.getElementById("time-11").getAttribute("data-time");
var twelve = document.getElementById("time-12").getAttribute("data-time");
var thirteen = document.getElementById("time-13").getAttribute("data-time");
var fourteen = document.getElementById("time-14").getAttribute("data-time");
var fifteen = document.getElementById("time-15").getAttribute("data-time");
var sixteen = document.getElementById("time-16").getAttribute("data-time");
var seventeen = document.getElementById("time-17").getAttribute("data-time");
var timeData = $("tr[data-time]")
//console.log(timeData);

var workHours = document.querySelectorAll(".timeZone");
//console.log(workHours);
console.log(workHours[0].getAttribute("data-time"));

var scheduleHour = []
var globalTime = moment().format("HH");
console.log(globalTime);
var timeNumber = parseInt(globalTime);
console.log(timeNumber);

function illuminate() {
   timeRow.each(function () {
      var newHour = $(this);
      var hourEl = newHour.children(".hour").text();
      hourEl = parseInt(hourEl);
      if (timeNumber > hourEl) {
         newHour.find("th").addClass("past");
         newHour.find("td").addClass("past");
      }
      if (timeNumber === hourEl) {
         newHour.find("th").addClass("present");
         newHour.find("td").addClass("present");
      }
      if (timeNumber < hourEl) {
         newHour.find("th").addClass("future");
         newHour.find("td").addClass("future");
      }
   })
}
illuminate();

var hourlyTask = {
   taskHour: "hour",
   theTask: "task",
}
// console.log(hourlyTask);

// function renderTasks() {
//    if (task === )
//       var task = localStorage.getItem(hour);
//    console.log(task);
// }
// renderTasks();

// for (let i = 9; i < 18; i++) {
//    console.log(timeData);
//    var numberTime = timeData.split("=")[1]
// }console.log(numberTime);
function saveTask(event) {
   //writeTask.each(function(){
   event.preventDefault();
   var hour = $(event.target).parent().siblings(".hour").text();
   hour = parseInt(hour);
   var task = $(event.target).parent().siblings(".tasks").children(".taskInput").val();
   //var taskArray = JSON.parse(localStorage.getItem("hourlyTask") || "[]");
   var hourlyTask = {
      taskHour: hour,
      theTask: task,
   }
   taskArray.push(hourlyTask),
      localStorage.setItem("taskArray", JSON.stringify(taskArray));

}

saveBtn.on("click", saveTask);

// var hourRow = hourSlot.attr("id").split("-")[1];
// console.log(hourRow);


var writeTask = $("input");
var taskArray = JSON.parse(localStorage.getItem("hourlyTask") || "[]");


function renderTasks() {
   var dataArray = localStorage.getItem("taskArray");
   console.log(dataArray);
   var dataObject = JSON.parse(dataArray);
   var hourSlot = $("tbody");
   console.log(hourSlot.children().attr("id").split("-")[1]);

   for (i = 0; i < dataObject.length; i++) {
      dataObject.sort(function (a, b) { return a.taskHour - b.taskHour });
      var dataHour = dataObject[i].taskHour;
      console.log(dataHour);
      var dataTask = dataObject[i].theTask;
      console.log(dataTask);
      if (dataHour === hourSlot.children().attr("id").split("-")[1]){
         var timeAgain = hourSlot.children("#time-" + dataHour).children(".tasks").children();
         timeAgain.val(dataTask);
         console.log(timeAgain);
         // taskInput.val(dataTask);
      }
      else{
         return;
      }



      // hourRow.val(dataTask);
      // taskInput.val(dataTask);
      // console.log(dataObject);
      // console.log(dataObject);
      // console.log(dataObject[i].theTask);
      // console.log(dataObject[i].taskHour);
   } // var dataArray = localStorage.getItem("taskArray");
   // console.log(dataArray);
   // var dataObject = JSON.parse(dataArray);


}
renderTasks();

// function saveTask(event) {
//    //writeTask.each(function(){
//    event.preventDefault();
//    var hour = $(event.target).parent().siblings(".hour").text();
//    hour = parseInt(hour);
//    var task = $(event.target).parent().siblings(".tasks").children(".taskInput").val();
//    //var taskArray = JSON.parse(localStorage.getItem("hourlyTask") || "[]");
//    var hourlyTask = {
//       taskHour: hour,
//       theTask: task,
//    }
//    taskArray.push(hourlyTask),
//       localStorage.setItem("taskArray", JSON.stringify(taskArray));

// }

// saveBtn.on("click", saveTask);

// // function writeTask() {
// //    if (taskInput.value){
// //    var writtenTask = document.createElement("p");
// //    writtenTask.textContent = taskInput.val;
// //    taskInput.append(writtenTask);
// //    }
// //    else return;
// }
// saveBtn.on("click", writeTask);
// function addTask(event) {
//    event.preventDefault;
//    var hour = $(this).parent.parent.child[0];
//    localStorage.setItem(hour, taskInput.val())
// };
// //


//saveBtn.addEventListener("click", addTask)
