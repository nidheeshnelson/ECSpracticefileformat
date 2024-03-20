const names = ["Nidheesh Nelson", "Braji UM", "Nidhin Nelson", "Preethi TP", "Nimin Das", "Anila", "Nikhil Das"];
const jsonString = JSON.stringify(names);
console.log(names);
console.log(jsonString);
const person = {
    "name": "Nidheesh Nelson",
    "age": 32,
    "isEmployed": true,
    "hobbies": ["bible read", "study"]
};
const personstring = JSON.stringify(person);
console.log(person);
console.log(personstring);
const people=[
    {
        "name": "Nidheesh Nelson",
        "age": 32,
        "isEmployed": true
    },
    {
        "name": "Nidhin Nelson",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Nimin Das",
        "age": 27,
        "isEmployed": true
    },
    {
        "name": "Nikhil Das",
        "age": 22,
        "isEmployed": false
    }
];
const peoplestring=JSON.stringify(people);
console.log(people);
console.log(peoplestring);