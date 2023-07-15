function highlight() {
    // Get player scores
    const playerTotalSpans = document.querySelectorAll('span.playerTotal');
    const diffList = calculatePlayerDifferences();
  
    // Get roster size
    let rosterSize = document.querySelectorAll('li.gs.final');
    rosterSize = (rosterSize.length)/2;
    console.log("Number of gs final classes:", rosterSize);
  
    // Implement highlighting for position and it's opposite
    for (let i = 0; i < rosterSize; i++) {
  
      // Assign player, inverse and difference
      const team1Player = playerTotalSpans[i];
      const team2Player = playerTotalSpans[i +rosterSize];
      const diff = diffList[i];
  
      // Team 1 player mouseover
      team1Player.onmouseover = function() {
  
        // Create box drop down
        const message = document.createElement('span');
        message.style.marginTop = '15px';
        message.innerHTML = diff > 0 ? `+${diff}` : diff;
        message.style.fontSize = '11px';
  
        // Conditionally assign colors of highlight
        if (diff > 0) {
          message.style.backgroundColor = highlighterGreen;
          team2Player.style.backgroundColor = highlighterRed;
        } else if (diff < 0) {
          message.style.backgroundColor = highlighterRed;
          team2Player.style.backgroundColor = highlighterGreen;
        } else if (diff == 0.00) {
          message.style.backgroundColor = 'rgba(255, 255, 0, 0.30)';
          team2Player.style.backgroundColor = highlighterYellow;
        }
  
        this.appendChild(message);
        this.style.backgroundColor = message.style.backgroundColor;
      };
  
      // Team 2 player mouseover (inverse)
      team2Player.onmouseover = function() {
        const message2 = document.createElement('span');
        message2.style.marginTop = '15px';
        message2.innerHTML = diff < 0 ? `+${(-1 * diff).toFixed(2)}` : (-1 * diff).toFixed(2);
        message2.style.fontSize = '11px';
  
        // Conditionally assign colors of highlight
        if ((-1 * diff).toFixed(2) > 0) {
          message2.style.backgroundColor = highlighterGreen;
          team1Player.style.backgroundColor = highlighterRed;
        } else if ((-1 * diff).toFixed(2) < 0) {
          message2.style.backgroundColor = highlighterRed;
          team1Player.style.backgroundColor = highlighterGreen;
        } else if ((-1 * diff).toFixed(2) == 0) {
          message2.style.backgroundColor = 'rgba(255, 255, 0, 0.30)';
          team1Player.style.backgroundColor = highlighterYellow;
        }
  
        this.appendChild(message2);
        this.style.backgroundColor = message2.style.backgroundColor;
      };
  
      // Removing colors for team 1
      team1Player.onmouseout = function() {
        const message = this.querySelector('span');
        this.removeChild(message);
        this.style.backgroundColor = null;
        team2Player.style.backgroundColor = '';
      };
  
      // Removing colors for team 2
      team2Player.onmouseout = function() {
        const message2 = this.querySelector('span');
        this.removeChild(message2);
        this.style.backgroundColor = null;
        team1Player.style.backgroundColor = '';
      };
    }
  }