// Write your solution in this file!

let driver = {};
function updateDriverWithKeyAndValue(obj,key,value){
  let newDriver = {...obj}
  newDriver[key]=value;

  return newDriver;
}

destructivelyUpdateDriverWithKeyAndValue(obj,key,value){

  obj[key]=value;

  return obj;
}
