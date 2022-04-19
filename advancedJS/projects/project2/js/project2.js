// Project 2 - Advanced JavaScript - APIs & Asynchronous Events 
// author: Drew Halverson
// 03/05/2022

// this function listens for a click event on the getWeather button and calls 
// the getLocation function when it detects it. 
const init = () => {
    
    let weatherButton = document.querySelector("#getWeather"); 
    weatherButton.addEventListener("click", getLocation);
}

// this function retrieves weather data from geonames.org based on location data
// from the getLocation function
const getWeather = (latitude, longitude, placeName) => {

    // define URL for data retrieval with parameters from getLocation
    let url = "http://api.geonames.org/findNearByWeatherJSON?lat=" + latitude +
             "&lng=" + longitude + "&username=drewhalverson";

    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let weatherData = JSON.parse(xhr.responseText);
            console.log(weatherData);
            let temperaturecelsius = weatherData.weatherObservation.temperature;
            let windSpeed = weatherData.weatherObservation.windSpeed;

            // declare temperature variable and convert data from C to F
            let temperature = temperaturecelsius * 9 / 5 + 32;
            temperature = temperature.toFixed(0);

            // create divs to contain output
            let tempDiv = document.createElement("div");
            tempDiv.setAttribute("id", "tempGroup");

            let windDiv = document.createElement("div");
            windDiv.setAttribute("id", "windGroup");

            // create header for place name
            let placeNameHeader = document.createElement("h2");
            placeNameHeader.innerHTML = placeName;

            // create paragraph element for temperature data
            let tempText = document.createElement("p");
            tempText.innerHTML = "The temperature is: " +temperature +
                     " °F";

            // create paragraph element for wind speed data
            let windText = document.createElement("p");
            windText.setAttribute("id", "windText");
            windText.innerHTML = " Wind speed is " + windSpeed + " MPH";
 
            // test for temperature and output appropriate data
            if (temperature < 34) {

                // create img element for cold temps
                let coldImage = document.createElement("img");
                coldImage.setAttribute("src", "images/cold-temp-icon.png");
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
                hotImage.setAttribute("src", "images/hot-temp-icon.png");
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
            }

            // test for wind speed and output appropriate data
            if (windSpeed > 15) {
                let windImage = document.createElement("img");
                windImage.setAttribute("src", "images/high-wind-icon.png");
                windImage.setAttribute("alt", "wind icon");
                windImage.setAttribute("width", "50");
                windImage.setAttribute("height", "50");

                windDiv.appendChild(windText);
                windDiv.appendChild(windImage);
            } else {
                windDiv.appendChild(windText);
            }

            //Write data to main element in HTML
            document.getElementById("mainContent").appendChild(placeNameHeader);
            document.getElementById("mainContent").appendChild(tempDiv);
            document.getElementById("mainContent").appendChild(windDiv);

        }
    }

    xhr.send(null);

    // clear form entry
    document.getElementById("weatherForm").reset();
}


// this function retrieves location data from geonames.org based on a zip code
const getLocation = () => {

    // clear DOM data from previous activity
    document.getElementById("mainContent").innerHTML = "";

    // this grabs the zip code value from the html form. 
    let zipCode = document.querySelector("#zipCode").value;

    //declare geonames user name
    let userName = "drewhalverson";

    // create URL from user name and zip code data
    let url = "http://api.geonames.org/postalCodeSearchJSON?username=" + 
            userName + "&postalcode=" + zipCode + "&country=US";

    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let locationData = JSON.parse(xhr.responseText);
            let latitude = locationData.postalCodes[0].lat;
            let longitude = locationData.postalCodes[0].lng;
            let placeName = locationData.postalCodes[0].placeName + ", " +
                    locationData.postalCodes[0].adminName1;

            getWeather(latitude, longitude, placeName);
        }
    }

    xhr.send(null);
}

window.onload = init;