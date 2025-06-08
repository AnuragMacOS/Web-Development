// 1) Number

let balance=120
let anotherbalance =new Number(120)

// console.log(balance);
// console.log(anotherbalance); //-->prints [Number:120]
// console.log(anotherbalance.valueOf()); //-->prints 120

//so how to check if its number or not

console.log(typeof(balance));//-->prints " number "
console.log(typeof(anotherbalance)); //-->becomes object

/* -----------------------------------------------------  */
// 2) boolean

let isActive=true
let isforrealActive=new Boolean(true)  //not recommended

/* --------------------------------------  */

// 3) null and undefined

let firstname
console.log(firstname); //-->undefined (i know firstname exist but value doesnt exist)

let firstName=null;
console.log(firstName); //its null

let Firstname=null;
let lastname=undefined;
console.log(Firstname);//-->prints-->null-->there's no firstname
console.log(lastname);//-->prints-->undefined-->the lastname is not defined rn but it might come in the future we're not sure

/* --------------------------------------  */
// 4) String 

let mystring ="hello"
let mystringOne ="hola"
let username ="Anurag"

//old way to add strings

let oldgreet=mystring + " " + "Anurag"
console.log(oldgreet);

//new way -->string interpolation

let greetmessage = `hello ${username}!`;
console.log(greetmessage);

//extra
let nameOne = `value is ${ 2*2}`
console.log(nameOne);

/* ----------------------------------------------  */

// 5) Symbol-->it guarantees uniqueness both sm1 and sm2 will always be unique
                //even if value inside symbol is same

let sm1= Symbol()
let sm2= Symbol()

console.log(sm1==sm2); //-->false




