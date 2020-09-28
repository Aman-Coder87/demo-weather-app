const box1 = document.querySelector('.box1');
const date = document.getElementById('date');
const loc = document.getElementById('location');
const country = document.getElementById('country');
const temp = document.getElementById('temp');
const minTemp = document.getElementById('minTemp');
const maxTemp = document.getElementById('maxTemp');


anime({
  targets: box1,
  loop: true,
  translateX: {
    value: '*=2.5', // 100px * 2.5 = '250px'
    duration: 3000
  },
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 3600,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 3600,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});


let getCurrentDay = () => {

    let date = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sa";

    let day = weekday[date.getDay()];
    return day;

};

let getCurrentDate = () => {

    let date = new Date();

    let month = ['Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'];

    let months = month[date.getMonth() + 1];
    let days = date.getDate();
    return `${months} / ${days}`;

};

let getCurrentTime = () => {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM': 'AM';
    hours = hours % 12;
    hours = hours ? hours: 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes: minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;

};

date.innerHTML = ` ${getCurrentDay()} | ${getCurrentDate()} | ${getCurrentTime()}`;


async function final() {
    
    let api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bajrabarahi&appid=7f6480c0040676cf62c7fa294ca443aa');
    let jsonData = await api.json();
    loc.innerHTML = jsonData.name;
    country.innerHTML = jsonData.sys.country;
    let kelvin = jsonData.main.temp;
    let kelvin1 = jsonData.main.temp_min;
    let kelvin2 = jsonData.main.temp_max;
    temp.innerHTML = Math.round(kelvin - 273.15);
    minTemp.innerHTML = Math.round(kelvin1 - 273.15);
    maxTemp.innerHTML = Math.round(kelvin2 - 273.15);
    
}

final();