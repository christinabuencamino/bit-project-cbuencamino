const listOfTenPeople = [
    {
        name: 'Pesho',
        age: 20,
        city: 'Sofia'
    },
    {
        name: 'Gosho',
        age: 22,
        city: 'Plovdiv'
    },
    {
        name: 'Kamil',
        age: 19,
        city: 'Varna'
    },
    {
        name: 'Gosha',
        age: 18,
        city: 'Burgas'
    },
    {
        name: 'Mihail',
        age: 19,
        city: 'Sofia'
    },
    {
        name: 'Ivan',
        age: 20,
        city: 'Varna'
    },
    {
        name: 'Haralampi',
        age: 21,
        city: 'Varna'
    },
    {
        name: 'Mihailo',
        age: 20,
        city: 'Sofia'
    },
    {
        name: 'Kamal',
        age: 19,
        city: 'Plovdiv'
    },
    {
        name: 'Haralampi',
        age: 21,
        city: 'Burgas'
    }
];

const peopleDiv = $("#People").first()

console.log(peopleDiv)

for (var person of listOfTenPeople) {
    console.log(person);
    const div = $(`<div><div> ${person.name} </div> <div class="details"> ${person.age} </div> <div class="details"> ${person.city} </div></div>`)
    div.click(function(){
        div.toggleClass("showDetails")
    });

   peopleDiv.append(div) 
}

