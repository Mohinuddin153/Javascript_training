
const hourHand = document.querySelector('#hour-hand')
const minuteHand = document.querySelector('#minute-hand')
const secondHand = document.querySelector('#second-hand')
var ss=1000;
var interval;
export class clock {
    constructor(currentDate) {
        this.hour = currentDate.getHours();
        this.minute = currentDate.getMinutes();
        this.second = currentDate.getSeconds();
    }
    display=() =>{
        const secondsRatio = this.second++ / 60
        const minutesRatio = (secondsRatio + this.minute) / 60
        const hoursRatio = (minutesRatio + this.hour) / 12
        this.setRotation(secondHand, secondsRatio)
        this.setRotation(minuteHand, minutesRatio)
        this.setRotation(hourHand, hoursRatio);
    }
    setRotation(hand, rotationRatio) {
        hand.style.setProperty('--rotation', rotationRatio * 360)
    }
}
const currentDate = new Date()

let obj= new clock(currentDate);
time(obj)
function time(obj){
        clearInterval(interval)
        interval=setInterval(obj.display,ss)
}
export {time,currentDate}
