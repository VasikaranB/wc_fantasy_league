import React from "react";
import "./styles/Home.css";
import { Link } from 'react-router-dom';

function Home(props) {
  console.log(props)
  return (
    <>
    <div className="page">
      <div className="home">
        <header className="header">
          <div className="header-content">
            <h1 className="title">ICA Cricket World Cup Fantasy League</h1>
            <p className="subtitle">
              Join the excitement and create your fantasy team!
            </p>
          </div>
        </header>

        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <a target="blank" href="https://www.cricketworldcup.com/">
                ICC CWC website
              </a>
            </li>
          </ul>
        </nav>

        <section id="how-to-play" className="section">
          <div className="section-content">
            <h2 className="section-title">How to Play</h2>
            Create a dream 14 member team from World cup squad with atleast 5
            batters and 4 bowlers to win the tournament.
          </div>
        </section>

        <section id="leaderboard" className="section">
          <div className="section-content">
            <h2 className="section-title">Leaderboard</h2>
            {props?.teamDat.length > 0 ? `ICA's ${props.teamDat[0].teamName} leads the table now with ${props.teamDat[0].teamPoints} points` : ""}
          </div>
        </section>

        <section id="prizes" className="section">
          <div className="section-content">
            <h2 className="section-title">Prizes</h2>
            Do not expect any prices as these kanjos didnt even pay single penny
            to me for creating this website.
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Cricket World Cup Fantasy</p>
      </footer>
      </div>
    </>
  );
}

export default Home;
