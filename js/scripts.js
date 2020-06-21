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
  return this.price;
}

//User Interface Logic

function displayOrderDetails(orderToDisplay){
  let orderDetails=$("ul#orderSummary");
  let htmlForOrderDetails=" ";
  orderToDisplay.createdPizzas.forEach(function(createdPizza){
    htmlForOrderDetails+= "<li id= "+createdPizza.pizzaId+">"+ "Pizza Size: " + createdPizza.size + "</li>" +  "<li> Toppings: " + createdPizza.toppings+ "</li>" + "<li>Price:$ " + createdPizza.price + "</li>"
    orderDetails.html(htmlForOrderDetails);    
  });
  };
 
  function displayShit(order){
    const orderKeys=Object.keys(order)
    let htmldisplay = ""
    orderKeys.forEach(function(key){
      htmldisplay = htmldisplay.concat(key+ ":" + order[key] + "\n")
    });
  };


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
    //diplay pizza
   
    
    console.log(pizzaToppings);
    console.log(pizzaUno);
    console.log(orderOne);
    console.log(displayOrderDetails(orderOne));
    console.log(displayShit(orderOne));
    //displayOrderDetails(orderOne);
  
  });
});
