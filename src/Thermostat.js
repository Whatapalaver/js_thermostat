function Thermostat() {
  this.temperatureTarget = 20;
}

Thermostat.prototype.getTemperatureTarget = function(){
  return this.temperatureTarget;
}

Thermostat.prototype.up = function(){
  this.temperatureTarget += 1;
}