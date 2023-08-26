$(function () {
    
    // adds a click listener to the save button that runs a function to save and store whatever text is inputed within the block you are currently in with local storage and save that value with a key ID which will be the hour-x of
    // the block you are currently editing.
    // when you add any text within a block the webpage will display an alert saying the text was saved. If there is no text present it will display that nothing has been set.
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      const selectedId = this.parentNode.id;
      const timeblock = event.target.closest('.time-block');
      const newEvent = timeblock.querySelector('.description').value;
      localStorage.setItem(selectedId, newEvent);
      if (newEvent === "") {
        alert("No Appointment")
      } else {alert("Appointment added to local storage ✅" ); 
    }

    });
    
    // grabs the current hour of the day using a 0-24 scale and assigns it to a variable.
    var currentHour = dayjs().get('hour')
    
    // creates a variable for each of the time-block hour id's and assigns them a value of the corresponding integer (ex. hour9 = 9) to be used in arithmetic.
    // uses conditonal statements to see if the value of the hour is less than, equal to or greater than the current hour of the day and assigns different class names to change the background of the targeted container.
    var hour9 = 9
    if (hour9 < currentHour) {
      $("#hour-9").addClass("past")
    } else if (hour9 === currentHour) {
      $("#hour-9").addClass("present")
    } else {
      $("#hour-9").addClass("future")
    }

    var hour10 = 10
    if (hour10 < currentHour) {
      $("#hour-10").addClass("past")
    } else if (hour10 === currentHour) {
      $("#hour-10").addClass("present")
    } else {
      $("#hour-10").addClass("future")
    }

    var hour11 = 11
    if (hour11 < currentHour) {
      $("#hour-11").addClass("past")
    } else if (hour11 === currentHour) {
      $("#hour-11").addClass("present")
    } else {
      $("#hour-11").addClass("future")
    }

    var hour12 = 12
    if (hour12 < currentHour) {
      $("#hour-12").addClass("past")
    } else if (hour12 === currentHour) {
      $("#hour-12").addClass("present")
    } else {
      $("#hour-12").addClass("future")
    }

    var hour1 = 13
    if (hour1 < currentHour) {
      $("#hour-1").addClass("past")
    } else if (hour1 === currentHour) {
      $("#hour-1").addClass("present")
    } else {
      $("#hour-1").addClass("future")
    }

    var hour2 = 14
    if (hour2 < currentHour) {
      $("#hour-2").addClass("past")
    } else if (hour2 === currentHour) {
      $("#hour-2").addClass("present")
    } else {
      $("#hour-2").addClass("future")
    }

    var hour3 = 15
    if (hour3 < currentHour) {
      $("#hour-3").addClass("past")
    } else if (hour3 === currentHour) {
      $("#hour-3").addClass("present")
    } else {
      $("#hour-3").addClass("future")
    }

    var hour4 = 16
    if (hour4 < currentHour) {
      $("#hour-4").addClass("past")
    } else if (hour4 === currentHour) {
      $("#hour-4").addClass("present")
    } else {
      $("#hour-4").addClass("future")
    }

    var hour5 = 17
    if (hour5 < currentHour) {
      $("#hour-5").addClass("past")
    } else if (hour5 === currentHour) {
      $("#hour-5").addClass("present")
    } else {
      $("#hour-5").addClass("future")
    }

    // creates a variable for the textarea within the assigned hour, and will display each of the them with a localstorage value with the corresponding hour-x key if one is present.
    const hour9txt = document.querySelector('#hour-9 > textarea')
    hour9txt.innerHTML = localStorage.getItem('hour-9')

    const hour10txt = document.querySelector('#hour-10 > textarea')
    hour10txt.innerHTML = localStorage.getItem('hour-10')

    const hour11txt = document.querySelector('#hour-11 > textarea')
    hour11txt.innerHTML = localStorage.getItem('hour-11')

    const hour12txt = document.querySelector('#hour-12 > textarea')
    hour12txt.innerHTML = localStorage.getItem('hour-12')

    const hour1txt = document.querySelector('#hour-1 > textarea')
    hour1txt.innerHTML = localStorage.getItem('hour-1')

    const hour2txt = document.querySelector('#hour-2 > textarea')
    hour2txt.innerHTML = localStorage.getItem('hour-2')

    const hour3txt = document.querySelector('#hour-3 > textarea')
    hour3txt.innerHTML = localStorage.getItem('hour-3')

    const hour4txt = document.querySelector('#hour-4 > textarea')
    hour4txt.innerHTML = localStorage.getItem('hour-4')

    const hour5txt = document.querySelector('#hour-5 > textarea')
    hour5txt.innerHTML = localStorage.getItem('hour-5')
    

  // displays the current date formatted as (Day of the Week, Month Day) in the header.
  var current = dayjs();
  $("#currentDay").append(current.format("dddd, MMMM D"))

  });

  