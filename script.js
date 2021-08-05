const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMilionairesBtn = document.getElementById('show-milionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();


//fetch random usert and add money
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    console.log(newUser);

    addData(newUser);
}

//Add new object to data arr
function addData(obj){
    data.push(obj);

    updateDOM(data);
}

//update DOM
function updateDOM(providedData = data){
    //clear the main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>${formateMoney(item.money)}`;
        main.appendChild(element);
    });
}

//formate number as money

function formateMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event listeners
addUserBtn.addEventListener('click', getRandomUser);