import { teamsData } from "./teams";
import battingData from "./batting_data.json";
import bowlingData from "./bowling_data.json";

export function updateTeamDataWithRunsAndWickets() {
  for (const team of teamsData) {
    let teamPoints = 0;
    for (const player of team.players) {
      const playerName = player.name.split(" (")[0]; // Extracting player name without country
      for (const battingPlayer of battingData) {
        if (battingPlayer.Player.includes(playerName)) {
          // Update runs
          player.runs = parseInt(battingPlayer.Runs)? parseInt(battingPlayer.Runs) : 0;

          // Calculate batting points
          player.battingPoints = player.runs * 1;
        }
      }
      for (const bowlingPlayer of bowlingData) {
        if (bowlingPlayer.Player.includes(playerName)) {
          // Update wickets
          player.wickets = parseInt(bowlingPlayer.Wkts) ? parseInt(bowlingPlayer.Wkts)  : 0;

          // Calculate bowling points
          player.bowlingPoints = player.wickets * 25;
        }
      }

      // Calculate total points
      player.totalPoints = player.battingPoints + player.bowlingPoints;
      teamPoints = teamPoints + player.totalPoints;
    }
    team.teamPoints = teamPoints 
  }
  teamsData.sort((a, b) => b.teamPoints - a.teamPoints);

  return teamsData
}
