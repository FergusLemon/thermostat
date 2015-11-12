thermostat = new Thermostat ();

  function displayTemp() {
  document.getElementById('display').innerHTML =  thermostat.temperature();
  }

  function tempUp() {
    thermostat.increaseTemperature();
    displayTemp();
  }

  function tempDown() {
    thermostat.decreaseTemperature();
    displayTemp();
  }

  function tempReset() {
    thermostat.resetButton();
    displayTemp();
  }

  function psmOn() {
    thermostat.turnOnPowerSaving();
  }

  function psmOff() {
    thermostat.turnOffPowerSaving();
  }