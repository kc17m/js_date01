// lev 1_1

let output = document.getElementById("output")

let date1 = new Date();
let date2 = new Date("September 2, 2019 09:00:00");
let date3 = new Date(0);
let date4 = new Date(31556908800);
let date5 = new Date(86400000)

output.innerHTML += `${date1} <br> ${date2} <br> ${date3} <br> ${date4} <br> ${date5}`;


// lev1_2
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let output2 = document.getElementById("output2");

output2.innerHTML += `${date1} <br> ${date1.getFullYear()} <br> ${date1.getMonth()} ${monate[date1.getMonth()]} <br> ${date1.getDay()} Tag <br> ${date1.getHours()} Stunde <br> ${date1.getMinutes()} Minute <br> ${wochenTag[date1.getDay()]} <br> ${monate[date1.getMonth()]}`;

//lev1_6
let output3 = document.getElementById("output3");

// let am_pm = (time => {
//     console.log("test");
//     time.getHours() > 12 ? console.log(time.getHours()) 
// });

let am_pm = (time => {
    console.log("test");
    (time.getHours() > 12) ? output3.innerHTML = `AM` : output3.innerHTML = `PM`;
})

console.log(am_pm(new Date(1999, 10, 5, 5)));
console.log(am_pm(new Date()));
console.log(am_pm(new Date(2019, 12, 3, 12)));
console.log(am_pm(new Date(2000, 1, 1, 11)));


//lev1_7

let istWeekend = (dat) => {
    let res;
    new Date(dat).getDay() == 0 || new Date(dat).getDay() == 6 ? res = "Weekend" : res = "Arbeitstag";
    return res;
}

console.log(istWeekend(new Date("February 27, 2022")));

console.log(istWeekend("15, 12, 2019"));
console.log(istWeekend("16-2-2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("29, 2, 2020"));


//lev1_8

//Zeit zeigen
// setInterval(function () {
//     var date = new Date();
//     var zeit = date.toLocaleTimeString();
//     console.log(zeit);
// }, 1000);

var i = 10;
let interval = setInterval(function () {
    console.log(i--);
    if (i < 0) {
        clearInterval(interval);
    }
}, 1000);

//lev1_9

let txt = document.getElementById("txt");


function startTime() {
    let today = new Date();
    let heute = today.getDate();
    let month = today.getMonth();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    txt.innerHTML = `
    heute: ${heute}. ${monate[date1.getMonth()]}<br>
    ${hour}:${min}:${sec} Uhr<br>
    `
    setTimeout(startTime, 1000);
}

