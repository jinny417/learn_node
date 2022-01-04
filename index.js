console.log("Hello world!")

const myModule = require('./myModule.js');
const myModule1 = require('./myModule1.js');

myModule.beBasic();
myModule.count();

myModule1.food();

//Using Built-In Modules

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
  if(err) {
    console.log("There was a problem reading the file.");
  } else {
    console.log(data);
  }
});
