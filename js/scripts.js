//Business Logic

//Constructor function to hold to complete order a user creates
function TotalOrder (){
  this.createdPizzas=[]
  this.pizzaId=0 
  this.totalPrice=0
}

TotalOrder.prototype.AddCreatedPizza = function (createdPizza){
  createdPizza.id=this.assignId();
  this.createdPizzas.push(createdPizza);
  this.totalPrice+=createdPizza.price;
}

TotalOrder.prototype.assignId= function () {
  this.pizzaId +=1;
  return this.pizzaId;
}

//Constructor function to hold each pizza a user creates
function CreatedPizza(size){
  this.toppings=[];  
  this.size=size; 
  this.price;
}

CreatedPizza.prototype.AddToppings=function(toppings){
  this.toppings.push(toppings);
}

CreatedPizza.prototype.PriceCalculationPerPizza=function(createdPizza) {
  this.price=7;
  if(this.toppings.length >=1){
    for (let i= 0; i<this.toppings.length; i++){
      this.price+=1;
    }
  }if (this.size === "small"){
    this.price+=0;
  }else if(this.size === "medium"){
    this.price +=2;
  }else if(this.size === "large"){
    this.price +=4; 
  }
  console.log(this.price);
  return this.price;
}

let pizza1 = new CreatedPizza ( "small" )

let pizza2 = new CreatedPizza ("medium")
pizza2.AddToppings("Cheese")
pizza2.PriceCalculationPerPizza();
pizza1.PriceCalculationPerPizza();
let order1 = new TotalOrder ();
order1.AddCreatedPizza(pizza1);
order1.AddCreatedPizza(pizza2);
console.log(pizza1);
console.log(pizza2);
console.log(order1);

//User Interface Logic


function displayOrderDetails(orderToDispaly){
  let orderDetails=$("#orderSummary");
  let htmlForOrderDetails="";
  orderToDisplay.createdPizzas.forEach(function(createdPizza){
    orderToDisplay+="<li id= "+createdPizza.pizzaId+">"+createdPizza.size + "" + createdPizza.toppings + createdPizza.price + "</li>"
  });
  orderDetails.html(htmlForORderDetails);
};

function showTopping(){

}

function attachToppingsListeners(){
  $("#formatToppings").on("click", ".btn#basilToppingAdd", function(){
    $("#showToppings").text("Basil");
  })
}

$(document).ready(function(){ 
  attachToppingsListeners();
  $("form#sizeAndToppings").submit(function(event){
    event.preventDefault();
    const pizzaSize=$('input:radio[name=size]:checked').val();
    let toppingsToAdd=[];
    /*
      $("input[name='toppings']:checked").forEach(function(){
      toppingsToAdd.push(this).val();
      console.log(toppingsToAdd);
      */
    console.log(pizzaSize);
    });
    
    
  
  //});
  });

