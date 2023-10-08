let one = "You've got this"
let two = "Your efforts are valued"
let three = "You make a difference"
let four = "You're stronger than you think"
let five = "Your potential is limitless"
let six = "You are deserving of love"

const affirmations = [one,two,three,four,five,six]

const affirm = () =>{ 
const rand = Math.floor(Math.random() * affirmations.length)
return affirmations[rand]
}

console.log(affirm())