let welcome = document.getElementById('welcome');
const greetings = ['WELCOME!', 'NDEWO', 'BIENVENUE', 'KAABO'];
let i = 0;
setInterval(() => {
        greetings.forEach(greeting => {
          welcome.innerText = greetings[i];      
        })
        i = (i + 1) % greetings.length;
}, 2000);




let date = new Date();
let date_hours = date.getHours();
date_minutes = date.getMinutes();


let currently = document.getElementById('currently');
let body = document.getElementById('body');
const colours = ['Blue', 'Yellow', 'Green', 'Red'];

function checkTime() {
        let i = 0;
        if (date_hours == 5 || date_hours <= 11 && date_minutes <= 59) {
                body.style.backgroundColor = colours[i];
                currently.innerText = 'Good Morning!';     
        } else if (date_hours == 12 || date_hours <= 16 && date_minutes <= 59) {
                currently.innerText = 'Good Afternoon!';
                body.style.backgroundColor = colours[i + 1];
        } else if (date_hours == 17 || date_hours <= 20 && date_minutes <= 59) {
                body.style.backgroundColor = colours[i + 2];
        } else if (date_hours == 21 || date_hours <= 4 && date_minutes <= 59) {
                body.style.backgroundColor = colours[i + 3];
        }
}

