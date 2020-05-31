/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  const hhmm = parseInt(time);
  
  if (hhmm < 12) {
    return ('Good Morning')
  }else if (hhmm >= 12 && hhmm < 17) {
    return ('Good Afternoon')
  } else {
    return ('Good Evening')
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}