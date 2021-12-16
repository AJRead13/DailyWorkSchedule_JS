var dateTime = function () {
   var today = moment().format("MMM Do YYYY h:mm:ss");
   $("#currentDay").text(today);
};
setInterval(dateTime, 1000);

var saveBtn = $(".saveBtn")

function addTask(event) {
   event.preventDefault;

}

// saveBtn.addEventlistener("sumbit", addTask)

// varparentcontainertr=this.captureEvents.captureEventsvarhour=parentcontainertr.attrid.splimport {  } from "varinputcontrol - parentcontainertr.findinput
// varvalue-inputcontrol.varvalueclocalroage.setitemhourvalue";

saveBtn.on("click", function () {
   var parentContainerTr = $(this).parent().parent()
   var hour = parentContainerTr.attr("id").split("-")[1]
   var userInput = parentContainerTr.find("input")
   var value = userInput.val()
   localStorage.setItem(hour, value)
})

for (var index = 9; index < 18; index++) {
   var parentContainerTr = $("#hour-" + index)
   var userInput = parentContainerTr.find("input")
   var value = localStorage.getItem(index)
   userInput.val(value)
}

function illuminate() {
   var currentHour = moment()
   $(".time").each(function() {
      var trContainer = $(this)
      var th = trContainer.find("th")
      var td = trContainer.attr("id").split("-")[1]
      if (hour < currentHour) {
         th.addClass("past")
         td.addClass('past')
      }
      else if (hour === currentHour) {
         th.addClass("present")
         td.addClass("present")
      }
      else if (hour > currentHour) {
         th.addClass("future")
         td.addClass("future")
      }
   })
}


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