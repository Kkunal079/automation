const fs= require("fs");
console.log("Before")

let f1kpromise = fs.promises.readFile("f1.txt");
console.log(f1kpromise);

f1kpromise.then(function (data){
console.log(data+" ");
})

f1kpromise.catch(function(error){
console.log(error);
})

console.log("Atfer");

