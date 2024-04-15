
var earn_sec = 100;
var not_gay_point = 0;
var score = 0;
var click_value = 1
var earn_sec_value;
function price() {
    score += earn_sec;
    document.getElementById("score").innerText = score;
}

setInterval(price, 1000);

let btn_price = document.querySelectorAll(".price");
btn_price.forEach(btn => {
    btn.addEventListener("click", function() {
        let earnSecElement = this.previousElementSibling;
        earn_sec_value = parseFloat(earnSecElement.innerText);
        score += earn_sec_value;
        document.getElementById("score").innerText = score;
    });
});

var btn_click = document.getElementById("clicker");
btn_click.addEventListener("click", function() {
    score+= click_value;
    document.getElementById("score").innerText = score;
});

let links = document.querySelectorAll("header .navigation a");
links.forEach(link => {
    link.addEventListener("click", async function(event){
        event.preventDefault();
        let href = this.href;
        let data = await fetch(href);
        document.querySelector("#container").innerHTML = await data.text();
        console.log(await data.text);
    });
});

async function start(){
    let data = await fetch("artem.html");
    document.querySelector("#container").innerHTML = await data.text();
}

window.onload = start;

function buy_btn_earn(event) {
    const up_price = parseInt(event.target.getAttribute("data-increase"));

    let price = parseInt(event.target.innerText);

    price *= 1.07;
    
    price = Math.round(price);



    if (score >= price) {

        earn_sec += up_price;


        document.querySelector("#earnn_sec").innerText = earn_sec + "/s";


        score -= price;
        document.getElementById("score").innerText = score;


        event.target.innerText = price;

        console.log(`Прибыль в секунду увеличена до ${earn_sec}`);
    } else {
        alert("хотел заскамить, а не получилось, ботик");
    }
}


function buy_btn_click(event) {
    const up_price = parseInt(event.target.getAttribute("data-student"));

    let price = parseInt(event.target.innerText);
    price *= 1.07;
    price = Math.round(price);

    if (score >= price) {
        
        
        click_value += up_price;
        document.querySelector("#earn_click").innerText = 5 + "/c";
        score -= price; 
        document.getElementById("score").innerText = score;
        event.target.innerText = price;
        console.log(click_value);
       
    } else {
        alert("хотел заскамить, а не получилось, ботик");
    }
    
}