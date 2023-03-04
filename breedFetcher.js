let args = process.argv.slice(2);
let queryURL = "https://api.thecatapi.com/v1/breeds/search?q=" + args[0];

const request = require('request');

request(queryURL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);

  // check if data contains info - if not it means breed has not been found so console.log error message
  if (data[0] === undefined) {
    console.log("Breed has not been found!");
  } else {
    // print out description if breed exists
    console.log(data[0].description);
  }
});

