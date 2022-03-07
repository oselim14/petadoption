// access data from the data file. data is an array of objects.
let data = require('./data');

function zipcodeFilter() {
    let input = 97205
    let filteredList = [];
    for (let i=0; i<data.length; i++){
        if (data[i].zipcode == input){
            filteredList.push(data[i]);
        }
    }
    console.log(filteredList);
}
zipcodeFilter();

function typeFilter(){
    let input = 'Dog';
    let filteredList = [];
    for (let i=0; i < data.length; i++){
        if (data[i].type === input){
            filteredList.push(data[i]);
        }
    }
    console.log(filteredList);
}
typeFilter();