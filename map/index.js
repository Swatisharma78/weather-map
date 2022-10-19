let box=document.getElementById("container");

async function getweather(){
    try{
    
       let getcity=document.getElementById("city").value;
  
  let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getcity}&appid=6dc5f8c3e47d8292970c1f3895145668`);

  let data=await res.json();
  
  display(data);

  console.log("data:",data)
    } catch(err){
        console.log("err:",err);
    }
 
}
  
  function display(data){
     
   box.innerHTML="";
  let divittems=document.createElement("div");
  divittems.setAttribute('class','setting');


   let name=document.createElement("h3");
  name.innerHTML=`Name :<mark>${data.name}</mark>`;

   let temp=document.createElement("h3");
   temp.innerHTML=`<img src="https://cdn-icons.flaticon.com/png/128/2100/premium/2100100.png?token=exp=1646990696~hmac=c63809599c95df5c995eca56528b3bcf" class="iconic">Temperature:<mark>${data.main.temp}</mark>`;
   

   let pressure=document.createElement("h3");
   pressure.innerHTML=`<img src="https://cdn-icons-png.flaticon.com/128/1808/1808263.png" class="iconic"> Pressure:<mark>${data.main.pressure}</mark>`;

   let humidity=document.createElement("h3");
   humidity.innerHTML=`<img src="https://cdn-icons.flaticon.com/png/128/3262/premium/3262966.png?token=exp=1646991672~hmac=b754a99699cc631da2cccdbe15760267" class="iconic">  Humidity<mark>${data.main.humidity}</mark>`;
    
   let sunrise=document.createElement("h3");
   sunrise.innerHTML=` <img src="https://cdn-icons.flaticon.com/png/128/3236/premium/3236900.png?token=exp=1646991603~hmac=6dd3bd25ec15dbe2f79f1326588a26b1" class="iconic"> Sunrise:<mark>${data.sys.sunrise}</mark>`;

   let sunset=document.createElement("h3");
   sunset.innerHTML=` <img src="https://cdn-icons.flaticon.com/png/128/3920/premium/3920799.png?token=exp=1646991641~hmac=ccfa3f3ff0eda911ad29952a9a4519b1" class="iconic">  Sunset:<mark>${data.sys.sunset}</mark>`;

   let tempmin=document.createElement("h3");
   tempmin.innerHTML=` <img src="https://cdn-icons-png.flaticon.com/128/3815/3815449.png" class="iconic"> Minimum-Temperature:<mark>${data.main.temp_min}</mark>`;

   let tempmax=document.createElement("h3");
   tempmax.innerHTML=` <img src="https://cdn-icons-png.flaticon.com/128/2426/2426427.png" class="iconic">Maximum-Temperature:<mark>${data.main.temp_max}</mark>`;

   let wind=document.createElement("h3");
   wind.innerHTML=`<img src="https://cdn-icons-png.flaticon.com/128/1506/1506761.png" class="iconic">  Wind-Speed:<mark>${data.wind.speed}</mark>`;

   divittems.append(name,temp,pressure,humidity,sunrise,sunset,tempmin,tempmax,wind);

   let divforframe=document.createElement("div");

   let frame=document.createElement("iframe");
   frame.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
   frame.height=`490px`;
  frame.width=`99%`;
  frame.style.borderRadius = "50px";
  divforframe.append(frame);

   box.append( divittems,divforframe);
  }