const request = require('request');
const FormData = require('form-data');
const fs = require('fs');

const resultFound = request('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=ae5ad576d68d238339b806a4ce7192b4ef1588ad', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});

console.log(resultFound);

const data = fs.readFile("./answer.json", "UTF-8", (err, file) => {

    if (err) throw err;
  
    let body = new FormData();
  
    body.append("answer", file);
    console.log("File: " + file);
})

request.post({
  headers: {'content-type' : 'multipart/form-data'},
  url: 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=ae5ad576d68d238339b806a4ce7192b4ef1588ad',
  data: data 
}, function(error, response, body){
  if (error) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
}); 

