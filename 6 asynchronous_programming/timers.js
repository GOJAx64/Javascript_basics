//setTimeOut and setInterval

let timer = setTimeout(() =>{
    console.log('Executing setTimeOut, this runs once after 3 seconds has passed');
},3000);

let timer2 = setInterval(() => {
    console.log('Executing setInterval, this runs each second ' + new Date().toLocaleTimeString());
},1000);

clearTimeout(timer);
clearInterval(timer2);