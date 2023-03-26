const request = require('request');



const fetchBreedDescription = function(breedName, callback) {

  let queryURL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(queryURL, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
    const data = JSON.parse(body);
  
    // check if data contains info - if not it means breed has not been found so console.log error message
    if (data[0] === undefined) {
      console.log("Breed has not been found!");
      (callback(error,null));
      return;
    } else {
      // print out description if breed exists
      const description = data[0].description;
      callback(null, description);
    }
  });

};

module.exports = { fetchBreedDescription };