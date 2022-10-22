
    async function getdata(){
        try{
        let city=document.getElementById("query").value

        let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=32ba0bfed592484379e51106cef3f204`
        
        let res =await fetch(url);
        let data=await res.json();
       
        sundata(data)
        append(data)
    

    }catch (err){
        console.log(err)
    }

      }
      
    function append(data){


        
       console.log(data.city.name)
        document.getElementById("city_name").innerHTML=data.city.name
        let url=`https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed `

       
        
        let iframe=document.getElementById("gmap_canvas")
       iframe.src=url

        for(var i=0;i<8;i++){
         
            let d=  document.getElementById("day"+(i+1) +"current").innerHTML=data.list[i].main.temp+"C°"
            
        }
        for(var i=0;i<8;i++){
         
         let d=  document.getElementById("day"+(i+1) +"min").innerHTML="Min Temp:"+" "+data.list[i].main.temp_min+"C°"
         
     }
     for(i = 0; i<1; i++){
        document.getElementById("day" + (i+1)+"wind").innerHTML=
        data.list[i].wind.speed+" "+"M/S";
        
    }
     for(var i=0;i<8;i++){
         
         let d=  document.getElementById("day"+(i+1) +"max").innerHTML="Max Temp:"+" "+data.list[i].main.temp_max+"C°"
         
     }
     

let a=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/night_full_moon_snow_thunder.png`
let b=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/night_half_moon_snow.png`
let c=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_rain.png`
let d=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/mist.png`
let e=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_clear.png`
let f=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/day_partial_cloud.png`
let g=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/cloudy.png`
let h=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/overcast.png`
let j=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/night_full_moon_clear.png`
let k=`https://www.dovora.com/resources/weather-icons/showcase/modern_showcase/rain.png`
     for(i = 0; i<8; i++){
        let sum=data.list[i].weather[0].icon
        console.log(sum)

    if(sum=="11d"){
        document.getElementById("img" + (i+1)).src = a
    }
    else if(sum=="09d"){
        document.getElementById("img" + (i+1)).src = c
    }
    else if(sum=="10d"){
        document.getElementById("img" + (i+1)).src = k
    }
    else if(sum=="13d"){
        document.getElementById("img" + (i+1)).src = b
    }
    else if(sum=="50d"){
        document.getElementById("img" + (i+1)).src = d
    }
    else if(sum=="01d"){
        document.getElementById("img" + (i+1)).src = e
    }
    else if(sum=="02d"){
        document.getElementById("img" + (i+1)).src = f
    }
    else if(sum=="03d"){
        document.getElementById("img" + (i+1)).src = g
    }
    else if(sum=="04d"){
        document.getElementById("img" + (i+1)).src = h
    }

    else if(sum=="11n"){
        document.getElementById("img" + (i+1)).src = a
    }
    else if(sum=="09n"){
        document.getElementById("img" + (i+1)).src = c
    }
    else if(sum=="10n"){
        document.getElementById("img" + (i+1)).src = k
    }
    else if(sum=="13n"){
        document.getElementById("img" + (i+1)).src = b
    }
    else if(sum=="50n"){
        document.getElementById("img" + (i+1)).src = d
    }
    else if(sum=="01n"){
        document.getElementById("img" + (i+1)).src = j
    }
    else if(sum=="02n"){
        document.getElementById("img" + (i+1)).src = f
    }
    else if(sum=="03n"){
        document.getElementById("img" + (i+1)).src = g
    }
    else if(sum=="04n"){
        document.getElementById("img" + (i+1)).src = h
    }     
    }

    for(i = 0; i<8; i++){
        document.getElementById("day" + (i+1)+"main").innerHTML=
        data.list[i].weather[0].main
        ;
    }
   

     for(var i=0;i<=8;i++){
        document.getElementById("day"+(i+1)).innerHTML= day_name[days(i)]
    }
    
    }
    
     var d=new Date();
     var day_name=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]


   function days(day){
    if(day+d.getDay()>6){
        return day+d.getDay()-7
    }else{
        return day+d.getDay()
    }
   }
  



   function getlocation(){
   navigator.geolocation.getCurrentPosition(success);

   function success(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  getweather(crd.latitude,crd.longitude)
  sunrise(crd.latitude,crd.longitude)
}

 }
 getlocation()
  


 async function getweather(lat,lon){
        try{

          let url=`  https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=32ba0bfed592484379e51106cef3f204`
        let res =await fetch(url);
        let data=await res.json();
        // console.log(data)
        showTime();
        time()
        
        append(data)
       

    }catch (err){
        console.log(err)
    }

      }
      async function sunrise(lat,lon){
        try{

        
        let url=`https://api.ipgeolocation.io/astronomy?apiKey=9d8a662a27794f1dbd334f9c38c72c06&lat=${lat}&long=${lon}`
            
        let res =await fetch(url);
        let data=await res.json();
        console.log(data)
       
       
        display(data)
       

    }catch (err){
        console.log(err)
    }

      }

      async function sundata(data){
        try{
       

        let url=` https://api.ipgeolocation.io/astronomy?apiKey=9d8a662a27794f1dbd334f9c38c72c06&location=${data.city.name}`

        let res =await fetch(url);
        let sandy=await res.json();
       
          
        display(sandy)
        
    }catch (err){
        console.log(err)
    }

      }

      function display(sandy){
         
    
      document.getElementById("moonrise").innerHTML=sandy.moonrise+" "+"am";
    
      document.getElementById("moonset").innerHTML=sandy.moonset+" "+"pm";
    
      document.getElementById("sunrise").innerHTML=sandy.sunrise+" "+"am";

      document.getElementById("sunset").innerHTML=sandy.sunset+" "+"pm";

    
       
      }

    
      function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("live").innerText = time;
    document.getElementById("am").innerHTML= session;
    
    setTimeout(showTime, 1000);
    
}
 




function time(){
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
if(cMonth ==1){
    cMonth="January"
}
else if(cMonth==2){
    cMonth="February"
}
else if(cMonth==3){
    cMonth="March"
}
else if(cMonth==4){
    cMonth="Aprail"
}
else if(cMonth==5){
    cMonth="May"
}
else if(cMonth==6){
    cMonth="June"
}
else if(cMonth==7){
    cMonth="July"
}
else if(cMonth==8){
    cMonth="August"
}
else if(cMonth==9){
    cMonth="September"
}
else if(cMonth==10){
    cMonth="October"
}
else if(cMonth==11){
    cMonth="November"
}
else if(cMonth==12){
    cMonth="December"
}


document.getElementById("month").innerHTML="<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>"
}