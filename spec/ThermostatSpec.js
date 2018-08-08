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

});
