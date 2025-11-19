let homeScore = 0;
let guestScore = 0;
let period = 1;

let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');
let homeScore1El = document.getElementById('home-score-1');
let homeScore2El = document.getElementById('home-score-2');
let homeScore3El = document.getElementById('home-score-3');
let guestScore1El = document.getElementById('guest-score-1');
let guestScore2El = document.getElementById('guest-score-2');
let guestScore3El = document.getElementById('guest-score-3');
const newGameEl = document.getElementById('new-game');
const homeSection = document.getElementById('home');
const guestSection = document.getElementById('guest');
const periodDisplay = document.getElementById('period-display')
const nextPeriodBtn = document.getElementById('next-period')

function highlightLeader() {
    homeSection.classList.remove('leader');
    guestSection.classList.remove('leader');

    if (homeScore > guestScore) {
        homeSection.classList.add('leader');
    } else if (guestScore > homeScore) {
        guestSection.classList.add('leader');
    }
}

nextPeriodBtn.addEventListener('click', function() {
    period = (period % 4) + 1
    render()
}) 

function render() {
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    
    highlightLeader();

    periodDisplay.textContent = `QUARTER ${period}`
}

homeScore1El.addEventListener('click', function() {
    homeScore += 1;
    render();
});

homeScore2El.addEventListener('click', function() {
    homeScore += 2;
    render();
});

homeScore3El.addEventListener('click', function() {
    homeScore += 3;
    render();
});

guestScore1El.addEventListener('click', function() {
    guestScore += 1;
    render();
});

guestScore2El.addEventListener('click', function() {
    guestScore += 2;
    render();
});

guestScore3El.addEventListener('click', function() {
    guestScore += 3;
    render();
});

newGameEl.addEventListener('click', function() {
    homeScore = 0;
    guestScore = 0;
    period = 1;
    render();
});