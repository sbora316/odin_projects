let count=0;
let timer;

const startBtn = document.getElementById("startbtn");
startBtn.onclick =  start;

const resetBtn= document.getElementById("resetbtn");
resetBtn.onclick =  reset;

function Counter(){
    count++
    document.getElementById("sw").textContent=count;

};

function start() {
    if(!timer){
        timer=setInterval(Counter,1000);
    }
}

function reset() {
    clearInterval(timer);
    timer = null;
    count= 0;
    document.getElementById("sw").textContent = count;
};



