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
console.log(personstring)