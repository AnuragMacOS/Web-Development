// 1) WAP 'for' loop that loops through array`"green tea"`, `"oolong tea"`," black tea" ,"chai"`.
     // and stops the loop when it finds 'chai' in new named array named selectedTeas 

   let teas =["green tea","black tea","chai","oolong tea"];
   let selectedTeas=[];

   for(let i=0;i<teas.length;i++){
    if(teas[i]==='chai'){
      break;
    }
      selectedTeas.push(teas[i]);
   }
  //  console.log(selectedTeas);
   
// 2) write a for loop that lopops through all cities in array {london,newyork , paris, tokyo and skips
        // paris  and store teh other cities in a new array named visitedcities

    let cities=["london","newyork" , "paris", "tokyo"];
    let visitedcities=[];
    for(let i=0;i<cities.length;i++){
        if(cities[i]==='paris'){
          continue;
        }
        visitedcities.push(cities[i]);
    }
  //  console.log(visitedcities);
   
  // 3) use for-of loop to iterate throgh array[1 2 3 4 5 ] and stop when number 4 is found
        // store the numbers before 4 in an array named smallnumbers.

      let numbers=[1,2,3,4,5]
      let smallnumbers=[]

     for (const num of numbers) {
      if (num === 4) { 
        break;        
      }
       smallnumbers.push(num);
     }
    //  console.log(smallnumbers);
  
  // 4) WAP 'for-of' loop that loops through array`" chai" ,"green tea"`, `"herbal tea"`," black tea" and
     // skip hebal tea .store the oter teas in prefered teas.
       
     let teatypes=[" chai" ,"green tea", "herbal tea"," black tea"]
     let preferedteas=[];

     for (const tea of teatypes) {
      if(tea==='herbal tea'){
        continue;
      }
      preferedteas.push(tea);
     }
    //  console.log(preferedteas);
     
   /* 5) Use for-in loop that loops through an object containing  city population 
    stop the loop when populationn of berlin is found and store all the previous cities populations in new 
    object names citypopulations .

    let citiesPopulation={
    "london":8900000,
    "New York":8400000,
    "paris":2200000
    "berlin":3500000
    }
  */

    let citiesPopulation={
      "london":8900000,
      "New York":8400000,
      "paris":2200000,
      "Berlin":3500000
      };

    let cityNewPopulation={};
    // console.log(Object.values(citiesPopulation));-->[ 8900000, 8400000, 2200000, 3500000 ]
  
    for (const city in citiesPopulation) {
      if (city==='Berlin') {
        break;
      }
        cityNewPopulation[city]=citiesPopulation[city];

      }
      // console.log(cityNewPopulation);
      
/* 6) Use for-in loop that loops through an object containing  city population 
    skip the cipty with a populationn below 23 mil and  store the rest new object called largeCities .

    let worldCities={
    "sydney":5000000,
    "New York":9000000,
    "berlin":3500000,
    "paris":2200000
    
    }
  */

     
    let worldCities={
      "sydney":5000000,
      "New York":9000000,
      "berlin":3500000,
      "paris":2200000
      
     }

     let largeCities={}
     for (const city in worldCities) {
       if(worldCities[city]<3000000){
        continue;
       } 
        largeCities[city]=worldCities[city];
      }
      // console.log(largeCities);
      
     
/* 7) WAP 'for-each' loop that loops through array`" `"earl grey" "green tea", "chai" ," oolong tea".
   stop the loop when 'chai' is founnd  .store the oter teas in availableteas.
  */     

   let teacollection=["earl grey" ,"green tea", "chai" ,"oolong tea"]
   let availableteas=[];

   teacollection.forEach(function(tea) {
    if (tea==='chai'){
      return;
    }
    availableteas.push(tea);
   });

  //  console.log(availableteas);

 /* 8) Use for-each loop that loops through an array containing {"berlin","tokyo", "sydney", "paris"} and skip
  "sydney " and store the other cities in new array called travelledcities.

*/
     let myworldities=["berlin","tokyo", "sydney", "paris"];
     let Travelledcities=[];
    
     myworldities.forEach(function(city) {
      if(city==="sydney"){
        return;
      }
     Travelledcities.push(city);
     });
    // console.log(Travelledcities);
    
/* 9) write a for loop and iterate through [2 5 7 9] skip value 7 
and multipy rest by 2.Store the results in new array anmed "doubledNumbers".
*/
  
let nums=[2,5,7,9];
let doubledNumbers=[];
for( let i=0;i<nums.length;i++){
  if(nums[i]===7){
    continue;
  }
  doubledNumbers.push(nums[i] * 2);

}
// console.log(doubledNumbers);


/* Use for-of loop to iterate through the array["chai", "green tea" , "black tea", "jasmine tea" ]
 and stop when the length of the current tea name is greater than 10 .
 store the tea iterated over in an array named shortTeas.
*/
let TeaS=["chai", "green tea" , "black tea", "jasmine tea" ];
let shortTeas=[];

for (const tea of TeaS) {
  if (tea.length>10) {
    break;
  }
  shortTeas.push(tea)
}
console.log(shortTeas);





