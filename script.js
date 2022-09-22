let mainDiv = document.createElement('div');
let card = document.createElement('div');
let textCard = document.createElement("p");
let btn = document.createElement('button');
let lockBoard = false;
let cards;
let firstCard ;
let secondCard;
let hasFlippedCard = false;
let masCard = ["1", "2", "3", "4", "5","6" ,"7" , "8", "1", "2", "3", "4", "5","6", "7", "8"];
let newCard =  shuffle(masCard);
let cardNumber = newCard.length;
console.log(cardNumber)
btn.innerHTML = "Сыграть еще раз";
mainDiv.classList.add("main_card");
btn.classList.add("shadoow");

document.body.append(mainDiv);
mainDiv.after(btn);

for (var i = 0; i <= newCard.length - 1 ; i++) {
  let card = document.createElement('div');
  // let textCard = document.createElement("p");

  card.classList.add("card");
  card.classList.add("textCard")
  mainDiv.append(card);
  // card.append(textCard);
  card.textContent = newCard[i]
  cards = card.textContent;
  card.value = textCard.textContent
  // card.style.fontSize = "0px";
  console.log(card.classList)
  card.addEventListener("click", flipCard);

  // card.addEventListener("click", flipCard);
}


function shuffle(masCard) {
  var copy = [], n = masCard.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(masCard.splice(i, 1)[0]);
  }

  return copy;

}

console.log(card.textContent.fontSize)

function flipCard(e) {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');





  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    console.log(firstCard)
     return;

   }

   secondCard = this;
   hasFlippedCard = false;
   console.log(secondCard)

   checkForMatch();
 }

 function checkForMatch() {
   if (firstCard.textContent === secondCard.textContent) {
    cardNumber = cardNumber - 2;
    if (cardNumber == 0 ) {
      btn.style.display = "block";
    }
    console.log(cardNumber)
     disableCards();
     return;
   }
   unFlipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   resetBoard();
 }

 function unFlipCards() {
  lockBoard = true;
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  resetBoard();
},1000);
 }
 function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

btn.addEventListener("click", function(){
  location.reload()
});

