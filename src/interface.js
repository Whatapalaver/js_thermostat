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
  $('#power-saving-status').text('on')
  updateTemperature();
})

$('#powersaving-off').click(function() {
  thermostat.switchPowerSavingOff();
  $('#power-saving-status').text('off')
  updateTemperature();
})

$('#current-city').change(function() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='
  var token = '&appid=52a4e913e0040b11d8549741ae4d0132';
  var units = '&units=metric';
  var city = $('#current-city').val();
  $.get(url + city + token + units, function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

function updateTemperature() {
  $('#temperature').text(thermostat.temperatureTarget);
  $('#temperature').attr('class', thermostat.energyUsage());
}

})
