const licznik = document.querySelector(".licznik");
const button = document.querySelector(".przycisk")
const scp = document.getElementById('scp');

document.addEventListener('mousemove', function(e) {
    const x = e.clientX - 40;
    const y = e.clientY + 20;
  
    scp.style.left = x + 'px';
    scp.style.top = y + 'px';
  });

let ladowanie = 0;
licznik.innerText = ladowanie;

button.onclick = add;

function add(){
    if(ladowanie < 100){
        if(ladowanie % 4 == 0)
            ladowanie += 7;
        else if(ladowanie % 4 == 1)
            ladowanie += 3;
        else if(ladowanie % 4 == 2)
            ladowanie += 1;
        else if(ladowanie % 4 == 3)
            ladowanie += 2;
    }

    if(ladowanie >= 100)
        ladowanie = 100;

    licznik.innerText = ladowanie;
    if(ladowanie >= 100){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
    }
}

