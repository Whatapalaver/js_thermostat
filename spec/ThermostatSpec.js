'use strict';

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it (' has a start value of 20 degress', function() {
    expect(thermostat.getTemperatureTarget()).toEqual(20);
  });

  describe ('up', function() {
    it ( 'increases the temperature target by 1 degree', function() {
      thermostat.up()
      expect(thermostat.getTemperatureTarget()).toEqual(21);
    });
    
  });

  describe ('down', function() {
    it ( 'decreases the temperature target by 1 degree', function() {
      thermostat.down()
      expect(thermostat.getTemperatureTarget()).toEqual(19);
    });

    it('cannot go below the minimum temperature', function(){
      thermostat.temperatureTarget = 10;
      expect(function (){
        thermostat.down();
      }).toThrowError("Cannot go below minimum temperature");
      expect(thermostat.getTemperatureTarget()).toEqual(10);
    });
  });

  describe ('minumum temperature', function(){
    it ('the minumum temp is 10', function() {
      expect(thermostat.MINIMUMTEMPERATURE).toEqual(10);
    });
  });

  describe ('power saving mode', function() {

    it('has power saving mode on by default', function() {
      expect(thermostat.isPowerSavingMode()).toBe(true);
    });

    it('can switch power saving mode off', function() {
      thermostat.switchPowerSavingOff();
      expect(thermostat.isPowerSavingMode()).toBe(false);
    });

    it('can switch power saving mode on', function() {
      thermostat.switchPowerSavingOff();
      thermostat.switchPowerSavingOn();
      expect(thermostat.isPowerSavingMode()).toBe(true);
    });

    it ('when on, cannot go above 25', function() {
      thermostat.powerSavingMode = true;
      thermostat.temperatureTarget = 25;
      expect(function (){
        thermostat.up();
      }).toThrowError("Cannot go above power saving max");
      expect(thermostat.getTemperatureTarget()).toEqual(25);
    });

  });

});
