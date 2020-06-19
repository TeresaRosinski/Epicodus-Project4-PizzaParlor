//Business Logic

//Constructor function to hold to complete order a user creates
function TotalOrder (){
  this.createdPizzas=[]
  this.orderId=0 // might not be needed - could be good if someone orders more than one things to track the price of each thing ordered
  this.price=[]///put in price function here?
}

TotalOrder.prototype.AddCreatedPizza = function (createdPizza){
  createdPizza.id = this.assignId();
  this.createdPizzas.push(createdPizza);
}

TotalOrder.prototype.assignId= function () {
  this.orderId +=1;
  return this.orderId;
}

//Constructor function to hold each pizza a user creates
function CreatedPizza (size) {
  this.toppings=[];  //length of array can be measured to determine price if each topping cost $1.50
  this.size=size; 
}

CreatedPizza.prototype.AddToppings = function (toppings){
  this.toppings.push(toppings);
}

 
let pizza1 = new CreatedPizza ( "small" )
pizza1.AddToppings("Basil Pepperoni Olives");

let order1 = new TotalOrder ();
order1.AddCreatedPizza(pizza1);
console.log(pizza1);
console.log(order1);
//User Interface Logic
