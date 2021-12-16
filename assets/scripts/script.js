//displaying live time
var dateTime = function () {
   var today = moment().format("MMM Do YYYY h:mm:ss");
   $("#currentDay").text(today);
};
setInterval(dateTime, 1000);
var taskBlock = $(".writtenTask")
var saveBtn = $(".saveBtn")
var hour = $(".hour");
var dayHour = hour;
var taskInput = $(".taskInput")
var hourlyTask = {
taskHour: hour.text,
theTask: taskInput.value,
}
console.log(dayHour);

var saveBtn = $(".saveBtn")
var taskInput =$(".taskInput")

function writeTask() {
   var writtenTask = taskInput.value;
   taskBlock.append(writtenTask);
}

saveBtn.on("click", writeTask);
// function addTask(event) {
//    event.preventDefault;
//    var hour = $(this).parent.parent.child[0];
//    localStorage.setItem(hour, taskInput.val())
// };
// //


//saveBtn.addEventListener("click", addTask)


// varparentcontainertr=this.captureEvents.captureEventsvarhour=parentcontainertr.attrid.splimport {  } from "varinputcontrol - parentcontainertr.findinput
// varvalue-inputcontrol.varvalueclocalroage.setitemhourvalue";
//Saving the task in the localstorage and displaying it
// saveBtn.on("click", function () {
//    var timeSlot = $(this).parent().parent()
//    var hour = timeSlot.attr("id").split("-")[1]
//    var userInput = timeSlot.find("input")
//    var value = userInput.val()
//    localStorage.setItem(hour, value)
// })
// for (var index = 9; index < 18; index++) {
//    var parentContainerTr = $("#hour-" + index)
//    var userInput = parentContainerTr.find("input")
//    var value = localStorage.getItem(index)
//    userInput.val(value)
// }
//highlighting hours past/present/future
//set time format to military time

// function illuminate()   {
//    var currentHour = moment()
//    $(".time").each(function(){
//       var taskRow = $(this)
//       var tableHeader = taskRow.find('th')
//       var tableData = taskRow.attr("id").split("-")[1]
//       if (hour < currentHour) {
//          tableHeader.addClass("past")
//          tableData.addClass("past")
//       }
//       else if (hour === currentHour)

//    })
// }

function illuminate() {
   
}

// function illuminate() {
//    var currentHour = moment()
//    $(".time").each(function() {
//       var trContainer = $(this)
//       var th = trContainer.find("th")
//       var td = trContainer.attr("id").split("-")[1]
//       if (hour < currentHour) {
//          th.addClass("past")
//          td.addClass('past')
//       }
//       else if (hour === currentHour) {
//          th.addClass("present")
//          td.addClass("present")
//       }
//       else if (hour > currentHour) {
//          th.addClass("future")
//          td.addClass("future")
//       }
//    })
// }


// var currentHour = moment();
// $(".btn".on*"click"", fucntion*(){
//    var parentcontairtr =$)this).parent().
// })

// .time.eachfunction vartrcontainer-this
// varth-trcontainer.findth
// vartd-trcontainer.findtd
// varhour-trcontainer.attrid.split-1
// ifhour<currenthour
// th.addclass-past
// th.addclass-past
// elseifhour==currenthour
// th.addclasspresent
// td.addclassprestn
// elseth.addclassfuture
// tdaddclassfuture
// }