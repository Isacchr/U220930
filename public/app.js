console.log('hey from js');

const structure = new XMLHttpRequest();

/*structure.onreadystatechange = () => {

    console.log('READYSTATE ' + structure.readyState + ' ' + structure.responseText);

};*/

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

    console.log('loaded ' + structure.responseText);

}

carList.onload = () => {

    var ulList = document.getElementById('carList');

    var cars = JSON.parse(carList.responseText);

    for ( var key in cars) {

        var listElements = document.createElement('li');

        listElements.innerHTML = cars[key];

        ulList.appendChild(listElements);

    }
}

hideList = () => {

    divCarList.hidden = false;

}

