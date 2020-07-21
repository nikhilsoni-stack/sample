// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
   var max=Math.max.apply(null,array);
  array.splice(array.indexOf(max), 1);
  return Math.max.apply(null, array);
  // Write your code here
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var result={};
  for(var i=0;i<string.length;i++)
    {
      if(string.charCodeAt(i)<97 || string.charCodeAt(i)>122)continue;
      if(result[string[i]]===undefined)
        {
          result[string[i]]=1;
        }
      else
        {
          result[string[i]]++;
        }
    }
  return result;
  // Write your code here
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  result={};
  const flattenObject=(obj,keyName)=>{
  Object.keys(obj).forEach(key=>{
  var newKey=keyName+"."+key;
  if(keyName==="")newKey=key;
  
  if(typeof obj[key]==="object")
  {

    flattenObject(obj[key],newKey);
  }
  else
  {
    result[newKey]=obj[key];
  }


});

};
flattenObject(unflatObject,"");
return result;
  
  // Write your code here
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  "use strict";
    if (Object(flatObject) !== flatObject || Array.isArray(flatObject)) return data;
    var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
    var result = {};
    for (var pp in flatObject) {
        var cur = result;
        var property = "";
        var match;
        while (match = regex.exec(pp)) {
            cur = cur[property] || (cur[property] = (match[2] ? [] : {}));
            property = match[2] || match[1];
        }
        cur[property] = flatObject[pp];
    }
    return result[""];
  
  
  // Write your code here



}

