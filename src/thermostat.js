function Thermostat() {
  this._DEFAULT_TEMPERATURE = 20;
  this._currentTemperature = 20;
  this._MINIMUM_TEMPERATURE = 10;
}

Thermostat.prototype.temperature = function() {
  return this._currentTemperature;
};
Thermostat.prototype.isMinimumTemperature = function() {
  return this._currentTemperature === this._MINIMUM_TEMPERATURE;
};
Thermostat.prototype.increaseTemperature = function(){
  this._currentTemperature += 1;
};
Thermostat.prototype.decreaseTemperature = function(){
  if (this.isMinimumTemperature()) {
  return; }
  {this._currentTemperature -= 1;}
};
