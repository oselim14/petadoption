// access data from the data file. data is an array of objects.
const { read } = require('fs');
let data = require('./data');
//use readline to gain user input over what they want to filter for
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What pets are you looking for? ', input => {
    //regex for zipcode having only numbers
    let zip = /^\d+$/;
    //regex for type having only letters
    let type = /^[A-Za-z]+$/;

    //if input matches only numbers, then run the zipcode function
    if (input.match(zip)) {
        function zipcodeFilter() {
            let filteredList = [];
            //iterate through the data and see if data at that index's zipcode is equal to the input zipcode.
            // if the zipcode is equal to the input, push this to the filtered list.
            for (let i = 0; i < data.length; i++) {
                if (data[i].zipcode == input) {
                    filteredList.push(data[i]);
                }
            }
            console.log(filteredList);
            //print out the filtered list
        }
        //initiate the function
        zipcodeFilter();
    }

    //if input matches only letters, then run the type filter
    else if (input.match(type)) {
        function typeFilter() {
            let filteredList = [];
            //iterate through the data and see if data at that index's type is equal to the input type.
            // if the type is equal to the input, push this to the filtered list.
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === input) {
                    filteredList.push(data[i]);
                }
            }
            console.log(filteredList);
            //print out the filtered list
        }
        //Initiate the function
        typeFilter();
    }

    //otherwise try running bothfilter for the zipcode and type
    else {
        function bothFilter() {
            let filteredList = [];
            // iterate through data to see if the zipcode and type are the same as the input zipcode and type
            for (let i = 0; i < data.length; i++) {
                if (input.includes(data[i].zipcode) && input.includes(data[i].type)) {
                    filteredList.push(data[i]);
                }
            }
            //print the filtered list
            console.log(filteredList);
        }
        //initiate the function
        bothFilter();
    }

    readline.close();
});


// I had a difficult time intaking the pet data without a database or front end,
// so I made it into an array that can be added to if more data is needed. 
// This is not the most efficient way, but I'm not sure how to better do it without a db or front edn. 

//As of now the type function only works with exact capitalization and spelling,
// but I think if I had more time I could add a function that makes it work without case sensitivity.

// if there is nothing in the data that matches the input, it will return an empty array.