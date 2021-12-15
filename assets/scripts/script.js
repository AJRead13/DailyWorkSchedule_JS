var dateTime = function() {
   var today = moment().format("MMM Do YYYY h:mm:ss");
$("#currentDay").text(today);
};
setInterval(dateTime, 1000);
