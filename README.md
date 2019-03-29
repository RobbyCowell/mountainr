## Mountainr

A React app that takes a .csv of Snow resort details, and displays the information.

See the appendix for the file to upload.

## What is Mountainr?

Mountainr is a web application that accepts a [.CSV file](https://github.com/RobbyCowell/mountainr/blob/master/appendix/resorts.csv) containing details about a number of different snow sport resorts.

You can view, search, add, edit the resorts within the app.

## Installation and running locally

To install the app, clone this repository and run `npm start` in the root directory.

## Code design

This approach is purposefully over-engineered to demonstrate how the data would flow in a larger application; it has been built as a display of ability. An application built to adhere strictly to the specification in a business context would be a more elegant solution - something I am happy to talk more about.

The `initializeData()` action accepts a JSON or JS object, and so can easily be provided with a JSON server response rather than a CSV file.

The `handleUpload()` function in the Welcome.js component maps each column to the names defined in headersConfig.js, this allows name variations in the CSV headers to be handled, as long as the data in the first column is the name of the resort, the second the URL of the website, etc. then the parsing will succeed.

----
App built with Create React App - docs here: [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
