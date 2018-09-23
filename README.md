# Friend-Finder
This project allows user to take a brief survey to find a new friend!  Users will enter their name, a photo and answer questions about their personality that will then be compared to information stored in the server and the closest match will be displayed.  Users may take the survey as many times as they like - each result will be saved.  

## Getting Started
To obtain a copy of this app, please visit https://friend-finder-02.herokuapp.com/ 

## Prerequisites
If the user clicks on the link above, the only prerequisite is their internet browser.  If the user clicks the "Github" link at the bottom of the webpage to view/run the code for this project, the package.json is included will need to be installed:
`npm install`

### These packages are required run the code locally:
### express
`npm install express`
### body-parser
`npm install body-parser`

## Running the tests
As the code is run, console logs have been set up to ensure that the results are what was expected.

## Issues Encountered
While working on this project, there were some issues with formatting the modal - the top portion of the modal window is cut off.  Through some research, this seems to be an issue others who have used the Bootstrap modal have come across.  To ensure that all information is displayed to the user, css was used to change the size of the modal window and all information was put into the <body> (the <header> is cut off).  Due to time constraints, the design of the app is basic Bootstrap.  Later updates to this app will include more styling.

## Built With
* Node.js - language used to build the app
* Express - javascript used to create the server for this app
* Body-Parser - used with Express to help create the server
* Bootstrap - basic styling for the html pages

## Authors
Valerie Flores - Initial work

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
Thank you to UCI Coding Bootcamp classmates for your help and suggestions, and the many examples of other coders online.