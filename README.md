# Personal Algorithm Workshop 
In this workshop you'll be creating a basic form using the HTML we learned in class. You'll then be combining this with the javascript and jQuery we've learned to create an output page that processes the inputs.


## Setting up basic form and capturing parameters 

  1.  In the `index.html` file create a form that submits to `output.html` via the GET method. Place the form inside the div with a class of center (`.center`).
  2.  Add a radio button that asks if the user likes nature.
  3.  Add three text fields that ask for numbers between 0 & 250
  4.  Add a final text field that asks how happy the user is between 0-100.
  6.  Add a textarea that asks for the users name.
  7.  Add a submit button

  ### Note: be sure to name all your inputs

  8.  Click the button to see that your inputs are getting passed in the url. They should come after a `?`.
  9.  Assign all the inputs to their own variables. I give you a function for doing this called `getParameterByName()`.
  10. Log the variables to the console to check that they are getting assigned.
  11. Check if the user likes nature. If they do play them nature sounds using the function called `playAudio()`.
  12. Next check to see if the user submitted three colors that are between 0 and 255.
  13. Use the three numbers to set the background color of the body. Note that you can set colors via their rgb values... `rgb(xx,xx,xx)`.
  14. Else add a gradient to the body by adding the gradient class (.gradient).
  15. If they entered a name, Change the name from Jane to what the user entered. The text is in a div with a class of 'message'.
  16. Finally make a variable with this html: `<img src='img/baby.gif'>`.
      Append it to the div with a class of image based on how happy they are.
      For example if they typed `5`, add it five times.
