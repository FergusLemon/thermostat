function Thermostat() {
  this._DEFAULT_TEMPERATURE = 20;
}

Thermostat.prototype.temperature = function() {
  return this._DEFAULT_TEMPERATURE;
};
