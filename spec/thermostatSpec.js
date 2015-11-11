describe("Thermostat:", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts with a temperature of 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it("has a minimum temperature of 10 degrees", function() {
    for (i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature()).toEqual(10);
  });

  describe("Buttons:", function(){
    it("has an increase temperature button", function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(21);
    });
    it("has a decrease temperature button", function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(19);
    });
  });
  describe("Power Saving Mode:", function(){
    it("Is on by default", function(){
      expect(thermostat._POWER_SAVER).toBeTruthy();
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
    it("sets max temperature to 25 degree when on", function(){
      for(i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature()).toEqual(25);
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
    it("if off the max temperature is 32 degrees", function(){
      thermostat.turnOffPowerSaving();
      for(i = 0; i < 13; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature()).toEqual(32);
      expect(thermostat.isPowerSavingOn()).toEqual(false);
    });
  });
});
