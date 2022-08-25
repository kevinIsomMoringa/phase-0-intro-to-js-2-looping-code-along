// Code your solutions in this file

const name = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"

const writeCards = (nameArray, eventName) => {
    let newArray = []
    for (let i = 0; i < nameArray.length; i++) {
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
        //debugger;
      }
    //console.log(newArray)
    return newArray;
}


console.log(writeCards(name,event))