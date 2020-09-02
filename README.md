# react-bootstrap5-template
this is a template for a React App that uses Bootstrap 5 Alpha(SASS)

Below is the step by step process how I setup this template.

1) create a new react app using create-react-app. I run the following command: "npx create-react-app react-bootstrap5-template"
2) I install bootstrap alpha using the following command: npm install bootstrap@next
3) I install node-sass so that I can use the bootstrap's sass for customization. I run this command: npm install node-sass
4) Include cdn of bootstrap.min.js and popper.min.js(bootstrap dependency) in public/index.html. Kindly check the index.html for reference.
5) Cleanup index.js and App.js, I removed all unnecessary elements(service worker, index.css, logo.svg, etc...)
6) create scss folder then main.scss inside the folder.
7) I import the bootstrap.scss in the main.scss, and added sample customization, e.g. .custom-element and changed $body-bg value to #00aef0(skyblue...ish), just check the main.scss file.
8) In App.js, I imported the scss/main.scss
9) Added sample bootstrap components in App.js
10) npm start...boom!
