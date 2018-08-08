'use strict';

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

it (' has a start value of 20 degress', function() {
  expect(thermostat.temperatureTarget()).toEqual(20);
});


});