// this function listens for a click event on the getWeather button and calls 
// the getLocation function when it detects it. 
const init = () => {
    
    let weatherButton = document.querySelector("#getWeather"); 
    weatherButton.addEventListener("click", clearData);
}

// this function retrieves weather data from geonames.org based on location data
// form the getLocation function
const getWeather = (latitude, longitude) => {
    let url = "http://api.geonames.org/findNearByWeatherJSON?lat=" + latitude +
             "&lng=" + longitude + "&username=drewhalverson";
    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let weatherData = JSON.parse(xhr.responseText);
            let temperaturecelsius = weatherData.weatherObservation.temperature;
            let windSpeed = weatherData.weatherObservation.windSpeed;

            // declare temperature variable and convert data from Celsius to Farenheit
            let temperature = temperaturecelsius * 9 / 5 + 32;
            temperature = temperature.toFixed(0);

            // create divs to contain output
            let tempDiv = document.createElement("div");
            tempDiv.setAttribute("id", "tempGroup");

            let windDiv = document.createElement("div");
            windDiv.setAttribute("id", "windGroup");

            // create paragraph element for temperature data
            let tempText = document.createElement("p");
            tempText.innerHTML = "The temperature is: " +temperature +
                     " degrees Farenheit.";

            // create paragraph element for wind speed data
            let windText = document.createElement("p");
            windText.setAttribute("id", "windText");
            windText.innerHTML = " Wind speed is " + windSpeed + " MPH";
 
            // test for temperature and output appropriate data
            if (temperature < 34) {
                // create img element for cold temps
                let coldImage = document.createElement("img");
                coldImage.setAttribute("src", "images/cold-temperature-icon.png");
                coldImage.setAttribute("alt", "cold icon");
                coldImage.setAttribute("width", "50");
                coldImage.setAttribute("height", "50");

                //output cold temp data with icon
                tempDiv.appendChild(tempText);
                tempDiv.appendChild(coldImage);
                //document.body.appendChild(tempDiv);

            } else if(temperature > 83) {
                // create img element for hot temp
                let hotImage = document.createElement("img");
                hotImage.setAttribute("src", "images/hot-temperature-icon.png");
                hotImage.setAttribute("alt", "hot icon");
                hotImage.setAttribute("width", "50");
                hotImage.setAttribute("height", "50");

                // output hot temp data
                tempDiv.appendChild(tempText);
                tempDiv.appendChild(hotImage);
               // document.body.appendChild(tempDiv);
              
            } else {
                // output data if neither hot or cold are triggered
                tempDiv.appendChild(tempText);
               // document..appendChild(tempDiv);
            }

            // test for wind speed and output appropriate data
            if (windSpeed > 15) {
                let windImage = document.createElement("img");
                windImage.setAttribute("src", "images/high-wind-icon.png");
                windImage.setAttribute("alt", "hot icon");
                windImage.setAttribute("width", "50");
                windImage.setAttribute("height", "50");

                windDiv.appendChild(windText);
                windDiv.appendChild(windImage);
            } else {
                windDiv.appendChild(windText);
            }

            document.body.appendChild(tempDiv);
            document.body.appendChild(windDiv);

        }
    }

    xhr.send(null);
}


// this function retrieves location data from geonames.org based on a zip code
const getLocation = () => {
    let url = "http://api.geonames.org/postalCodeSearchJSON?" +
            "username=drewhalverson&postalcode=53593&country=US";
    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let locationData = JSON.parse(xhr.responseText);
            let latitude = locationData.postalCodes[0].lat;
            let longitude = locationData.postalCodes[0].lng;

            getWeather(latitude, longitude);
        }
    }


    xhr.send(null);
}

window.onload = init;
