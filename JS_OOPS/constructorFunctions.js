function Person(name,age){
  this.name=name;
  this.age=age;
}

function Car(make,model){
  this.make=make;
  this.model=model;
}
let myCar=new Car("Toyota","Camry"); //we need to put 'new' inorder to access car class
// console.log(myCar);


let mynewcar=new Car("tata","safari");
// console.log(mynewcar);

/* ----------------------------------------------------------*/

function Tea(type){
  this.type=type
  this.describe=function(){
    return `this is a cup of ${this.type}`
  }
  }
 let lemontea=new Tea("lemon tea");
//  console.log(lemontea.describe());
 
/* ----------------------------------------------------------*/

 function Animal(species){
  this.species=species
 }
 Animal.prototype.sound= function(){
  return `${this.species} makes a sound`
 }
 let dog = new Animal("Dog");
 console.log(dog.sound());

 let cat = new Animal("Cat");
 console.log(cat.sound());



 
 
