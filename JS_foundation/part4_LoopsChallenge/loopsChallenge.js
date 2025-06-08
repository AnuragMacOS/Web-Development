// sum of number from 1 to 5
let sum=0;
let i=1;
while(i<=5)
{
  sum=sum+i;
  i++;
}
// console.log(sum);

//2)write a while loop that counts down from 5 to 1

let countdown=[];
let j=5;
while(j>0){
   countdown.push(j);
    j--;
  }
  // console.log(countdown);
  
//3) write a do while to enter fav tea until stop

// let teacollection =[]
// let tea
// do{
//  tea=prompt(`enter ur fav tea(type"stop" to finish)`)
// //  if(tea!=="stop"){
// //   teacollection.push(tea)
// //  }
// }while (tea!=="stop");

// 4) write do while loop that adds numbers from 1 to 3

   let total=0;
   let k=1;
   do {
     total+=k;
     k++

   } while (k<=3);
  //  console.log(total);

// 5) write a for loop that multiplies each element in the array[2,4,6] by 2 and store in array multipliednumbers


   let multipliednumbers=[];
   let numbers=[2,4,6];
   
   for(let i=0; i<numbers.length; i++){
    //  takenumber= numbers[i] * 2;
    //  multipliednumbers.push(takenumber);

   multipliednumbers.push(numbers[i]*2)
   }
   console.log(multipliednumbers);
   

   // 6) write a for loop that lists all cities in array paris newyork tokyo and stores
        // each city in neq array citylists
      
        let cities=["paris","newyork","tokyo","london"]
        let citylists=[];
        for (let i = 0; i < cities.length; i++) {
         
          citylists.push(cities[i]);
        }
        console.log(citylists);
        