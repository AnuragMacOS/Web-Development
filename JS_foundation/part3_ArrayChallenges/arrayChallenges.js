/* 1) 1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors=["green tea","blacktea","oolong tea"]

const firsttea=teaFlavors[0]
// console.log(firsttea);


/*----------------------------------------------------------*/
/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.

*/

let Cities=["London", "Tokyo", "Paris", "New York"]
const favoriteCity=Cities[2]
// console.log(favoriteCity);



/*----------------------------------------------------------*/

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.

*/
let teaTypes =["herbal tea","white tea", "jasmine tea"];
 teaTypes[1]=teaTypes[2];
// console.log(teaTypes[1]);



/*----------------------------------------------------------*/
/*
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited =["mumbai","sydney"]
citiesVisited.push("Berlin");
// console.log(citiesVisited[2]);


/*----------------------------------------------------------*/

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders=["chai","iced tea","matcha","earl grey"]
const lastOrder= teaOrders.pop(); //just deletes one element from last
// console.log(lastOrder);


/*----------------------------------------------------------*/

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
//if any manipulation is done in the original copy the softcopy also reflects it
let popularTeas=["green tea","oolong tea","chai"]
let softcopyTeas=popularTeas;
popularTeas.pop();
// console.log(softcopyTeas); //-->[ 'green tea', 'oolong tea' ]
// console.log(popularTeas);  //-->[ 'green tea', 'oolong tea' ]


/*----------------------------------------------------------*/

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

//--> ...(variable) is the way to make a hard copy

let topCities=["Berlin", "Singapore", "New York"];
let hardCopyCities=[...topCities];
topCities.pop();
// console.log(hardCopyCities);

/*----------------------------------------------------------*/

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and 
`asianCities` containing `"Tokyo"` and `"Bangkok"`. 
 Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities=["paris","rome"];
let asianCities=["tokyo","bangkok"];
let worldCities=europeanCities.concat(asianCities)
//  console.log( worldCities); //-->[ 'paris', 'rome', 'tokyo', 'bangkok' ]

/*----------------------------------------------------------*/
/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`,
`"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu=["masala chai","oolong tea","green tea ","earl grey"]
let menuLength= teaMenu.length;

/*----------------------------------------------------------*/
/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, 
`"Cape Town"`, and `"Vancouver"`. 
 Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList=["kyoto","london","cape town","vancouver"]
let islondoninlist=cityBucketList.includes("london")
console.log(islondoninlist);






