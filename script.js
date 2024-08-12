let apiKey="1fde13d5c77a1ec91cb46c8b0dcc55ec";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";// api id ke baad aati h api key
let city=document.querySelector(".city");
let temp=document.querySelector(".temp");
let txtHumid=document.querySelector(".txtHumid");
let txtWind=document.querySelector(".txtWind");
let imgWeather=document.querySelector(".imgWeather");
let submit=document.querySelector(".submit");
let input=document.querySelector(".nameInput");

submit.addEventListener("click",()=>{
    input=input.value;
    console.log(input);
    checkWeather(input);
});

async function checkWeather(cityn) {
    let response = await fetch(apiUrl + `&appid=${apiKey}` +`&q=${cityn}`);
    var data=await response.json();

    if(data.name==undefined){
        temp.innerHTML="Please reload the page"
        data.name="";
        txtHumid.innerHTML="";
        txtWind.innerHTML="";
    }
    
    city.innerHTML=data.name;
    temp.innerHTML=data.main.temp+" °c";
    txtHumid.innerHTML=data.main.humidity + "%";
    txtWind.innerHTML=data.wind.speed +" km/h";

    if(data.weather[0].main=="Clouds"){
        imgWeather.setAttribute('src','/clouds.png');
    } else if((data.weather[0].main=="Clear")){
        imgWeather.setAttribute('src','/clear.png');
    } else if((data.weather[0].main=="Drizzle")){
        imgWeather.setAttribute('src','/drizzle.png');
    } else if((data.weather[0].main=="Mist")){
        imgWeather.setAttribute('src','/mist.png');
    } else if((data.weather[0].main=="Snow")){
        imgWeather.setAttribute('src','/snow.png');
    }

    console.log(data);
}