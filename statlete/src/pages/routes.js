import React from "react";
import { Route } from "react-router-dom";
import AddAthletePage from "./add-athlete";
import ViewAthletePage from "./view-athlete";

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={AddAthletePage} />
      <Route exact path="/add-athlete" component={AddAthletePage} />
      <Route path="/view-athlete" component={ViewAthletePage} />
    </React.Fragment>
  );
};

export default Routes;

