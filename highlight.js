function highlight() {

    const playerTotalSpans = $('span.playerTotal');
    const diffList = calculatePlayerDifferences();
    let rosterSize = $('li.gs.final').length / 2;

    for (let i = 0; i < rosterSize; i++) {
        const team1Player = $(playerTotalSpans[i]);
        const team2Player = $(playerTotalSpans[i + rosterSize]);
        const diff = diffList[i];

        const hoverFunction = function (teamPlayer, otherPlayer, diff) {
            let diffFormatted = parseFloat(diff).toFixed(2);
            diffFormatted = (diff > 0) ? "+" + diffFormatted : diffFormatted; 

            const message = $('<span>').addClass('message').css({ // Add class to message span
                'marginTop': '15px',
                'fontSize': '11px'
            }).text(diffFormatted);

            if (diff > 0) {
                message.css('backgroundColor', highlighterGreen);
                otherPlayer.css('backgroundColor', highlighterRed);
            } else if (diff < 0) {
                message.css('backgroundColor', highlighterRed);
                otherPlayer.css('backgroundColor', highlighterGreen);
            } else if (diff === 0) {
                message.css('backgroundColor', 'rgba(255, 255, 0, 0.30)');
                otherPlayer.css('backgroundColor', highlighterYellow);
            }

            teamPlayer.find('span.message').remove();
            teamPlayer.append(message).css('backgroundColor', message.css('backgroundColor'));
            
        }

        const hoverEndFunction = function (teamPlayer, otherPlayer) {
            teamPlayer.find('span.message').remove(); // Find and remove message span
            teamPlayer.css('backgroundColor', '');
            otherPlayer.css('backgroundColor', '');
        }

        team1Player.hover(() => hoverFunction(team1Player, team2Player, diff), 
                          () => hoverEndFunction(team1Player, team2Player));
        team2Player.hover(() => hoverFunction(team2Player, team1Player, -1 * diff), 
                          () => hoverEndFunction(team2Player, team1Player));
    }
}
