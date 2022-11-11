const contenedor = document.querySelector(".contenedor"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
entrada = inputPart.querySelector("input"),
BtnUbicacion = inputPart.querySelector("button"),
    weatherPart = contenedor.querySelector(".weather-part"),
    wIcon = weatherPart.querySelector("img"),
    arrowBack = contenedor.querySelector("i");

let api;

entrada.addEventListener("keyup", e =>{
    if(e.key == "Enter" && entrada.value != ""){
        requestApi(entrada.value);
    }
});

BtnUbicacion.addEventListener("click", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("Your browser not support geolocation api");
    }
});

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=659448f530b1011e83f181f7e97df12e`;
    fetchData();
}

function onSuccess(position){
    const {latitude, longitude} = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=659448f530b1011e83f181f7e97df12e`;
    fetchData();
}

function onError(error){
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function fetchData(){
    infoTxt.innerText = "Obteniendo datos del clima...";
    infoTxt.classList.add("Pendiente");
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Algo salio mal";
        infoTxt.classList.replace("Pendiente", "Error");
    });
}

function weatherDetails(info){
    if(info.cod == "404"){
        infoTxt.classList.replace("Pendiente", "error");
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    }else{
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity} = info.main;

        if(id == 800){
            wIcon.src = "icons/clear.svg";
        }else if(id >= 200 && id <= 232){
            wIcon.src = "icons/storm.svg";  
        }else if(id >= 600 && id <= 622){
            wIcon.src = "icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "icons/haze.svg";
        }else if(id >= 801 && id <= 804){
            wIcon.src = "icons/cloud.svg";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "icons/rain.svg";
        }
        
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        infoTxt.classList.remove("pending", "error");
        infoTxt.innerText = "";
        inputField.value = "";
        contenedor.classList.add("active");
    }
}

arrowBack.addEventListener("click", ()=>{
    contenedor.classList.remove("active");
});