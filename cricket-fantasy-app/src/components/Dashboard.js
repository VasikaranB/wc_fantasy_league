import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css'; // Import your CSS file


const Dashboard = (props) => {
  console.log(props, props?.teamDat)
  const teamsData = props?.teamDat
  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-title">ICA CWC Fantasy League Dashboard</h1>
        
      </div>
      <div className='backbtn'>
      <a href="/" className="dashboard-button">
          Go to Home
        </a>
      </div>
     <div className="dashboard-content">
       {props?.teamDat ? props?.teamDat.map((team) => (
        <Link to={`/detail/${team.teamName}`} key={team.teamName} className="team-widget">
         <div key={team.teamName} className="dashboard-widget">
           <h2>{team.teamName}</h2>
           <p>Total Score: {team.teamPoints}</p>
         </div>
         </Link>
       )) : null}
     </div>
     <footer className="footerd">
        <p>&copy; 2023 Cricket World Cup Fantasy</p>
      </footer> 
   </div>
  );
};

export default Dashboard;
