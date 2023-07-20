calculateMatchupDifference();
calculatePlayerDifferences();
highlight();

let teamNav = document.querySelector('.teamNav');
console.log("teamNav outside", teamNav);

function handleClick() {
  setTimeout(function() {
    calculateMatchupDifference();
    calculatePlayerDifferences();
    highlight();
  }, 750);
}

teamNav.addEventListener('click', handleClick);

setInterval(function() {
  teamNav = document.querySelector('.teamNav');
  teamNav.addEventListener('click', handleClick);
}, 300);