
function getWeather(){ 

  document.getElementById("getWeather").innerHTML = " "

  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  var weath = document.getElementById('getWeather')
  var city = document.getElementById("city").value
  var country = document.getElementById("country").value

  const url = 'http://api.openweathermap.org/data/2.5/weather?q='
  const api = '628f56d2d56ac896c598b5918e5a6773'

  fetch(`${url}${city}${country}&APPID=${api}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)

    let weather_type = data.weather[0].description
    let humidity = data.main.humidity
    let pressure = data.main.pressure
    let temp_max = data.main.temp_max- 273.15
    let temp_min = data.main.temp_min-273.15
    let lat = data.coord.lat
    let lon = data.coord.lon
    
    let div = createNode('div'), 
    img = createNode('img'),
    ul = createNode('ul');
    li1 = createNode('li');

    li1.innerHTML = `Temperature Minimum = ${temp_min.toFixed(2)}°C and Maximum = ${temp_max.toFixed(2)}°C. `;
    li2 = createNode('li');
    li2.innerHTML =  `Latitude = ${lat} and Longitude = ${lon}.`;
    li3 = createNode('li');
    li3.innerHTML = `Pressure = ${pressure} and Humidity = ${humidity}.`;
    li4 = createNode('li');
    li4.innerHTML = `${city} in ${country} is having ${weather_type} type of forecast.`; 

    if(weather_type === "clear sky"){
      img.src = 'images/sun.png'
    }
    else if(weather_type === "shower rain" || "rain" || "light rain"){
      img.src = 'images/rain.png'
    }
    else if(weather_type === "snow"){
      img.src = 'images/snow.png'
    }
    else{
      img.src = 'images/cloud.png'
    }

    append(div, img); 
    append(ul,li1);
    append(ul,li2);
    append(ul,li3);
    append(ul,li4);
    append(div, ul);

    document.getElementById('getWeather').append (div)

  })
}