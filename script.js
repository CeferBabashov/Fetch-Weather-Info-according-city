let url = 'https://api.openweathermap.org/data/2.5/';
let key = '983234ede9493f6e6adf86f6170df307';
let inp = document.querySelector('input');
let city=document.querySelector('.city');
let temp=document.querySelector('.temp');
let description=document.querySelector('.description');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');


document.querySelector('form').addEventListener('submit', GetInfo);

function GetInfo(e) {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=983234ede9493f6e6adf86f6170df307`)
    .then(response => response.json())
    .then((data) => {
         city.innerHTML=`City of ${data.sys.country}`
         temp.innerHTML=`${data.main.temp}° F`
         humidity.innerHTML=`Humidity : ${data.main.humidity}%`
         wind.innerHTML=`Wind speed : ${data.wind.speed} km/h`

         data.weather.forEach(element => {
             description.innerHTML=`${element.description}`
        })
    }) 
}

const user1 = {
    name : "user1",
    address : {
        city : "afsdfds",
        state : "texas"
    }
}
const user2 = structuredClone(user1);

user2.name = "user2"
user2.address.city = "Las Vegas"
user2.address.state = "Arizona"


