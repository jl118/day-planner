// set moment as a variable
var time = moment();

// setPlanner function
function setPlanner() {
    // sets current date format at top of the page beneath title
    $("#current-date").text(moment().format("dddd, MMMM Do YYYY h:mm a"));
    // creates time slots for each hour with an id
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        };
    });
};

// calls function
setPlanner();

// saveBtn variable 
var saveBtn = $(".saveBtn");

// function allows new schedule info to be saved to local storage on click
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();
    
    localStorage.setItem(time, schedule);
});

// function to update schedule colors based on real time
function pastPresentFuture() {
    // creating auto-updating hour variable
    hour = time.hours();
    // time block function
    $(".time-block").each(function () {
        // parses localStorage info 
        var thisHour = parseInt($(this).attr("id"));

        // adds classes based on moment information
        if (thisHour > hour) {
            $(this).addClass("future");
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    });
};

// calls function
pastPresentFuture();

// clears the local storage and wipes the schedule
$('#clear-btn').on('click', function() {
    var clear = confirm('Are you sure you want to clear your schedule?');
    if(clear === true) {
        window.localStorage.clear();
        $('textarea').val('');
    };
});
