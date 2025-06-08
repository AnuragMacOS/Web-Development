       //.    REVISION.       
let car={
  make:"Toyota",
  model:"camry",
  year:2022,
  start:function(){
    return`${this.make} car got started in ${this.year}`;
  }
}
// console.log(car.start());

/* ----------------------------------------------------------*/

function Person(name,age){
  this.name=name
  this.age=age
}
let john=new Person("john",22)
// console.log(john);

/* ----------------------------------------------------------*/

function Animal(type){
  this.type=type
}
Animal.prototype.speak=function(){
  return `${this.type} makes a sound`
}
Animal.prototype.speak=function(){
  return `${this.type} make a sound`
}
Array.prototype.Anurag=function(){
  return `custom method ${this}`

}

let myArray=[1,2,3]
// console.log(myArray.Anurag());
let myNewArray=[1,2,3,4,5,6];
// console.log(myNewArray.Anurag());

/* -----------I N H E R I T A N C E--------------------------*/
/* -----------I N H E R I T A N C E--------------------------*/
/* -----------I N H E R I T A N C E--------------------------*/
/* -----------I N H E R I T A N C E--------------------------*/

//the moment function geos inside the class ,we start to call them methods

class Vehicle{
    constructor(make,model){
      this.make=make;
      this.model=model;
    }
    //since we're inside the function no need to write Function start() just write start();
    start(){
      return `${this.model} is a car form ${this.make}`;
    }
}

class Car extends Vehicle{
  drive(){
    return `${this.make}:This is an inheritance example`
  }
}
let myCar=new Car("Dodge","1969 Dodge Challenger")
// console.log(myCar.start());
// console.log(myCar.drive());

let VehicleOne= new Vehicle("Toyota","Fortuner")
// console.log(VehicleOne.make);


/* -----------E N C A P S U L A T I O N----------------------*/
/* -----------E N C A P S U L A T I O N--------------------------*/
/* -----------E N C A P S U L A T I O N--------------------------*/
/* It is an idea that restricts direct access to object data*/
class BankAccount{
  #balance = 0;

  deposit(amount){
    this.#balance +=amount;
    return this.#balance;
  }
  getBalance(){
    return `$ ${this.#balance}`; 
  }
}
let account =new BankAccount();
// console.log(account.getBalance());

/* -----------A B S T R A C T I O N----------------------*/
/* -----------A B S T R A C T I O N----------------------*/
/* -----------A B S T R A C T I O N----------------------*/
// hiding complex stuff and only showing and presenting important thing

class CoffeeMachine{
  start(){
    //call DB
    //filter value
    return `Starting the machine...`;
  }
  brewCoffee(){
    //complex calculation
    return `Brewing coffee`  
  }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());


/* -----------P O L Y M O R P H I S M----------------------*/
/* -----------P O L Y M O R P H I S M----------------------*/
/* -----------P O L Y M O R P H I S M----------------------*/
/* something that can take multiple forms */

class Bird {
  fly(){
    return `Flying....`;
  }
}
class Penguin extends Bird{
  fly(){
    return `Penguins can't fly`;
  }
}

  let bird= new Bird();
   let penguin = new Penguin();
  //  console.log(bird.fly());
  //  console.log(penguin.fly());

  /* ----------------STATIC METHOD-------------------*/
  /* ----------------STATIC METHOD-------------------*/
  /* ----------------STATIC METHOD-------------------*/

  // static are special methods that can only be called by the class itself and nobody else can call it 

  class Calculator{
    static add(a,b){
      return a + b;
    }
  }
  let miniCalc = new Calculator();
  // console.log(miniCalc.add(2,3));--> it wont return 5 because add is static

  // console.log(Calculator.add(2,3)); -->gives 5

  
  /* ----------------Getters and Setters-------------------*/
  /* ----------------Getters and Setters-------------------*/
  /* ----------------Getters and Setters-------------------*/
   
  class Employee{
      #salary;
      Constructor(name, salary){
        if(salary < 0){
          throw new Error("Salary cannot be negative");
         }
       this.name = name;
       this.#salary = salary; 
      }

  get salary(){
    return `You are not allowed to see the salary`;
  }

  set salary(value){
   if ( value < 0){
    console.error("Invalid salary");
   }

   else {
    this._salary = value;
   }
  }
}

  let emp = new Employee("Alice",-50000);
  console.log(emp._salary);
  emp.salary = 60000;
  