// imports request moudle
const request = require("request");
//imports core file system module
const fs = require("fs");

const url = "http://jsonplaceholder.typicode.com/posts";

request({ url: url, json: true }, (err, res, body) => {
    if (!err && res.statusCode === 200) {
    
        let requestResult = body;  // stores res.body data in variable
        
        // stringify object data
        let data = JSON.stringify(requestResult);
        
        // create post.json file and store JSON data to file
        fs.writeFileSync("./result/post.json", data);
    } else {
        console.log(err);
    }
});
