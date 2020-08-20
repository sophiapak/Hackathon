/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable prefer-arrow-callback */

/************** ESLINT DISABLES LISTED ABOVE************/

// declare variable previousPic
// declare variable currentPic
let previousPic;
let currentPic;

// adding an event listener to the document with ('DOMReady...', function definition for API GET)
document.addEventListener( 'DOMContentLoaded', function() {
// request a fetch GET Request passing in our dogPics API URL
  fetch('https://dog.ceo/api/breeds/image/random')
  // we want to invoke our then method that will parse our object response from the server
    .then(response => response.json())
  // we will then pass in our parsed object into another then method that will select our #image and update the source attribute with image url from our parsed object
    .then(dogPics => {
      document.getElementById('image').src = dogPics.message;
      // reassign currentPic with the new image from dogPics from GET request
      currentPic = dogPics.message;
      // reassign our previousPic to any picture (I just put my doggos as a place holder)
      previousPic = 'furbabies.png'    })
});

// add event listener for hover --> as long as cursor is hovering over dogpics, we want to continuously put in a fetch get request
document.addEventListener("click", function() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dogPics => {
      document.getElementById('image').src = dogPics.message;
      // reassign our previousPic with our currentPic value
      previousPic = currentPic;
      // reassign our currentPic with our new dogPic from our GET request
      currentPic = dogPics.message;
    })
});

// add event listener to respond when left and right arrow keys are pressed to toggle between our cached previous and current dog pics
document.addEventListener('keydown', function(e) {
  // if the left arrow key is pressed
  if (e.keyCode === 37) {
    // we will update our img src link to our previousPic
    document.getElementById('image').src = previousPic;
    // if the right arrow key is pressed
  } else if (e.keyCode === 39) {
    // we will update our img src link to our currentPic
    document.getElementById('image').src = currentPic;
  }
})