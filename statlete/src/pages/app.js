import React from "react";
import "./styles/app.scss";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "../components";
import { getKnowledgeGraphData, getNBAPlayer, getNBAPlayerStats } from "../helpers/api-requests";

const App = () => {
  const sampleAthletes = [
    { title: "Ben Simmons", imagePath: "" },
    { title: "Anthony Davis", imagePath: "" },
    { title: "Draymond Green", imagePath: "" },
    { title: "Lebron James", imagePath: "" },
  ];

  getKnowledgeGraphData("Lebron James");
  getNBAPlayer("Lebron James");
  getNBAPlayerStats("237");

  return (
    <div className="app">
      <Router>
        <Nav navItems={sampleAthletes} />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
