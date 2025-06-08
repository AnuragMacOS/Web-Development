/* 1) Write a Function(WAF) named makeTea that takes one parameter,
'typeOfTea' and returns a string like "making green tea " when called 
with "green tea".Store the result in a variable named teaOrder.
*/

function makeTea(typeOfTea){
  return `making ${typeOfTea}`
  console.log(test);
}
let teaOrder= makeTea("lemon tea")
// console.log(teaOrder);


/* 2) Write a Function(WAF) named orderTea that takes one parameter,
'teatype' and inside this create another function named 'confirmOrder'
 that returns a message like "order confirmed for chai ". 
Call 'confirmOrder' from within 'orderTea and return the result.
*/

function orderTea(teaType){
  function confirmOrder(){
    return 'order confirmed for chai';
  }
  return confirmOrder()
}
let ordeCofirmation=orderTea("chai");
// console.log(ordeCofirmation); //-->order confirmed for chai


/*
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'.
 The function should return the total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable named 'totalCost'.
*/

const calculateTotal=(price,quantity) => price*quantity

let totalCost=calculateTotal(499 * 100)
// console.log(totalCost);

/*
4. Write a function named "processTeaOrder" that takes another function, 
"makeTea", as a parameter and calls it with the argument "earl grey".
Return the result of "calling makeTea".
*/

//function being treated as variable and returns a function is called higher order function

function makeTea(typeOfTea){
  return `maketea:${typeOfTea}`; // if return typeOftea only--->o/p = earl grey

}
function processTeaOrder(makeTeaFunction){ // makeTeaFunction nickname to makeTea
   return makeTeaFunction('earl grey')
}
let order=processTeaOrder(makeTea)
// console.log(order); //-->o/p=maketea:earl grey



/*
5. Write a function named `createTeaMaker:` that returns another function. 
The returned function should take one parameter, `teaType:`, and return a message like `"Making green tea:"`.
Store the returned function in a variable named `teaMaker:` and call it with `"green tea:"`.
*/

function createTeaMaker(name){
  let score=23
  return function(teaType){
     return `Making ${teaType} ${name} ${score}`
  }
}
let teaMaker = createTeaMaker("Anurag");
console.log(teaMaker("green tea"));

