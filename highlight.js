function highlight() {
  const playerTotalSpans = $('span.playerTotal');
  const diffList = calculatePlayerDifferences();
  let rosterSize = $('li.gs.final').length / 2;
  console.log("Number of gs final classes:", rosterSize);

  for (let i = 0; i < rosterSize; i++) {
      const team1Player = $(playerTotalSpans[i]);
      const team2Player = $(playerTotalSpans[i + rosterSize]);
      const diff = diffList[i];

      team1Player.hover(function() {
          const message = $('<span>').css({
              'marginTop': '15px',
              'fontSize': '11px'
          }).text(diff > 0 ? `+${diff}` : diff);

          if (diff > 0) {
              message.css('backgroundColor', highlighterGreen);
              team2Player.css('backgroundColor', highlighterRed);
          } else if (diff < 0) {
              message.css('backgroundColor', highlighterRed);
              team2Player.css('backgroundColor', highlighterGreen);
          } else if (diff == 0.00) {
              message.css('backgroundColor', 'rgba(255, 255, 0, 0.30)');
              team2Player.css('backgroundColor', highlighterYellow);
          }

          $(this).append(message).css('backgroundColor', message.css('backgroundColor'));
      }, function() {
          $(this).find('span').remove();
          $(this).css('backgroundColor', '');
          team2Player.css('backgroundColor', '');
      });

      team2Player.hover(function() {
          const message2 = $('<span>').css({
              'marginTop': '15px',
              'fontSize': '11px'
          }).text((-1 * diff).toFixed(2) > 0 ? `+${(-1 * diff).toFixed(2)}` : (-1 * diff).toFixed(2));

          if ((-1 * diff).toFixed(2) > 0) {
              message2.css('backgroundColor', highlighterGreen);
              team1Player.css('backgroundColor', highlighterRed);
          } else if ((-1 * diff).toFixed(2) < 0) {
              message2.css('backgroundColor', highlighterRed);
              team1Player.css('backgroundColor', highlighterGreen);
          } else if ((-1 * diff).toFixed(2) == 0) {
              message2.css('backgroundColor', 'rgba(255, 255, 0, 0.30)');
              team1Player.css('backgroundColor', highlighterYellow);
          }

          $(this).append(message2).css('backgroundColor', message2.css('backgroundColor'));
      }, function() {
          $(this).find('span').remove();
          $(this).css('backgroundColor', '');
          team1Player.css('backgroundColor', '');
      });
  }
}
