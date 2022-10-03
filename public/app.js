
const structure = new XMLHttpRequest();

structure.open('GET', 'structure.json');
structure.send();

const carsJSON = new XMLHttpRequest();

carsJSON.open('GET', 'cars.json');
carsJSON.send();

structure.onload = () => {

    var divTitle = document.getElementById('title');

    var headers = JSON.parse(structure.responseText);

    for ( var key in headers) {

        var header = document.createElement(key);

        header.innerHTML = headers[key];

        divTitle.appendChild(header)

    }

}


hideList = () => {

    divCarList.hidden = false;

    var ulList = document.getElementById('carUlList');
    ulList.innerHTML = '';

    var cars = JSON.parse(carsJSON.responseText);

    cars.cars.forEach(car => {

        var listElements = document.createElement('li');

        listElements.innerHTML = (`${car.Brand} - ${car.Modell} - ${car.Year}`);

        ulList.appendChild(listElements);

    });

}

