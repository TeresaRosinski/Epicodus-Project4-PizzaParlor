//Business Logic

//Constructor function to hold to complete order a user creates
function TotalOrder (){
  this.createdPizzas=[]
  this.pizzaId=0 
  this.totalPrice=0
}

//Prototype to add each individual pizza into the total order object
TotalOrder.prototype.AddCreatedPizza = function (createdPizza){
  createdPizza.id=this.assignId();
  this.createdPizzas.push(createdPizza);
  this.totalPrice+=createdPizza.price;
}
//prototype to assign an id to each pizza
TotalOrder.prototype.assignId= function () {
  this.pizzaId +=1;
  return this.pizzaId;
}

//prototype to locate a pizza by id
TotalOrder.prototype.findOrder = function(id) {
  for (let i=0; i< this.createdPizzas.length; i++) {
    if (this.createdPizzas[i]) {
      if (this.createdPizzas[i].id == id) {
        return this.createdPizzas[i];
      }
    }
  };
  return false;
}

//prototype to delete pizza from total order --> hasn't been implemented yet
TotalOrder.prototype.deletePizza = function(id) {
  for (let i=0; i< this.createdPizzas.length; i++) {
    if (this.createdPizzas[i]) {
      if (this.createdPizzas[i].id == id) {
        delete this.createdPizzas[i];
        return true;
      }
    }
  };
  return false;
}

//Constructor function to hold each pizza a user creates
function CreatedPizza(size,toppings){
  this.toppings = [];  
  this.size = size; 
  this.price = 7;
}

//prototype to add an array of toppings into the created pizza
CreatedPizza.prototype.AddToppings = function(toppings){
  this.toppings.push(toppings);
}

//prototype to determine the price of each pizza
CreatedPizza.prototype.PriceCalculationPerPizza=function(createdPizza) {
  if(this.toppings.length >= 1){
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
  return this.price;
}

//User Interface Logic

//Function to display each completed pizza to the page
function displayOrderDetails(orderToDisplay){
  let orderDetails=$("#orderSummary");
  let htmlForOrderDetails=" ";
  orderToDisplay.createdPizzas.forEach(function(createdPizza){
    htmlForOrderDetails+= "<p id= "+createdPizza.id+"/p>"+ "<h3>Pizza: "+createdPizza.id+ "</h3>" + "<p>Pizza Size: " + createdPizza.size + "</p>" +  "<p> Toppings: " + createdPizza.toppings+ "</p>" + "<p>Price:$ " + createdPizza.price + "</p>"
    orderDetails.html(htmlForOrderDetails);    
  });
  }

let orderOne = new TotalOrder()
$(document).ready(function(){ 
  $("form#sizeAndToppings").submit(function(event){
    event.preventDefault();
    const pizzaSize=$('input:radio[name=size]:checked').val();
    const pizzaToppings=[];
    $("input[name='toppings[]']:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    let pizzaUno = new CreatedPizza (pizzaSize);
    pizzaUno.AddToppings(pizzaToppings);
    pizzaUno.PriceCalculationPerPizza();
    orderOne.AddCreatedPizza(pizzaUno)
    displayOrderDetails(orderOne);
  });
});
