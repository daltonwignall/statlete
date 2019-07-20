import React from "react";
import "./app.scss";
import { Nav } from "../components";

const App = () => {
  const sampleAthletes = [
    { title: "Ben Simmons", imagePath: "" },
    { title: "Anthony Davis", imagePath: "" },
    { title: "Draymond Green", imagePath: "" },
    { title: "Lebron James", imagePath: "" },
  ];

  return (
    <div className="app">
      <Nav navItems={sampleAthletes} />
    </div>
  );
};

export default App;
