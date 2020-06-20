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
  }if (this.size === "Small"){
    this.price+=0;
  }else if(this.size === "Medium"){
    this.price +=2;
  }else if(this.size === "Large"){
    this.price +=4; 
  }
  console.log(this.price);
  return this.price;
}

//User Interface Logic

function displayOrderDetails(totalOrder){
  
  let orderDetails=$("#orderSummary");
  let htmlForOrderDetails=" ";
  htmlForOrderDetails+=totalOrder.createdPizzas.forEach(function(createdPizza){
    "<li id= "+createdPizza.pizzaId+">"+createdPizza.size + "" + createdPizza.toppings+ createdPizza.price + "</li>"
    console.log(htmlForOrderDetails);
    orderDetails.html(htmlForOrderDetails);
  });
  };
 



$(document).ready(function(){ 
  $("form#sizeAndToppings").submit(function(event){
    event.preventDefault();
    let pizzaSize=$('input:radio[name=size]:checked').val();
    let pizzaToppings=[];
    $("input[name='toppings[]']:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    let orderOne = new TotalOrder()
    let pizzaUno = new CreatedPizza (pizzaSize);
    pizzaUno.AddToppings(pizzaToppings);
    pizzaUno.PriceCalculationPerPizza();
    orderOne.AddCreatedPizza(pizzaUno)
    displayOrderDetails(orderOne);
    //diplay pizza
   
    console.log(pizzaToppings);
    console.log(pizzaUno);
    console.log(orderOne);
    //displayOrderDetails(orderOne);
  
  });
});
