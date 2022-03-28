// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);
let thankYouCards = [];

function writeCards(names, eventName){
    for (let i=0; i < names.length; i++){
        thankYouCards[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        console.log(thankYouCards[i]);
       
    }
    return thankYouCards;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(numba){
    let i=0;
    while(i<numba+1){
        console.log(numba);
        numba--;
        debugger;
    }
}

countDown(10);
