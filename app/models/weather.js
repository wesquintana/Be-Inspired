export default class Weather {
  constructor(data) {
    // console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.fahren = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
    this.weather = data.weather;
  }
  get Template() {
    return /*html*/ `<h3>${this.city}</h3><img src="http://openweathermap.org/img/wn/${this.weather[0].icon}@2x.png" alt="" srcset=""/><span class="text-secondary">${this.fahren}° F</span>`;
  }
}
