//displaying live time
var dateTime = function () {
   var today = moment().format("MMM Do YYYY h:mm:ss");
   $("#currentDay").text(today);
};
setInterval(dateTime, 1000);
var taskBlock = $(".writtenTask");
var saveBtn = $(".saveBtn");
var hour = $(".hour");
var tableHeader = $("th");
var tableData = $('td');
//var dayHour = hour;
var taskInput = $(".taskInput")
var hourlyTask = {
taskHour: hour.text,
theTask: taskInput.value,
}
//console.log(dayHour);
var saveBtn = $(".saveBtn")
var taskInput =$(".taskInput")
var nine = document.getElementById("time-9").getAttribute("data-time");
var ten = document.getElementById("time-10").getAttribute("data-time");
var eleven = document.getElementById("time-11").getAttribute("data-time");
var twelve = document.getElementById("time-12").getAttribute("data-time");
var thirteen = document.getElementById("time-13").getAttribute("data-time");
var fourteen = document.getElementById("time-14").getAttribute("data-time");
var fifteen = document.getElementById("time-15").getAttribute("data-time");
var sixteen = document.getElementById("time-16").getAttribute("data-time");
var seventeen = document.getElementById("time-17").getAttribute("data-time");

var workHours = document.querySelectorAll(".timeZone");
//console.log(workHours);
console.log(workHours[0].getAttribute("data-time"));

var scheduleHour = []
console.log(scheduleHour);
var globalTime = moment().format("HH");
console.log(globalTime);
var timeNumber = parseInt(globalTime);
console.log(timeNumber);

function illuminate() {
   for(i = 9; i < 18; i++){
   var newHour = parseInt(i);
   scheduleHour.push(i);
   console.log(scheduleHour);
   if (newHour < timeNumber){
      tableHeader.addClass("past");
      tableData.addClass("past");
   }
   else if (newHour === timeNumber){
      tableHeader.addClass("present");
      tableData.addClass("present");
   }
   else if (newHour > timeNumber){
      tableHeader.addClass("future");
      tableData.addClass("future");
   }
}
}
illuminate();

var hourlyTask = {
   taskHour: hour.text,
   theTask: taskInput.value,
   }
console.log(hourlyTask);

function renderTasks() {
   var task = localStorage.getItem(theTask);
   var taskTime = localStorage.getItem(taskHour);
   if (!task || !taskTime) {
      return;
   }
}
function saveTask(event) {
   event.preventDefault;
   var hour = $(this).parent.parent.child[0].val()
   
}   
// console.log(taskInput.val);

// function writeTask() {
//    if (taskInput.value){
//    var writtenTask = document.createElement("p");
//    writtenTask.textContent = taskInput.val;
//    taskInput.append(writtenTask);  
//    }
//    else return;   
// }
// saveBtn.on("click", writeTask);
// function addTask(event) {
//    event.preventDefault;
//    var hour = $(this).parent.parent.child[0];
//    localStorage.setItem(hour, taskInput.val())
// };
// //


//saveBtn.addEventListener("click", addTask)
