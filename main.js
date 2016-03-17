window.onload=function(){
  console.log("Fully loaded");

  var sub=document.querySelector("#submit");
  sub.addEventListener('click',function(evt){
    evt.preventDefault();

    var city =document.querySelector("#city").value;
    var state=document.querySelector("#state").value;


    var query = "http://api.wunderground.com/api/" + weatherkey + "/forecast10day/q/" + state + "/" + city + ".json";
    console.log("submit "+query);



    $.ajax({
          url: query,

        }).done(function(response){
          console.log(response);
        var templateSource = document.getElementById('character_template').innerHTML;
        var template =Handlebars.compile(templateSource);
        for(var i=0;i<7;i++){
          var display = document.getElementById("data");
          console.log(display);

          var html=template(response.forecast.simpleforecast.forecastday[i]);
          // display.innerHTML = html;// this over writes the previous
          var drop = document.createElement('div');
          drop.innerHTML=html;
          display.appendChild(drop);
          console.log('newelement');
        }
      }); //CLOSING EVENT LISTENER

  }); //CLOSING EVENT LISTERNER


}; //End window onload
