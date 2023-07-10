# KISKA Coding Assignment

## Installation steps
- Navigate into the "/CodingTask" assignment folder we provide using your terminal/cmd
- Type `npm install` to Install npm packages
- Type `npm run start` to start the project
- If above steps work, you should be able to visit port `9500` http://localhost:9500 and start coding! 

## How it works
- Open / Close panel: **Escape** button
- Navigation: **Up / Down** arrow
- Select option: **Enter** button

## How to disable / add options
The object related to the displayed options can be found in the bottomPanel.js component with the name of **rooms**.
It is a local state object, but should be changed to a serverside prop in a live-application.
**NOTE:** The react version was updated from 17 to 18 due to dependency issues with the libraries I used during this project, there should be no warning displayed on the console.
