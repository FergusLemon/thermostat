function Thermostat() {
  this._DEFAULT_TEMPERATURE = 20;
  this._currentTemperature = 20;
}

Thermostat.prototype.temperature = function() {
  return this._currentTemperature;
};
Thermostat.prototype.increaseTempterature = function(){
  this._currentTemperature += 1;
};
