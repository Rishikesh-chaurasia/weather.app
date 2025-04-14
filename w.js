const apiKey = "b44c239e49a0305b12aa0d72f5e2ee3b";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const searchBox = document.querySelector(".search input")
    const searchBtn = document.querySelector(".searchButton")
    let weather = document.querySelector(".weather-icon");
    

    async function checkWeather(){
        let city = document.getElementById("city").value;
        const response =  await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
        if(data.weather[0].main == "clouds"){
    }
    console.log("success");
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById("icon").src = icon;
    console.log(icon);
    }
    searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})