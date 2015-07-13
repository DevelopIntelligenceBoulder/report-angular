# report-angular
An example of how to write a simple reporting tool in Angular.

## Lost?
Start with a look at an [Angular Hello World](https://github.com/DevelopIntelligenceBoulder/hello-angular-1). 

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Angular, Angular Mocks and Express)
    * The Node/Express Web Server will start
4. Go to `http://localhost:8080/src` in your web browser

## Where is the data coming from?
This reporting tool is using the AngularJS mocking library for End-to-End mocking.  back-end data via [angular-mocks](https://docs.angularjs.org/api/ngMockE2E). It allows us to intercept Angular Ajax calls going to the backend. Look at `src/mock/mock-items.js` to see the mock data.