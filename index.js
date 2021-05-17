function callback1_1(callback){
    return callback();
}

function callback1_2(){
    console.log("This is callback function that takes another function as its argument.  Have the function execute the passed function!");
}

function callback2_1(){
    return (function callback2_2(){
        console.log("This is callback function that returns a function.  Have the returned function be executed!");
    })();
}

function callback3_1(callback1, callback2){
    return (Math.floor(Math.random() * 10) % 2 == 0) ? callback1() : callback2();
}

function callback3_2(){
    console.log("I am the first callback!");
}

function callback3_3(){
    console.log("I am the second callback!");
}