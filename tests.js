const rezultGay = document.getElementById('id-gay');
const rezultNoGay = document.getElementById('id-nogay');
const gayBut1 = document.getElementById('gayBut1');
const gayBut2 = document.getElementById('gayBut2');
const NoGayBut = document.getElementById('NoGayBut');
const tryAgain = document.getElementById('again');

const isGay = (event) => {
  rezultGay.classList.remove('hiden');
}
const noGay = (event) => {
  rezultNoGay.classList.remove('hiden');
}
const refresh = (event) => {
  rezultGay.classList.add('hiden');
  rezultNoGay.classList.add('hiden')
}

gayBut1.addEventListener('click', isGay);
gayBut2.addEventListener('click', isGay);
NoGayBut.addEventListener('click', noGay);
tryAgain.addEventListener('click', refresh);