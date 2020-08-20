// adding an event listener to the document with ('DOMReady...', function definition for API GET)
document.addEventListener( 'DOMContentLoaded', function() {
// declare a fetch with the API URL passed in as a parameter
fetch('https://dog.ceo/api/breeds/image/random')
// inside the fetch, we are going to call the then method and set that equal to the variable response
// we will call another then method on the ER of response
.then(response => response.json())
// parse the ER of response using the json method
// set the ER of parsing the json method, we need to connect our returned object to the DOM 
// the next then method connects our json parsed object to the dom
.then(dogPics => {
	document.getElementById('image').src = dogPics.message;
})
})

// add event listener for hover --> as long as cursor is hovering over dogpics, we want to continuously put in a fetch get request
document.addEventListener("click", function() {
	fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(dogPics => {
		document.getElementById('image').src = dogPics.message;
	})
})


