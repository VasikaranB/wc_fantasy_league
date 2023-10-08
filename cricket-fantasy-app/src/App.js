import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PlayerDetail from "./components/PlayerDetail";
import { updateTeamDataWithRunsAndWickets } from "./util/calc";

function App() {
  const [team, setTeam] = useState([]);
  let teamDat = []

  useEffect(() => {
    teamDat = updateTeamDataWithRunsAndWickets();
    setTeam(teamDat)
    console.log(teamDat, team)
  }, [])


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home teamDat={team}/>} />
          <Route path="/dashboard" exact element={<Dashboard teamDat={team}/>} />
          <Route path="/detail/:playerId" element={<PlayerDetail teamDat={team}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;