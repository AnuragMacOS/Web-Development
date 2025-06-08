// example 1 
document
.getElementById("ChangeTextButton")
.addEventListener("click", function(){
 let paragraph = document.getElementById("myParagraph");
 (paragraph.textContent)="the paragraph has been changed";
 
})

// Example 2-->Traverse (exercise is : highlight)

document
.getElementById("highlightFirstCity")
.addEventListener("click",function(){
  let citiesList= document.getElementById
  ("citiesList");
 citiesList.firstElementChild.classList.add("highlight");
   
});

//Example 3--> Manipulating DOM elements

document.getElementById("changeOrder")
.addEventListener("click",function(){

let coffeeType = document.getElementById("coffeeType");
 coffeeType.textContent= "Espresso";

 //we can write our own css as well for it

 coffeeType.style.backgroundColor="brown";
 coffeeType.style.padding="5px";
});


//Example 4-->Creating and Inserting Elements

document

.getElementById("addNewItem")
.addEventListener("click",function(){

  let newItem = document.createElement("Li")
  newItem.textContent = "Eggs"

  document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5-->Removing a DOM element

document
.getElementById("removeLastTask")
.addEventListener("click",function(){
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});

// Example 6--> Event handling in DOM\

document
.getElementById("clickMeButton")
.addEventListener("click",function(){
  alert("This is an Alert")
})

//Example 7 --> Event Delegation

document
.getElementById("teaList")
.addEventListener("click",function(event){
  if(event.target && event.target.matches(".teaItem")){
    alert("you selected :" + event.target.textContent )

    //now you can select the text and get an alert
    // (&& event.target.matches(".teaItem")-->our code will work without this as
    //  well but it will help  when there are so many list ,so good practice
  }
});

// Example 8 --> F O R M Handling

document
.getElementById("feedbackForm")
.addEventListener("submit",function(event){
event.preventDefault();
let feedback = document.getElementById
("feedbackInput").value;
console.log(feedback);
document.getElementById("feedbackDisplay")
.textContent = `feedback is : ${feedback}`
});

// Example 9 --> DOM Content loaded
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById('domStatus').textContent = 
  "DOM fully loaded"
})

//Example 10 --> CSS Classes Manipulation

document.getElementById("toggleHighlight")
addEventListener("click",function(){
  let descriptionText = this.document.getElementById
  ("descriptionText")
  descriptionText.classList.toggle('highlight')
})






