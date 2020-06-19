//Business Logic

//Constructor function to hold to complete order a user creates
function TotalOrder (){
  this.createdPizzas=[]
  this.orderId=0 // might not be needed - could be good if someone orders more than one things to track the price of each thing ordered
  this.totalPrice;///put in price function here?
}

TotalOrder.prototype.AddCreatedPizza = function (createdPizza){
  createdPizza.id=this.assignId();
  this.createdPizzas.push(createdPizza);
  this.totalPrice +=createdPizza.price;
}

TotalOrder.prototype.CalculateTotalPrice=function(createdPizza){
  if(this.totalPrice.length>=0){
    for(let i=0; i<=this.totalPrice.length; i++)
    createdPizza.totalprice=
    totalPrice+=this.totalPrice[i];
    return this.totalPricetotalPrice;
  }
  //this.totalPrice.push(totalPrice);
}

TotalOrder.prototype.assignId= function () {
  this.orderId +=1;
  return this.orderId;
}

//Constructor function to hold each pizza a user creates
function CreatedPizza(size){
  this.toppings=[];  //length of array can be measured to determine price if each topping cost $1.50
  this.size=size; 
  this.price=[];
}

CreatedPizza.prototype.AddToppings=function(toppings){
  this.toppings.push(toppings);
}
 
CreatedPizza.prototype.PriceCalculationPerPizza=function() {
  let Price=7;
  if(this.toppings.length >=1){
    for (let i= 0; i<this.toppings.length; i++){
      Price+=1;
    }
  }if (this.size === "small"){
    Price+=0;
  }else if(this.size === "medium"){
    Price +=2;
  }else if(this.size === "large"){
    Price +=4; 
  }
  console.log(Price);
  return Price;
}

CreatedPizza.prototype.PushPricePerPizza=function(Price){
  this.price.push(Price);
}

let pizza1 = new CreatedPizza ( "small" )
pizza1.AddToppings("Basil");
pizza1.AddToppings("f");
pizza1.AddToppings("d");
let pricePizza1=pizza1.PriceCalculationPerPizza();
pizza1.PushPricePerPizza(pricePizza1);
 
let pizza2 = new CreatedPizza ("medium")
pizza2.AddToppings("Cheese")

pizza1.PriceCalculationPerPizza(pizza1);

let order1 = new TotalOrder ();
order1.AddCreatedPizza(pizza1);
order1.AddCreatedPizza(pizza2);
console.log(pizza1);
console.log(order1);
//User Interface Logic
