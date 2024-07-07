const eziw = document.querySelector('.eziw');
const cactus = document.querySelector('.cactus');

const jump = () =>{ 
    eziw.classList.add('jump');

    setTimeout(()=>{
        eziw .classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    const cactusPosition = cactus.offsetLeft;
    const eziwPosition = +window.getComputedStyle(eziw).bottom.replace('px','');

    if (cactusPosition <= 80 && cactusPosition > 0 && eziwPosition < 80){

        cactus.style.animation = 'none';
        cactus.style.left = `${cactusPosition}px`;

        eziw.style.animation = 'none';
        eziw.style.left = `${eziwPosition}px`;

        eziw.src = './images/explosion.gif';
        eziw.style.width = '85px'
        eziw.style.marginLeft = '20px'
  
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);