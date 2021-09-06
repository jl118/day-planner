// set moment as a variable
var time = moment();

// setPlanner function
function setPlanner() {

    $("#current-date").text(moment().format("dddd, MMMM Do YYYY hh:mm a"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        console.log(id);
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
};

// calls setPlanner function
setPlanner();

// saveBtn variable 
var saveBtn = $(".saveBtn");

// allows new schedule info to be saved to local storage
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});


