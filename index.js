//Autofill 
var inputLabel=$('#taskLabel');
var inputDuration=$('#taskDuration');
var todayMood;
function autofill(){
    if(inputLabel.val()=='Lecture')
    {
       inputDuration.val("2");
    }
}


function setMood(obj){
    console.log(obj);
    todayMood=obj;
    assign_days();
}

//JQuery 
$(function(){

$(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        var $next = $('[tabIndex=' + (+this.tabIndex + 1) + ']');
        console.log($next.length);
        if (!$next.length) {
       $next = $('[tabIndex=final]');        }
        $next.focus() .click();
    }
   
});


//Register today's mood 
console.log(todayMood);





//Add Task 
    var todoListItem=$('#taskAdd')

    todoListItem.on("click", function(event) {
        event.preventDefault();
        var item = $('#taskName').val();
        var itemLabel=$('#taskLabel').val()
        var itemDuration=$('#taskDuration').val()
        var itemDeadline=$('#taskDeadline').val()
        var itemMood=$('input[name="taskMood"]:checked').val()
        $('.todo-list').append(" <tr><td contenteditable='true'>" + item + "</td><td contenteditable='true'>"+ itemLabel+"</td><td contenteditable='true'>"+ itemDuration+"</td><td contenteditable='true'>" 
        +itemDeadline+"</td><td contenteditable='true'>" +itemMood+'</td></tr>');
    });


//Get Today's date 
var today=new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var date = weekday[today.getDay()]+'-'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(date)

var today_day=weekday[today.getDay()];
$('.'+today_day).css("background-color","pink");

//CLOCk
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    /*if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }*/
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// ASSIGN TASKS TO DAY
function assign_days(){
    if(todayMood=="TodayFlemme"){
        console.log('flemmeday')
    }
    else{
        console.log('not')
    }
}


   /* todoListItem.on('change', '.checkbox', function() {
        if ($(this).attr('checked')) {
        $(this).removeAttr('checked');
        } else {
        $(this).attr('checked', 'checked');
        }
        
        $(this).closest("li").toggleClass('completed');
        
        });

    todoListItem.on('click', '.remove', function() {
        $(this).parent().remove();
    });
*/


});