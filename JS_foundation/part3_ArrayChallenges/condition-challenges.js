//1) check if  a number is greater than another number


let num1=5
let num2=3

console.log("I am normal upper code");
if(num1>num2){
  console.log("num1 is greater than num2");
}
else{
  console.log("num2 is greater than num1");
}

console.log("I am normal lower code");



/*---------------------------------------------------*/

// 2) checking if a string is equal to another string


let username="Anurag"
let anotherUsername="ANurag"

if( username==anotherUsername){
  console.log("pick another username");
}
else{
  console.log("yes you can pick this username since they're different");
}


/*---------------------------------------------------*/

// 3) checking if a variable is a number or not


let score =44
if(typeof score=='number'){
  console.log("yep this is a number");
}
else{"nah they're different things"}




//4)checking if a boolean value is true or false:

/*---------------------------------------------------*/


let isTeaReady =false;
if(isTeaReady){
  console.log("Tea is Ready"); 
}
else{  
  console.log("Tea is not Ready");
}



/*---------------------------------------------------*/

//5)checking if an array is empty or not

let items =[];
console.log(items.length);
if(items.length==0){
  console.log("array is empty");  
}
else{
  console.log("Array is not empty");
}
