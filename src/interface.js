$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


$('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  updateTemperature(); // update view
})

$('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.down();
  updateTemperature();
})

$('#temperature-reset').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.switchPowerSavingOn();
  $('#power-saving').text('on')
  updateTemperature();
})

$('#powersaving-off').click(function() {
  thermostat.switchPowerSavingOff();
  $('#power-saving').text('off')
  updateTemperature();
})

function updateTemperature() {
  $('#temperature').text(thermostat.temperatureTarget);
  $('#temperature').attr('class', thermostat.energyUsage());
}

})