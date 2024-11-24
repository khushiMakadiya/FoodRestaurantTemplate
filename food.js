let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let headingBx = document.querySelectorAll('.heading_bx');


let a = 0;
rightBtn.addEventListener('.click', () => {
a++;
if(a > headingBx.length - 1) {
    a = 0;
    
    headingBx[0].classList.remove('hide');
    headingBx[headingBx.length - 1].classList.add('hide');
  
  }
     headingBx[a].classList.remove('hide');
     headingBx[a - 1].classList.add('hide');
});

leftBtn.addEventListener('click', ()=> {

  a--;
  if(a < 0) {
      a = headingBx.length - 1;
      headingBx[0].classList.add('hide');
  }

  headingBx[a].classList.remove('hide');
  headingBx[a + 1].classList.add('hide');
});


// NUMBER2.........

let nackBtn = document.querySelector('.nack-btn');
let backBtn = document.querySelector('.back-btn');
let worldBx = document.querySelectorAll('.world_bx');

let c = 0;

backBtn.addEventListener('click', ()=> {

  c++;
  if(c > worldBx.length - 1) {

      c = 0;
      worldBx[0].classList.remove('show');
     worldBx[worldBx.length - 1].classList.add('show');
  }

  worldBx[c].classList.remove('show');
  worldBx[c - 1].classList.add('show');
});

nackBtn.addEventListener('click', ()=> {

  c--;
  if(c < 0) {
      c = worldBx.length - 1;
      worldBx[0].classList.add('show');
  }

  worldBx[c].classList.remove('show');
  worldBx[c + 1].classList.add('show');
});
