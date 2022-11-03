
const  DataJson= require("./data.json");
console.log(DataJson);
function ReadJson(){
if(DataJson.id != 1){
    throw new Error("1 not found");
}
}
ReadJson();
