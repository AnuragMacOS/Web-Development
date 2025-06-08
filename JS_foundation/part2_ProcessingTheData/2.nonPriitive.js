// 1) Object
const username={      //usename is constant now but the value inside it can be changed tho.
  firstname: "Anurag",
  isloggedin:true,
}
username.firstname="Mr.A";   //we changed the value of firstname over here
username.lastname="Bhatt";

console.log(username.firstname);
console.log(username.lastname);

console.log(username);
console.log(typeof username);

/*----------------------------------------*/
// 2) Arrays

let anotherUser=["Anurag","true"]

console.log(anotherUser[0]);
console.log(anotherUser[1]);

console.log("1"+ 1); //-->11


let isValue=true ; //--->true=1,false=0
console.log(isValue +1); //--->gives 2

let isvalue="2";
console.log(Number(isvalue));//-->2
console.log(typeof Number(isvalue));//-->number

let IsValue ="2abc";
//tries to convert 2abc into number but cant
console.log(Number(isValue));//--->Nan=not a number
console.log(typeof Number(isValue)); // --> number
console.log(Number(null));//-->0








