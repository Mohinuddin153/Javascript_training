const hourHand = document.querySelector('#hour-hand')
const minuteHand = document.querySelector('#minute-hand')
const secondHand = document.querySelector('#second-hand')

class clock {
    constructor(currentDate) {
        this.hour = currentDate.getHours();
        this.minute = currentDate.getMinutes();
        this.second = currentDate.getSeconds();
    }
    display() {
        setInterval(() => {
            const secondsRatio = this.second++ / 60
            const minutesRatio = (secondsRatio + this.minute) / 60
            const hoursRatio = (minutesRatio + this.hour) / 12
            this.setRotation(secondHand, secondsRatio)
            this.setRotation(minuteHand, minutesRatio)
            this.setRotation(hourHand, hoursRatio);
        }, 1000)
    }
    setRotation(hand, rotationRatio) {
        hand.style.setProperty('--rotation', rotationRatio * 360)
    }
}
const currentDate = new Date()
// currentDate.setHours(3,25)
let obj= new clock(currentDate);
obj.display()