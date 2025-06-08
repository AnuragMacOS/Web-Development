let computer ={cpu:12};
let lenovo={screen: "HD",
  __proto__:computer,
};
let tomHardware={};

// console.log(`computer`,lenovo.__proto__);

let genericCar={tyres:4}
let tesla={
  driver:"AI"
}

Object .setPrototypeOf(tesla,genericCar);//in the tesla i want to access all the properties of genericCar
console.log(`tesla`,Object.getPrototypeOf(tesla));


 