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

    describe ('when on', function() {

      it('can switch power saving mode off', function() {
        thermostat.switchPowerSavingOff();
        expect(thermostat.isPowerSavingMode()).toBe(false);
      });

      it ('cannot go above 25', function() {
        thermostat.powerSavingMode = true;
        thermostat.temperatureTarget = 25;
        expect(function (){
          thermostat.up();
        }).toThrowError("Cannot go above maximum temperature");
        expect(thermostat.getTemperatureTarget()).toEqual(25);
      });
    });

    describe ('when off', function() {

      it('can switch power saving mode on', function() {
        thermostat.switchPowerSavingOff();
        thermostat.switchPowerSavingOn();
        expect(thermostat.isPowerSavingMode()).toBe(true);
      });

      it ('cannot go above 32', function() {
        thermostat.switchPowerSavingOff();
        thermostat.temperatureTarget = 32;
        expect(function (){
          thermostat.up();
        }).toThrowError("Cannot go above maximum temperature");
        expect(thermostat.getTemperatureTarget()).toEqual(32);
      });

    });
  });

  describe ('reset', function() {
    it('can be reset to the default temperature', function() {
      thermostat.up();
      thermostat.resetTemperature();
      expect(thermostat.getTemperatureTarget()).toEqual(20);
    });
  });

  describe('displaying energy usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
  
    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
  
    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
