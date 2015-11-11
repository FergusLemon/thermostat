function Thermostat() {
  this._DEFAULT_TEMPERATURE = 20;
  this._currentTemperature = 20;
  this._MIN_TEMPERATURE = 10;
}

Thermostat.prototype.temperature = function() {
  return this._currentTemperature;
};
Thermostat.prototype.increaseTempterature = function(){
  this._currentTemperature += 1;
};
Thermostat.prototype.decreaseTempterature = function(){
  this._currentTemperature -= 1;
};
