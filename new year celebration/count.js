
// this countdown is from w3schools and i changed i little of it 


    // Set the date we're counting down to
var countDownDate = new Date("dec 01, 2020 00:00:00").getTime();
var body = document.querySelector('body')
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="counter"
  counter = document.getElementById("counter")
  counter.innerHTML =  hours + "h "+ minutes + "m " + seconds + "s ";
  
    
  // if 2020 make the fire work ♥ 
  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "Happy new year";
    body.className = "fire"

  }
}, 1000);
