var back=document.querySelector('#background');
var color = document.querySelector('.container');
var circle1=document.querySelector('#movetext');




  window.onload=function(){
  console.log("Fully loaded");

  back.style.backgroundImage="url('pauldouglas_1454303681_Medterranean Nasa.GIF')";
  back.style.backgroundSize="cover";

  var sub=document.querySelector("#submit");
  sub.addEventListener('click',function(evt){
  evt.preventDefault();
  console.log("click");

    var city =document.querySelector("#city").value;
    var state=document.querySelector("#state").value;

    var query = "http://api.wunderground.com/api/" + weatherkey + "/forecast10day/q/" + state + "/" + city + ".json";
    console.log("submit "+query);

    var somequery="http://api.wunderground.com/api/" +weatherkey + "/conditions/q/" + state +"/" +city +".json";

    // colordiv.innerHTML="";

    // var newdiv = document.createElement('div');
    // newdiv.id = "wrap";
    // newdiv.setAttribute('class', 'color-divs');
    // color.appendChild(newdiv);
    //  console.log(newdiv);
    //
    //  var newdiv1 = document.createElement('div');
    //  newdiv1.id="wrap1";
    //  newdiv1.setAttribute('class', 'color-divs');
    //  color.appendChild(newdiv1);
    //  console.log(newdiv1);
    //
    //  var newdiv2 = document.createElement('div');
    //  newdiv2.id="wrap2";
    //  newdiv2.setAttribute('class', 'color-divs');
    //  color.appendChild(newdiv2);
    //  console.log(newdiv2);
    //
    //  var newdiv3 = document.createElement('div');
    //  newdiv3.id ="wrap3";
    //  newdiv3.setAttribute('class', 'color-divs');
    //  color.appendChild(newdiv3);
    //  console.log(newdiv3);
    //
    //  var newdiv4 = document.createElement('div');
    //  newdiv4.id="wrap4";
    //  newdiv4.setAttribute('class', 'color-divs');
    //  color.appendChild(newdiv4);
    //  console.log(newdiv4);
    //
    //  var newdiv5 = document.createElement('div');
    //  newdiv5.id="wrap5";
    //  newdiv5.setAttribute('class', 'color-divs');
    //  color.appendChild(newdiv5);
    //  console.log(newdiv5);
    //
    //  var newdiv6 = document.createElement('div');
    //  newdiv6.id="wrap6";
    //  newdiv6.innerHTML=response.date.weekday;
    //  newdiv6.setAttribute('class', 'color-divs');
    //  color.appendChild(newdiv6);
    //  console.log(newdiv6);











    // var query = "http://api.wunderground.com/api/" + weatherkey + "/forecast10day/q/" + state + "/" + city + ".json";
    // console.log("submit "+query);



    $.ajax({
          url: query,

        }).done(function(response){
          console.log(response);

          //creating a new div for making circles
          // var newdiv = document.createElement('div');
          // newdiv.id = "wrap";
          // newdiv.innerHTML="";
          // newdiv.setAttribute('class', 'color-divs');
          // color.appendChild(newdiv);
          //  console.log(newdiv);

           //Creating a new div for innertext data like weekday

          // var thursday=document.createElement('div');
          // thursday.id="movetext";
          // thursday.innerHTML=response.forecast.simpleforecast.forecastday[0].date.weekday;
          // thursday.setAttribute('class' ,'text');
          // color.appendChild(thursday);
          //
          //  var newdiv1 = document.createElement('div');
          //  newdiv1.id="wrap1";
          //  newdiv1.innerHTML="";
          //  newdiv1.setAttribute('class', 'color-divs');
          //  color.appendChild(newdiv1);
          //  console.log(newdiv1);
          //
          //  var friday=document.createElement('div');
          //  friday.id="movetext1";
          //  friday.innerHTML=response.forecast.simpleforecast.forecastday[1].date.weekday;
          //  friday.setAttribute('class' ,'text');
          //  color.appendChild(friday);
          //
          //  var newdiv2 = document.createElement('div');
          //  newdiv2.id="wrap2";
          //  newdiv2.innerHTML="";
          //  newdiv2.setAttribute('class', 'color-divs');
          //  color.appendChild(newdiv2);
          //  console.log(newdiv2);
          //
          //  var saturday=document.createElement('div');
          //  saturday.id="movetext2";
          //  saturday.innerHTML=response.forecast.simpleforecast.forecastday[2].date.weekday;
          //  saturday.setAttribute('class' ,'text');
          //  color.appendChild(saturday);
          //
          //  var newdiv3 = document.createElement('div');
          //  newdiv3.id ="wrap3";
          //  newdiv3.innerHTML="";
          //  newdiv3.setAttribute('class', 'color-divs');
          //  color.appendChild(newdiv3);
          //  console.log(newdiv3);
          //
          //  var sunday=document.createElement('div');
          //  sunday.id="movetext3";
          //  sunday.innerHTML=response.forecast.simpleforecast.forecastday[3].date.weekday;
          //  sunday.setAttribute('class' ,'text');
          //  color.appendChild(sunday);
          //
          //  var newdiv4 = document.createElement('div');
          //  newdiv4.id="wrap4";
          //  newdiv4.innerHTML="";
          //  newdiv4.setAttribute('class', 'color-divs');
          //  color.appendChild(newdiv4);
          //  console.log(newdiv4);
          //
          //  var monday=document.createElement('div');
          //  monday.id="movetext4";
          //  monday.innerHTML=response.forecast.simpleforecast.forecastday[4].date.weekday;
          //  monday.setAttribute('class' ,'text');
          //  color.appendChild(monday);
          //
          //  var newdiv5 = document.createElement('div');
          //  newdiv5.id="wrap5";
          //  newdiv5.innerHTML="";
          //  newdiv5.setAttribute('class', 'color-divs');
          //  color.appendChild(newdiv5);
          //  console.log(newdiv5);
          //
          //  var tuesday=document.createElement('div');
          //  tuesday.id="movetext5";
          //  tuesday.innerHTML=response.forecast.simpleforecast.forecastday[5].date.weekday;
          //  tuesday.setAttribute('class' ,'text');
          //  color.appendChild(tuesday);
          //
          //  var newdiv6 = document.createElement('div');
          //  newdiv6.id="wrap6";
          //  newdiv6.innerHTML="";
          //  newdiv6.setAttribute('class', 'color-divs');
          //  color.appendChild(newdiv6);
          //  console.log(newdiv6);
          //
          //  var wednesday=document.createElement('div');
          //  wednesday.id="movetext6";
          //  wednesday.innerHTML=response.forecast.simpleforecast.forecastday[6].date.weekday;
          //  wednesday.setAttribute('class' ,'text');
          //  color.appendChild(wednesday);





          var templateSource = document.getElementById('character_template').innerHTML;
          var template =Handlebars.compile(templateSource);
          for(var j=0;j<7;j++){
            var display = document.getElementById("data");
            console.log(display);

            var html=template(response.forecast.simpleforecast.forecastday[j]);
            // display.innerHTML = html;// this over writes the previous
            var drop = document.createElement('div');
            drop.classList.add("day"); // Applies CSS to the data
            drop.innerHTML=html;
            console.log(response.forecast.simpleforecast.forecastday[j].conditions);
            //changing color for each div according to the weather
            if (response.forecast.simpleforecast.forecastday[j].conditions=="Clear"){
              drop.style.backgroundColor ='#c6e2ff';
              document.body.style.backgroundImage ="url('vwzPa80.gif')";
              console.log(back);
            }
            if (response.forecast.simpleforecast.forecastday[j].conditions=="Rain"){
              drop.style.backgroundColor ='#00c5ff';
              document.body.style.backgroundImage = "url('vwzPa80.gif')";

            }
            if (response.forecast.simpleforecast.forecastday[j].conditions=="Cloudy"){
              drop.style.backgroundColor ='#7c817f';
              document.body.style.backgroundImage = "url('vwzPa80.gif')";

            }
            if (response.forecast.simpleforecast.forecastday[j].conditions=="Snow Showers"){
              drop.style.backgroundColor ='#c0d6e4';
              document.body.style.backgroundImage = "url('vwzPa80.gif')";
              // drop.style.color ='black';
            }
            if (response.forecast.simpleforecast.forecastday[j].conditions=="Chance of Rain"){
              drop.style.backgroundColor ='#9ce6fb';
              document.body.style.backgroundImage = "url('vwzPa80.gif')";
            }
            if (response.forecast.simpleforecast.forecastday[j].conditions=="Partly Cloudy"){
              drop.style.backgroundColor ='#c0c0c0';
              //back.style.backgroundImage="vwzPa80.gif";
              document.body.style.backgroundImage = "url('vwzPa80.gif')";
            }

            if (response.forecast.simpleforecast.forecastday[j].conditions=="Snow"){
              drop.style.backgroundColor ='#c0d6e4';
              document.body.style.backgroundImage = "url('vwzPa80.gif')";
            }


            display.appendChild(drop);
            console.log('newelement');



          }//end fol loop


        }); //end of ajax


        $.ajax({
        url: somequery,
        }).done(function(response){
        console.log(response);
        console.log(response.current_observation.temperature_string);
        var newtemplateSource = document.getElementById('char_template').innerHTML;
        var template1 =Handlebars.compile(newtemplateSource);
        var display1 = document.querySelector("#head");
        console.log(display1);
        var html1=template1(response.current_observation);
        display1.innerHTML = html1;
        console.log(html1);


      });//AJAX






  }); //CLOSING EVENT LISTERNER


}; //End window onload
