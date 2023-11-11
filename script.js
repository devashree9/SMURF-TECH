
// variables

let workTittle=document.getElementById('work'); 
let breakTittle=document.getElementById('break');

let workTime=25;
let breakTime= 5;

let seconds = "00"

// display

window.onload = () => {

document.getElementById('minutes').innerHTML= workTime; 
document.getElementById('seconds').innerHTML = seconds;

workTittle.classList.add('active');

}

// start timer
function start() {
    document.getElementById('start').style.display= "none"
    document.getElementById('reset').style.display= "block"
// dchange the time

seconds = 59;

let workMinutes = workTime - 1;
let breakMinutes = breakTime - 1;

breakCount = 0;

// countdown

  let timerFunction=() =>{
     document.getElementById('minutes').innerHTML= workMinutes; 
     document.getElementById('seconds').innerHTML = seconds;

     seconds=seconds-1;

       if(seconds===0){
         workMinutes = workMinutes-1;
         if(workMinutes===-1){
             if(breakcount%2===0){
                workMinutes= breakMinutes;
                breakcount++

                workTittle.classlist.remove('active');
                breakTittle.classList.add('active');
            }else{
                workMinutes=workTime;
                breakcount++

                workTittle.classlist.remove('active');
                breakTittle.classList.add('active');
            }
        }seconds=59
    }
    
}
setInterval(timerFunction,1000);
}
