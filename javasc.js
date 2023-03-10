// let city = 'tabriz';
const weatherapi = {
    apikey: '6a9a74f50009d7d6479764fc4667e1be',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey)
        .then((response)=> response.json())
        .then((data)=> this.weatherC(data))
    },
     weatherC : function(data){
        const {name}= data;
        const {icon , description}= data.weather[0];
        const {humidity,temp}= data.main;
        const {speed}= data.wind;
        console.log(name,icon,description,humidity,speed,temp);
        document.querySelector('.humidity').innerHTML= 'Humidity: '+humidity+'%'
        document.querySelector('.description').innerHTML=description;
        document.querySelector('.temp').innerHTML=temp+'°c';
        document.querySelector('.wind').innerHTML= 'Wind speed :'+speed+'km/h'
        document.querySelector('.icon').setAttribute('src' , "https://openweathermap.org/img/wn/"+icon+".png")
        document.querySelector('.name').innerHTML= 'Weather in '+ name
     },
     search :function(){
      this.fetchWeather(document.querySelector('input').value)
     }
}
document.querySelector('button').addEventListener('click' , function(){
    weatherapi.search();
})

document.querySelector('input').addEventListener('keyup' , function(e){
  if(e.key=='Enter'){
     weatherapi.search();
  }
})
