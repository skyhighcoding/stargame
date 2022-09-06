
const starArray = ['https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-yellow.png', 'https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-blue.png',  'https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-purple.png'];

const scoreId = document.querySelector("#score");
let score = 0;

function addScore() {
  score++;    // score++ means score=score+1
  scoreId.innerText = score;
  console.log(Math.random())
}

const stars = document.querySelector("#stars");
stars.addEventListener("click", addScore);

function moveStars(){
  stars.style.top = Math.random()*500+'px';
  stars.style.left = Math.random()*1300+'px'

  var randomNum = Math.floor(Math.random()*starArray.length);
  var newStar = starArray[randomNum];

  stars.src = newStar;
}

setInterval(moveStars,1000);

function gameOver() {
	document.querySelector("#gameOver").style.display = 'block';
	stars.style.display = 'none';
}

setTimeout(gameOver,20000);
