// cards = document.querySelectorAll(".card");
// // console.log(cards);

// var is_flipped = false;
// var first_card = null;
// var second_card = null;


// cards.forEach((card) => card.addEventListener("click", Flip));

// function Flip() {
//   // console.log("Flipped");

//   this.classList.add("flip")

//   if (!is_flipped) {
//     is_flipped = true;
//     first_card = this;
//   }
//   else {
//     second_card = this;
//     // console.log(first_card);
//     // console.log(second_card);
//     Check_It()

//   }

// }

// var Check_It = () => {
//   if (first_card.dataset.image === second_card.dataset.image) {
//     Success();
//   }
//   else {
//     Fail();
//   }
// }

// var Success = () => {
//   console.log("Success");
//   first_card.removeEventListener("click", Flip);
//   second_card.removeEventListener("click", Flip);
//   Reset();

// }
// var Fail = () => {
//   console.log("Fail");

//   setTimeout(() => {
//     first_card.classList.remove("flip"); //. Removig flip prop of css
//     second_card.classList.remove("flip"); //. Removig flip prop of css
//     Reset();
//   } , 1000);

// }

// var Reset = () => {
//   var is_flipped = false;
//   var first_card = null;
//   var second_card = null;
// }


// (function shuffle() {
//   cards.forEach((card) => {
//     var index = Math.floor(Math.random() * 16);
//     card.style.order = index;
//   });
// })();



const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    // console.log(firstCard);
    // console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
