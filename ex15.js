//https://www.w3schools.com/js/js_function_definition.asp
function handleClickNumber(){
    let x = document.getElementById("input").value;
    document.getElementById("btn1").innerHTML=x;
    //console.log(x);
}
function handleCheckWeather(){
let weather =document.getElementById("temp").value ;
  if (weather < 32){
    document.getElementById("weather").innerText="freezing weather";
 }
 else if ( weather<=41){
   
       document.getElementById("weather").innerText="Very cold weatehr";
    
 }
 else if ( weather<=51){
    document.getElementById("weather").innerText="cold weather";
 }
 else if (weather<=61){
    document.getElementById("weather").innerText="It's nice today";
 }
 if (weather > 61){
    document.getElementById("weather").innerText="It's warm today!";
 }

}





