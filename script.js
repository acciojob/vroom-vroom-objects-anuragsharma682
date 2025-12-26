// Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

// SportsCar constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // call parent constructor
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
