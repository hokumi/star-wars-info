var urls = [];
var cardData = [];
var cardDataTogether = [];
const people = {
    id: 9,
    name: 'people',
    number: 1,
    getUrl: function (){
        loading();
        urls = [];
        for (i = 1; i <= this.id; i++){
            var names = 'https://swapi.co/api/' + this.name + '/?page=' + i;
            urls.push(names);
        }
        getDataPeople();
    },
};

const planets = {
    id: 7,
    name: 'planets',
    number: 2,
    getUrl: function (){
        loading();
        urls = [];
        for (i = 1; i <= this.id; i++){
            var names = 'https://swapi.co/api/' + this.name + '/?page=' + i;
            urls.push(names);
        }
        getDataPlanets();
    },
};

const films = {
    id: 1,
    name: 'films',
    number: 3,
    getUrl: function (){
        loading();
        urls = [];
        for (i = 1; i <= this.id; i++){
            var names = 'https://swapi.co/api/' + this.name + '/?page=' + i;
            urls.push(names);
        }
        getDataFilms();
    },
};

const species = {
    id: 4,
    name: 'species',
    number: 4,
    getUrl: function (){
        loading();
        urls = [];
        for (i = 1; i <= this.id; i++){
            var names = 'https://swapi.co/api/' + this.name + '/?page=' + i;
            urls.push(names);
        }
        getDataSpecies();
    },
};

const vehicles = {
    id: 4,
    name: 'vehicles',
    number: 5,
    getUrl: function (){
        loading();
        urls = [];
        for (i = 1; i <= this.id; i++){
            var names = 'https://swapi.co/api/' + this.name + '/?page=' + i;
            urls.push(names);
        }
        getDataVehicles();
    },
};

const starships = {
    id: 4,
    name: 'starships',
    number: 6,
    getUrl: function (){
        loading();
        urls = [];
        for (i = 1; i <= this.id; i++){
            var names = 'https://swapi.co/api/' + this.name + '/?page=' + i;
            urls.push(names);
        }
        getDataStarships();
    },
};

const getDataPeople = async function() {
    cardData = [];
    cardDataTogether = [];
    var data = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            const value = response.json();
            return value;
        }));
    for(i=0; i < data.length; i++){
         cardData.push(data[i].results)
    }
    for(i=0; i < cardData.length; i++){
        cardDataTogether = cardDataTogether.concat(cardData[i]);
    }
    function createCards(obj) {
        clearCards();
        obj = cardDataTogether;
        for(i=0; i < obj.length; i++){
            var card = document.createElement("div");
            card.classList.add("cards");
            card.innerHTML = `<h2>Name</h2>
            <p>${obj[i].name}</p>
            <h2>Birth Year</h2>
            <p>${obj[i].birth_year}</p>
            <h2>Gender</h2>
            <p>${obj[i].gender}</p>
            <h2>Height</h2>
            <p>${obj[i].height} cm</p>
            <h2>Mass</h2>
            <p>${obj[i].mass} kg</p>
            <h2>Skin Color</h2>
            <p>${obj[i].skin_color}</p>`
            var post = document.getElementById("content-box");
            post.appendChild(card);
        }
    };
    createCards();
};

const getDataFilms = async function() {
    cardData = [];
    cardDataTogether = [];
    var data = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            const value = response.json();
            return value;
        }));
    for(i=0; i < data.length; i++){
         cardData.push(data[i].results)
    }
    for(i=0; i < cardData.length; i++){
        cardDataTogether = cardDataTogether.concat(cardData[i]);
    }
    function createCards(obj) {
        clearCards();
        obj = cardDataTogether;
        for(i=0; i < obj.length; i++){
            var card = document.createElement("div");
            card.classList.add("cards");
            card.innerHTML = `<h2>Title</h2>
            <p>${obj[i].title}</p>
            <h2>Director</h2>
            <p>${obj[i].director}</p>
            <h2>Producer(s)</h2>
            <p>${obj[i].producer}</p>
            <h2>Release Date</h2>
            <p>${obj[i].release_date}</p>`
            var post = document.getElementById("content-box");
            post.appendChild(card);
        }
    };
    createCards();
};

