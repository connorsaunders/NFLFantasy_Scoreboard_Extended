function calculatePlayerDifferences() {
    // Get individual starting players' scores
    const playerTotalSpans = document.querySelectorAll('span.playerTotal');
    const playerTotalList = Array.from(playerTotalSpans)
      .map(span => parseFloat(span.textContent).toFixed(2));
    console.log("All players stats", playerTotalList);
  
    // Get roster size
    let rosterSize = document.querySelectorAll('li.gs.final');
    rosterSize = rosterSize.length;
    console.log("Number of gs final classes:", rosterSize);
  
    // Create and calculate inverse list and where to split total list
    const diffList = [];
    const midPoint = Math.floor(rosterSize / 2);
  
    // Populate team 1 (left)
    for (let i = 0; i < midPoint; i++) {
      const diff = (playerTotalList[i] - playerTotalList[i + midPoint]).toFixed(2);
      diffList.push(diff);
    }
  
    // Populate team 2 (right)
    for (let i = 0; i < midPoint; i++) {
      const negatedValue = (-diffList[i]).toFixed(2);
      diffList.push(negatedValue);
    }
  
    console.log("Differences", diffList);
  
    return diffList;
  }