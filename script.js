window.onload = init;

var pickCountry = '';

function init(){
    document.getElementById('country').addEventListener('click',getData,false);
    document.getElementById('tryName').addEventListener('click',getCountryName,false);
}

function getData(){
    var xhr = new XMLHttpRequest();
    xhr.onload = readData;
    xhr.open('get','https://restcountries.eu/rest/v2/all',true);
    xhr.send();
}

function getCountryName(){
    var countryName = document.getElementById('countryName').value;
    var userWord = '';
    
    for(var i=0; i<pickCountry.name.length; i++){
        if(i >= countryName.length){
           break;
        }
        if(countryName[i] == pickCountry.name[i]){
           userWord += countryName[i];
        }
        else{
            userWord += '_';
        }
    }
    if(countryName == pickCountry.name){
           alert("Congratulations, you have successfully guessed the name of the country");
        }
    document.getElementById('output').innerHTML = userWord;
}

function readData(){
    var allData = JSON.parse(this.responseText);
    pickCountry = allData[Math.floor(Math.random()*allData.length)];
    var word = '';
    for(var i=0; i<pickCountry.name.length; i++){
        word += '_';
    }
    document.getElementById('flag').src = pickCountry.flag;
    document.getElementById('output').innerHTML = word;
}