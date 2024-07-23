const apiKey = "8d6355ee30932a73dc6c10f1db599c3b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const whethericon = document.querySelector(".whethericon");
async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
   
   if(response.status==404){
     document.querySelector(".error").style.display="block";
    document.querySelector(".whether").style.display="none";
   }
   else{
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp1").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/hr";
if(data.weather[0].main=="Clouds"){
   whethericon.src="images/clouds.png"
}
else if(data.weather[0].main=="Clear"){
    whethericon.src="./images/clear.png"
 }
 else if(data.weather[0].main=="Rain"){
    whethericon.src="./images/rain.png"
 }
 else if(data.weather[0].main=="Drizzle"){
    whethericon.src="./images/drizzle.png"
 }
 else if(data.weather[0].main=="Mist"){
    whethericon.src="./images/mist.png"
 }
 document.querySelector(".whether").style.display="block";
 

   }
   
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp1").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/hr";
if(data.weather[0].main=="Clouds"){
   whethericon.src="images/clouds.png"
}
else if(data.weather[0].main=="Clear"){
    whethericon.src="./images/clear.png"
 }
 else if(data.weather[0].main=="Rain"){
    whethericon.src="./images/rain.png"
 }
 else if(data.weather[0].main=="Drizzle"){
    whethericon.src="./images/drizzle.png"
 }
 else if(data.weather[0].main=="Mist"){
    whethericon.src="./images/mist.png"
 }
 document.querySelector(" .whether").style.display="block";
 
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();
