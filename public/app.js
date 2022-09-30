console.log('hey from js');

const structure = new XMLHttpRequest();

/*structure.onreadystatechange = () => {

    console.log('READYSTATE ' + structure.readyState + ' ' + structure.responseText);

};*/


structure.open('GET', 'structure.json');
structure.send();

structure.onload = () => {

    var bigHeader = document.createElement('h1');
    var smallHeader = document.createElement('h2');
    
    var headers = JSON.parse(structure.responseText);

    bigHeader.innerHTML = headers.h1;
    smallHeader.innerHTML = headers.h2;

    var divTitle = document.getElementById('title');

    divTitle.appendChild(bigHeader);
    divTitle.appendChild(smallHeader);

    console.log('loaded ' + structure.responseText);

}

//console.log('testing XHR... ')