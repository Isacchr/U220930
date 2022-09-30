console.log('hey from js');

const structure = new XMLHttpRequest();

/*structure.onreadystatechange = () => {

    console.log('READYSTATE ' + structure.readyState + ' ' + structure.responseText);

};*/

structure.open('GET', 'structure.json');
structure.send();


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

//console.log('testing XHR... ')