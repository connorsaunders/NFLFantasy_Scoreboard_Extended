// Colors
const highlighterGreen = 'rgba(0, 80, 0, 0.5)';
const highlighterRed = 'rgba(175, 0, 0, 0.5)';
const highlighterYellow = 'rgba(255, 255, 0, 0.40)';

function calculateMatchupDifference() {
    // Get total scores and seperate to 2 divs
    const teamTotalDivs = document.querySelectorAll("div.teamTotal");
  
    const div1 = teamTotalDivs[teamTotalDivs.length - 2];
    const div2 = teamTotalDivs[teamTotalDivs.length - 1];
  
    // Get the score difference
    if (div1 && div2) {
  
      const num1 = parseFloat(div1.textContent);
      const num2 = parseFloat(div2.textContent);
      const diff = (num1 - num2).toFixed(2);
  
      const prevDiff = div1.nextElementSibling;
      if (prevDiff) {
        prevDiff.remove();
      }
  
  const newDiv = document.createElement("div");
  newDiv.style.padding = "5px";
  
  const diffSpan = document.createElement("span");
  diffSpan.textContent = diff;
  diffSpan.style.fontWeight = "bold";
  diffSpan.style.fontSize = "21px";
  diffSpan.style.whiteSpace = "nowrap";
  diffSpan.style.marginLeft = "385px";
  
  const inverseDiffSpan = document.createElement("span");
  inverseDiffSpan.style.fontWeight = "bold";
  inverseDiffSpan.style.fontSize = "21px";
  inverseDiffSpan.style.whiteSpace = "nowrap";
  inverseDiffSpan.style.marginLeft = "55px";
  
  if (diff <= 9.99 & diff >= -9.99) {
    diffSpan.style.marginLeft = "400px";
  }
  if (diff > 99.99 || diff < -99.99) {
    diffSpan.style.marginLeft = "385px";
  }
  
  if (diff > 0) {
    diffSpan.style.color = 'rgba(0, 80, 0, 1)';
    diffSpan.textContent = `+${diff}`;
    inverseDiffSpan.style.color = 'rgba(175, 0, 0, 1)';
    inverseDiffSpan.textContent = `${(-1 * diff).toFixed(2)}`;
  } else if (diff < 0) {
    diffSpan.style.color = 'rgba(175, 0, 0, 1)';
    diffSpan.textContent = `${diff}`;
    inverseDiffSpan.style.color = 'rgba(0, 80, 0, 1)';
    inverseDiffSpan.textContent = `+${(-1 * diff).toFixed(2)}`;
  }
  
  newDiv.appendChild(diffSpan);
  newDiv.appendChild(inverseDiffSpan);
  
  div1.insertAdjacentElement('afterend', newDiv);
  
    }
  }
