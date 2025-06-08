const person={
    name: "Anurag",

    greet(){
        console.log(`Hi I am ${this.name}`);
        
    },
};

person.greet();

const greetFunction = person.greet
greetFunction();

const boundgreet = person.greet.bind({name : "Bucks"})
boundgreet();