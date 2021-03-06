import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";
import AddEditMatch from "./components/admin/matches/AddEditMatch";
import AdminPlayers from "./components/admin/players";
import AddEditPlayer from "./components/admin/players/AddEditPlayer";
import PrivateRoutes from "./components/authRoutes/PrivateRoutes";
import PublicRoutes from "./components/authRoutes/PublicRoutes";
import Home from "./components/home/Index";
import SignIn from "./components/signin";

import Layout from "./Hoc/Layout";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/admin_players/add_player" exact component={AddEditPlayer} />
        <PrivateRoutes {...props} path="/admin_players/add_player/:id" exact component={AddEditPlayer} />
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes exact restricted={true} path="/sign_in" component={SignIn} />
        <PublicRoutes exact restricted={false} path="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
