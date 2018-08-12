/** */
function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperatureTarget = this.DEFAULT_TEMPERATURE;
  this.MINIMUMTEMPERATURE = 10
  this.powerSavingMode = true;
  this.maxLimitPSM_on = 25;
  this.maxLimitPSM_off = 32;
  this.lowUsageLimit = 18;
  this.mediumUsageLimit = this.maxLimitPSM_on;
}

Thermostat.prototype.getTemperatureTarget = function getTemperatureTarget() {
  return this.temperatureTarget;
};

Thermostat.prototype.isMinimumTemperature = function isMinimumTemperature() {
  return this.temperatureTarget === this.MINIMUMTEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function isMaximumTemperature() {
  if (this.isPowerSavingMode()) {
    return this.temperatureTarget === this.maxLimitPSM_on;
  } else {
    return this.temperatureTarget === this.maxLimitPSM_off;
  }
};

Thermostat.prototype.isPowerSavingMode = function isPowerSavingMode() {
  return this.powerSavingMode;
};

Thermostat.prototype.switchPowerSavingOff = function switchPowerSavingOff() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingOn = function switchPowerSavingOn() {
  this.resetTemperature() // also resets tempTarget
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function up() {
  if (this.isMaximumTemperature()) {
    throw new Error('Cannot go above maximum temperature');
  } else {
    this.temperatureTarget += 1;
  }
};

Thermostat.prototype.down = function down() {
  if (this.isMinimumTemperature()) {
    throw new Error('Cannot go below minimum temperature');
  } else {
    this.temperatureTarget -= 1;
  }
};

Thermostat.prototype.resetTemperature = function resetTemperature() {
  this.temperatureTarget = this.DEFAULT_TEMPERATURE;
};

/*
< 18 is low-usage
< 25 is medium-usage
anything else is high-usage
*/
Thermostat.prototype.energyUsage = function energyUsage() {
  if (this.temperatureTarget < this.lowUsageLimit) {
    return 'low-usage';
  } else if (this.temperatureTarget < this.mediumUsageLimit) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
