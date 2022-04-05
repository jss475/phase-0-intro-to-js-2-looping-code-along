// Code your solutions in this file

function writeCards(names,event){
    const message = [];
    for(let i=0; i < names.length; i++){
        message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return message
}

function countDown(num){
    while(num >= 0){
        console.log(num)
        num--;
    }
}