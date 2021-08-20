import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import PrivateRoutes from "./components/authRoutes/PrivateRoutes";
import PublicRoutes from "./components/authRoutes/PublicRoutes";
import Home from "./components/home/Index";
import SignIn from "./components/signin";

import Layout from "./Hoc/Layout";

const Routes = (props) => {
  console.log(props)
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes exact restricted={true} path="/sign_in" component={SignIn} />
        <PublicRoutes exact restricted={false} path="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
