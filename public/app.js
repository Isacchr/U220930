
const structure = new XMLHttpRequest();

structure.open('GET', 'structure.json');
structure.send();

const carList = new XMLHttpRequest();

carList.open('GET', 'cars.json');
carList.send();

structure.onload = () => {

    var divTitle = document.getElementById('title');

    var headers = JSON.parse(structure.responseText);

    for ( var key in headers) {

        var header = document.createElement(key);

        header.innerHTML = headers[key];

        divTitle.appendChild(header)

    }

}

carList.onload = () => {

    var ulList = document.getElementById('carList');

    var cars = JSON.parse(carList.responseText);

    cars.cars.forEach(car => {

        
        var listElements = document.createElement('li');

        carInfo = JSON.stringify(car);

        listElements.innerHTML = (`${car.Brand} ${car.Modell} ${car.Year}`);

        ulList.appendChild(listElements);

    });

}

hideList = () => {

    divCarList.hidden = false;

}

