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


