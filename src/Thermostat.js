function Thermostat() {
  this.temperatureTarget = 20;
  this.MINIMUMTEMPERATURE = 10
  this.powerSavingMode = true;
}

Thermostat.prototype.getTemperatureTarget = function(){
  return this.temperatureTarget;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperatureTarget === this.MINIMUMTEMPERATURE;
}

Thermostat.prototype.isPowerSavingMode = function() {
  return this.powerSavingMode;
}

Thermostat.prototype.up = function(){
  this.temperatureTarget += 1;
}

Thermostat.prototype.down = function(){
  
  if (this.isMinimumTemperature()) {
    throw new Error("Cannot go below minimum temperature");
  }else {
    this.temperatureTarget -= 1;
  }
}