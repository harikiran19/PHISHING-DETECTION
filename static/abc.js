
let x = '{{xx}}';
// let country = '{{country}}';
// let city =  '{{city}}';
// let zipcode = '{{zipcode}}';
// let timezone = '{{timezone}}';

// document.getElementById("country").innerHTML = "country :" + country;
// document.getElementById("city").innerHTML = "city :" + city;
// document.getElementById("zipcode").innerHTML = "zipcode :" + zipcode;
// document.getElementById("timezone").innerHTML = "timezone :" + timezone;

let num = x*100;
if (0<=x && x<0.50){
    num = 100-num;z
}
let txtx = num.toString();

// Get the prediction element
var predictionElement = document.getElementById('prediction');

// Get the prediction value
var predictionValue = txtx;

// Add appropriate CSS class based on the prediction value
if (predictionValue > 50) {
predictionElement.classList.add('positive');
} else {
    // Get the element
var element = document.getElementById('prediction');

// Add an ID to the element
element.id = 'prediction2';
predictionElement.classList.add('prediction2');
}



if(x<=1 && x>=0.50){
    var label = "Website is "+txtx +"% safe to use...";
    document.getElementById("prediction").innerHTML = label;
    document.getElementById("prediction").style.color = "green";
    document.getElementById("button1").style.display="block";
}
else if (0<=x && x<0.50){
    var label = "Website is "+txtx +"% unsafe to use..."

    document.getElementById("prediction").innerHTML = label ;
    document.getElementById("prediction").style.color = "red";


    // document.getElementById("button1").style.display="block";
}
