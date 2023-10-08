import React from 'react';
import './styles/PlayerDetail.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  const res  = decodeURIComponent(location.pathname.split('/detail/')[1])
  console.log(res);
  return res;
}

const PlayerDetail = (props) => {
  let teamData= [];
  // Replace with actual data or API calls to fetch team and player details

    teamData = props.teamDat.filter(data => data.teamName === HeaderView())
    teamData =  teamData[0]
    console.log(teamData)

  return (
    <div>
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">ICA CWC Fantasy League Dashboard</h1>
        
      </div>
      <div className='backbtn'>
      <Link to="/dashboard" className="dashboard-button">
          Go to Dashboard
        </Link>
      </div>
       
      {props?.teamDat.length > 0 ? <>
      {/* Team Details */}
      <div className="team-details">
        <h2>{teamData.teamName}</h2>
        <p>Total Score: {teamData.teamPoints}</p>
      </div>

      {/* Player Details */}
      <div className="player-list">
        {teamData.players.map((player, index) => (
          <div className="player-card" key={index}>
            <h3>{player.name}</h3>
            <p>Runs Scored: {player.runs}</p>
            <p>Wickets Taken: {player.wickets}</p>
            <p>Total Score: {player.totalPoints}</p>
          </div>
        ))}
      </div></> : null }
      <footer className="footerd">
        <p>&copy; 2023 Cricket World Cup Fantasy</p>
      </footer> 
    </div>
  );
};

export default PlayerDetail;
