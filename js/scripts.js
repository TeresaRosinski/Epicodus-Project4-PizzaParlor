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
pizza1.AddToppings("Basil");
pizza1.AddToppings("f");
pizza1.AddToppings("d");
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
