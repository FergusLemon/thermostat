function Thermostat() {
  this.defTemp = 20;
  this.temp = 20;
  this.minTemp = 10;
  this.powerSaver = true;
  this.tempMaxPsmOn = 25;
  this.tempMaxPsmOff = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;

}

Thermostat.prototype.temperature = function() {
  return this.temp;
};
Thermostat.prototype.isMinimumTemperature = function() {
  return this.temp === this.minTemp;
};
Thermostat.prototype.isMaximumTemperature = function() {
  if(this.isPowerSavingOn()){
    return this.temp >= this.tempMaxPsmOn;
  }
  return this.temp >= this.tempMaxPsmOff;
};
Thermostat.prototype.increaseTemperature = function(){
  if(this.isMaximumTemperature()){
    return; }
  this.temp += 1;
};
Thermostat.prototype.decreaseTemperature = function(){
  if (this.isMinimumTemperature()) {
  return; }
  {this.temp -= 1;}
};
Thermostat.prototype.resetButton = function () {
  this.temp = this.defTemp;
};
Thermostat.prototype.energyUsage = function (){
  if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT)
    return "red";
  else if (this.temp < this.tempMaxPsmOn)
    return "medium-usage";
  else
    return "high-usage";
};


Thermostat.prototype.isPowerSavingOn = function(){
  return this.powerSaver === true;
};

Thermostat.prototype.turnOffPowerSaving = function(){
  this.powerSaver = false;
};
Thermostat.prototype.turnOnPowerSaving = function(){
  this.powerSaver = true;
};
