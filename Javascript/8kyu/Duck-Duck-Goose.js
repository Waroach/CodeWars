                                                // First try did not work for all cases.
// function duckDuckGoose(players, goose) {
//     goose = goose%players.length
//     return players[goose-1].name
// }

                                                // Second Try Passes all tests
function duckDuckGoose(players, goose){
    return players[(goose-1)%players.length].name
}