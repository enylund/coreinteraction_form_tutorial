/*

  FORMS WORKSHOP

  1. In the index.html file create a form that submits to output.html via
     the GET method.
  2. Add a radio button that asks if the user is gradient.
  3. Add three text fields that as for numbers between 0 & 250
  4. Add a textarea that asks for a message from the user
  5. Add a submit button

  Note: be sure to name all your inputs

  5. Click the button to see that your inputs are getting passed in the url. Are they?
  6. Assign all the inputs to their own variables (I give you a function for doing this & a hint)
  7. Use console.log(variableName) to check that they are getting assigned.
  8. If the user checked 'gradient' show the div with a class of gradient (.gradient).
  9. Append their message to the div with a class of message (.message)
  10. Use the three numbers to set the background color of the body using .css and rgb(xx,xx,xx)



*/


$(document).ready(function(){


	// Your code goes here.
  // Here is an example of how to assign inputs to variables
  var gradient = getParameterByName('gradient');
  var valueOne = getParameterByName('value-one');
  var valueTwo = getParameterByName('value-two');
  var valueThree = getParameterByName('value-three');
  var textarea = getParameterByName('textarea');

  if(gradient == 'on') {
    $(".image").show();
  }

  $("body").css('background-color', "rgb("+valueOne+", "+valueTwo+", "+valueThree+")");

  $()





});



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}