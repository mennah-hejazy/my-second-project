let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let ship = document.querySelector('.ship');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value +'px';
    boat.style.left = value * 6 + 'px'; 
    ship.style.fontSize = value +'px'; 
    if(scrollY >= 78){
        ship.style.fontSize = 78 +'px'; 
        ship.style.position = 'fixed';
    }
    if (scrollY >= 400){
        ship.style.display = 'none';
    }
    else{
        ship.style.display = 'block';
    }
    if (scrollY >= 225){
        document.querySelector('.main').style.background ='linear-gradient(#a7a0ef, #10001f)'; 
        
    }
    else{
        document.querySelector('.main').style.background ='linear-gradient(#200016, #10001f)'; 
    }
}