const jsonnames = `["Nidheesh Nelson", "Braji UM", "Nidhin Nelson", "Preethi TP", "Nimin Das", "Anila", "Nikhil Das"]`;
const jsonperson = `{
    "name": "Nidheesh Nelson",
    "age": 32,
    "isEmployed": true,
    "hobbies": ["bible read", "study"]
}`;
const jsonpeople=`[
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
]`;
const parsenames =JSON.parse(jsonnames);
const parseperson =JSON.parse(jsonperson);
const parsepeople =JSON.parse(jsonpeople);
console.log(parsenames);
console.log(parseperson);
console.log(parsepeople);