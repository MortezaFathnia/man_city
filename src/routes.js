import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./components/home/Index";

import Layout from "./Hoc/Layout";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
