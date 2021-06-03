/* Each of these pieces of codes sets up a command that listens/waits for a click on the specified button that then activates the specifc function. */
document.getElementById('text-button').addEventListener('click', changewords)
/* The function named 'changewords' will change the innerHTML text that has the id 'head-text' to a different text once the button is clicked */
function changewords () {
  document.getElementById('head-text').innerHTML = 'The GOAT'
}

document.getElementById('picture-button').addEventListener('click', changeimage)
/* The function named 'changeimage' will change the source that the image with the id 'main-image' is pointed at to so that it displays a different image once the button is clicked */
function changeimage () {
  document.getElementById('main-image').src = 'Baby.jpg'
}

document.getElementById('background-button').addEventListener('click', changebackground)
/* The function named 'changebackground' reads into the CSS style of the body and changes the background colour to light green once the button is clicked */
function changebackground () {
  document.body.style.backgroundColor = 'lightgreen'
}

document.getElementById('text-hide').addEventListener('click', hidetext)
/* The function named 'hidetext' reads into the CSS style of the text with the id 'head-text' and changes the display to 'none' once the button is clicked */
function hidetext () {
  document.getElementById('head-text').style.display = 'none'
}

document.getElementById('text-show').addEventListener('click', showtext)
/* The function named 'showtext' reads into the CSS style of the text with the id 'head-text' and changes the display from "none" to 'block' once the button is clicked */
function showtext () {
  document.getElementById('head-text').style.display = 'block'
}
