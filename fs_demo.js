const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'),{}, err => {
//     if(err) throw err;
//    console.log('folder created..');

// });

//create and write to file
fs.writeFile(
    path.join(__dirname, '/test','Hello.txt'), 'Hello world! I am good at node.js',
     err => {
        if(err) throw err;
        console.log('File created..');
    
    }
);

fs.readFile(
    path.join(__dirname, '/test','Hello.txt'), 'utf8',
     (err,data) => {
        if(err) throw err;
        console.log(data);
    
    }
);
