/*import 'animate.css';*/

const key = "5b5553bee4de4bf6d388ebc779eb38f9"

async function searchCity(input) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`).then(response => response.json())

    dataScreen(data)

}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchActions();
    }
}


function searchClick() {
    const input = document.querySelector(".input").value

    searchCity(input)
}

function dataScreen(data) {
    console.log(data)
    document.querySelector(".city-name").innerHTML = "Weather Today in " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "˚"
    document.querySelector(".textWheather").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Humidity " + data.main.humidity + "%"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}


function landscapeClick() {
    const backgroundElement = document.querySelector(".background");
    const randomNumber = Math.floor(Math.random() * 1000); // Gerar um número aleatório para evitar cache
    backgroundElement.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape&${randomNumber}')`;
}



/*

function searchHide() {
    // Oculta o botão "Change the Landscape"
    document.querySelector('.button-landscape').style.display = 'none';

    // Oculta a div com a classe "b-box"
    document.querySelector('.b-box').style.display = 'none';

    // Exibe a div com a classe "a-box"
    document.querySelector('.a-box').style.display = 'block';
}

function searchShow(){

    // Oculta o botão "Change the Landscape"
    document.querySelector('.button-landscape').style.display = 'block';

    // Oculta a div com a classe "b-box"
    document.querySelector('.b-box').style.display = 'block';

    // Exibe a div com a classe "a-box"
    document.querySelector('.a-box').style.display = 'none';
}

*/

function searchHide() {
    document.querySelector('.b-box').classList.remove('visible');
    document.querySelector('.b-box').classList.add('hidden');
    document.querySelector('.a-box').classList.remove('hidden');
    document.querySelector('.a-box').classList.add('visible');
}

function searchShow(){
    document.querySelector('.b-box').classList.remove('hidden');
    document.querySelector('.b-box').classList.add('visible');
    document.querySelector('.a-box').classList.remove('visible');
    document.querySelector('.a-box').classList.add('hidden');
}

function searchActions() {
    searchClick();
    searchHide();
    
}

const buttonSearch = document.querySelector('.button-search');

buttonSearch.addEventListener('mouseover', function() {
    this.classList.add('hovered');
});

buttonSearch.addEventListener('mouseout', function() {
    this.classList.remove('hovered');
});