const getDataStarships = async function() {
    cardData = [];
    cardDataTogether = [];
    var data = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            const value = response.json();
            return value;
        }));
    for(i=0; i < data.length; i++){
         cardData.push(data[i].results)
    }
    for(i=0; i < cardData.length; i++){
        cardDataTogether = cardDataTogether.concat(cardData[i]);
    }
    function createCards(obj) {
        clearCards();
        obj = cardDataTogether;
        for(i=0; i < obj.length; i++){
            var card = document.createElement("div");
            card.classList.add("cards");
            card.innerHTML = `<h2>Name</h2>
            <p>${obj[i].name}</p>
            <h2>Model</h2>
            <p>${obj[i].model}</p>
            <h2>Class</h2>
            <p>${obj[i].starship_class}</p>
            <h2>Size</h2>
            <p>${obj[i].length} meters</p>
            <h2>Crew</h2>
            <p>${obj[i].crew}</p>
            <h2>Max. Travel Span</h2>
            <p>${obj[i].consumables}</p>`
            var post = document.getElementById("content-box");
            post.appendChild(card);
        }
    };
    createCards();
};


const getDataVehicles = async function() {
    cardData = [];
    cardDataTogether = [];
    var data = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            const value = response.json();
            return value;
        }));
    for(i=0; i < data.length; i++){
         cardData.push(data[i].results)
    }
    for(i=0; i < cardData.length; i++){
        cardDataTogether = cardDataTogether.concat(cardData[i]);
    }
    function createCards(obj) {
        clearCards();
        obj = cardDataTogether;
        for(i=0; i < obj.length; i++){
            var card = document.createElement("div");
            card.classList.add("cards");
            card.innerHTML = `<h2>Name</h2>
            <p>${obj[i].name}</p>
            <h2>Model</h2>
            <p>${obj[i].model}</p>
            <h2>Class</h2>
            <p>${obj[i].vehicle_class}</p>
            <h2>Manufacturer</h2>
            <p>${obj[i].manufacturer}</p>
            <h2>Size</h2>
            <p>${obj[i].length} meters</p>
            <h2>Crew</h2>
            <p>${obj[i].crew}</p>`
            var post = document.getElementById("content-box");
            post.appendChild(card);
        }
    };
    createCards();
};


const getDataSpecies = async function() {
    cardData = [];
    cardDataTogether = [];
    var data = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            const value = response.json();
            return value;
        }));
    for(i=0; i < data.length; i++){
         cardData.push(data[i].results)
    }
    for(i=0; i < cardData.length; i++){
        cardDataTogether = cardDataTogether.concat(cardData[i]);
    }
    function createCards(obj) {
        clearCards();
        obj = cardDataTogether;
        for(i=0; i < obj.length; i++){
            var card = document.createElement("div");
            card.classList.add("cards");
            card.innerHTML = `<h2>Name</h2>
            <p>${obj[i].name}</p>
            <h2>Class</h2>
            <p>${obj[i].classification}</p>
            <h2>Designation</h2>
            <p>${obj[i].designation}</p>
            <h2>Avg. Height</h2>
            <p>${obj[i].average_height}</p>
            <h2>Avg. Lifespan</h2>
            <p>${obj[i].average_lifespan}</p>
            <h2>Language</h2>
            <p>${obj[i].language}</p>`
            var post = document.getElementById("content-box");
            post.appendChild(card);
        }
    };
    createCards();
};

const getDataPlanets = async function() {
    cardData = [];
    cardDataTogether = [];
    var data = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            const value = response.json();
            return value;
        }));
    for(i=0; i < data.length; i++){
         cardData.push(data[i].results)
    }
    for(i=0; i < cardData.length; i++){
        cardDataTogether = cardDataTogether.concat(cardData[i]);
    }
    function createCards(obj) {
        clearCards();
        obj = cardDataTogether;
        for(i=0; i < obj.length; i++){
            var card = document.createElement("div");
            card.classList.add("cards");
            card.innerHTML = `<h2>Name</h2>
            <p>${obj[i].name}</p>
            <h2>Diameter</h2>
            <p>${obj[i].diameter} km</p>
            <h2>Gravity</h2>
            <p>${obj[i].gender} G</p>
            <h2>Population</h2>
            <p>${obj[i].population}</p>
            <h2>Climate</h2>
            <p>${obj[i].climate}</p>
            <h2>Terrain</h2>
            <p>${obj[i].terrain}</p>`
            var post = document.getElementById("content-box");
            post.appendChild(card);
        }
    };
    createCards();
};

function loading() {
    clearCards();
    display();
    var msg = document.createElement("div");
    msg.innerHTML = `<div class="loader"></div><p id="load">Loading...</p>`

    var element = document.getElementById("content-box");
    element.appendChild(msg);
}

function clearCards() {
    var box = document.getElementById("content-box");
    box.innerHTML = "";
}

function display() {
    var previousBox = document.getElementById("initial");
    previousBox.style.display = "none";
    var box = document.getElementById("content-box");
    box.style.display = "flex";
}