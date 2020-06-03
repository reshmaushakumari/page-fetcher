const arg = process.argv.slice(2);
const url = arg[0];
const fileName = arg[1];
const request = require('request');
const fs = require('fs');

const test = function(){
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', () => {
      fs.appendFile('index.html', body, function (err) {
        if (err) throw err;
        console.log('Saved!');
      }) 
  });
}

test();