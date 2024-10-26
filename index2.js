// list
const start = document.querySelector('button');
const ul = document.querySelector('ul');
// slider
const leftButtom = document.querySelector('.left');
const rightButtom = document.querySelector('.right');
const slider = document.querySelector('.slider');
const allButtoms = document.querySelectorAll('button');
const boxs = document.querySelectorAll('.box');
// // leason
// const messengeList = document.querySelector('.events');
// const makeBack = document.querySelector('.sand-messenge');
// const lesson1 = document.querySelector('.lesson1');
// - - function - - - - - - - - - - - - - - - -
const removeYellow = () => {
  allButtoms.forEach(but => {
    but.classList.remove('yellow');
  });
}
const removeHiden = () => {
  for (let box of boxs) {
    box.classList.remove('hiden');
  }
}
const writeData = (event) => {
  while (true) {
    let tempText = prompt('Enter new dataline:', '');
    if (!tempText) break;
    let li = document.createElement('li');
    li.textContent = tempText;
    ul.append(li);
  }
}
function leftSlide(event) {
  leftButtom.classList.add('yellow');
  for (let box of boxs) {
    box.style.left = (+box.style.left.slice(0, -2) - 140) + 'px';
    if (box.style.left === '-280px') {
      box.style.left = `${(i-1)*140}px`;
      box.classList.add('hiden');
    }
    setTimeout(removeYellow, 100);
    setTimeout(removeHiden, 500);
  }
}
function rightSlide(event) {
  rightButtom.classList.add('yellow');
  for (let box of boxs) {
    box.style.left = (+box.style.left.slice(0, -2) + 140) + 'px';
    if (box.style.left === `${i*140}px`) { 
      box.style.left = '-140px';
      box.classList.add('hiden');
    }
  }
  setTimeout(removeYellow, 100);
    setTimeout(removeHiden, 400);
}
// - - - events - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let i = -1;
for (let box of boxs) {
  i++;
  box.style.left = i * 140 + 'px';
}
boxs[i].style.left = '-140px';
start.addEventListener('click', writeData);
leftButtom.addEventListener('click', leftSlide);
rightButtom.addEventListener('click', rightSlide);

// // leasons
// messengeList.onclick = function(event) {
//   let target = event.target;
//   if (target.className != 'close-button') return;
//   target.parentNode.classList.add('hiden');
// }
// makeBack.onclick = function(event) {
//   let lostMessenge = document.querySelector('.hiden');
//   lostMessenge.classList.remove('hiden');
// }
// lesson1.onclick = function(event) {
//   let li = event.target;
//   if (li.parentElement.nextElementSibling.tagName === 'UL') li.parentElement.nextElementSibling.classList.toggle('hiden');
// }
// podzkazki
function togglePod(event) {
  let elemTarget = event.target;
  let puk = elemTarget.dataset.tooltip;
  if (!puk) return;
  let elem = document.querySelector(`.${puk}`);
  console.log('before:', elem.style.left, elem.style.top);
  elem.style.left = `${elemTarget.getBoundingClientRect().x}px`;
  elem.style.top = `${elemTarget.getBoundingClientRect().y - elemTarget.getBoundingClientRect().height/2 - 5}px`;
  if (elemTarget.getBoundingClientRect().top < 2*elemTarget.getBoundingClientRect().height) {
    elem.style.top = `${elemTarget.getBoundingClientRect().y + elemTarget.getBoundingClientRect().height + 5}px`;}
  console.log('after:', elem.style.left, elem.style.top);
  elem.classList.toggle('hiden');
}
document.addEventListener('mouseover', togglePod);
document.addEventListener('mouseout', togglePod);
