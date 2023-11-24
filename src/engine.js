const characters = [
  {
    imgChar: './assets/ayato.png',
  },
  {
    imgChar: './assets/ayato.png',
  },
  {
    imgChar: '../../src/assets/cyno.png',
  },
  {
    imgChar: '../../src/assets/cyno.png',
  },
  {
    imgChar: '../../src/assets/kaeya.png',
  },
  {
    imgChar: '../../src/assets/kaeya.png',
  },
  {
    imgChar: '../../src/assets/kazuha.png',
  },
  {
    imgChar: '../../src/assets/kazuha.png',
  },
  {
    imgChar: '../../src/assets/kokomi.png',
  },
  {
    imgChar: '../../src/assets/kokomi.png',
  },
  {
    imgChar: '../../src/assets/lyney.png',
  },
  {
    imgChar: '../../src/assets/lyney.png',
  },
  {
    imgChar: '../../src/assets/nahida.png',
  },
  {
    imgChar: '../../src/assets/nahida.png',
  },
  {
    imgChar: '../../src/assets/noelle.png',
  },
  {
    imgChar: '../../src/assets/noelle.png',
  },
  {
    imgChar: '../../src/assets/raiden.png',
  },
  {
    imgChar: '../../src/assets/raiden.png',
  },
  {
    imgChar: '../../src/assets/shenhe.png',
  },
  {
    imgChar: '../../src/assets/shenhe.png',
  },
  {
    imgChar: '../../src/assets/tighnari.png',
  },
  {
    imgChar: '../../src/assets/tighnari.png',
  },
  {
    imgChar: '../../src/assets/traveler.png',
  },
  {
    imgChar: '../../src/assets/traveler.png',
  },
  {
    imgChar: '../../src/assets/xiangling.png',
  },
  {
    imgChar: '../../src/assets/xiangling.png',
  },
  {
    imgChar: '../../src/assets/zhongli.png',
  },
  {
    imgChar: '../../src/assets/zhongli.png',
  },
  {
    imgChar: '../../src/assets/qiqi.png',
  },
  {
    imgChar: '../../src/assets/qiqi.png',
  },
  {
    imgChar: '../../src/assets/traveler2.png',
  },
  {
    imgChar: '../../src/assets/traveler2.png',
  },
];
let openCards = [];

const randomChar = characters.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < characters.length; i++){
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('item');

  const img = document.createElement('img');
  img.src = randomChar[i].imgChar;
  console.log(img.src);
  cardContainer.appendChild(img);
  cardContainer.onclick = randomClick;

  document.querySelector('.game').appendChild(cardContainer);
}

function randomClick() {
  if(openCards.length < 2){
    this.classList.add('openCard');
    openCards.push(this);
  }

  if(openCards.length === 2){
    setTimeout(checkMatchCards, 500);
  }
}

function checkMatchCards() {
  if(openCards[0].innerHTML === openCards[1].innerHTML){
    openCards[0].classList.add('matchCards');
    openCards[1].classList.add('matchCards');
  } else {
    openCards[0].classList.remove('openCard');
    openCards[1].classList.remove('openCard');
  }

  openCards = [];

  if(document.querySelectorAll('.openCard').length === characters.length){
    alert('Congratulations!! You found all the pairs, Paimon is proud of you!');
  }
}