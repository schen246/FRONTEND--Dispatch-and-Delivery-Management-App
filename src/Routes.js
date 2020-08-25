import React, { useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout, Front as FrontLayout } from './layouts';

import {
  Tracking as TrackingView,
  Dashboard as DashboardView,
  NewOrder as NewOrderView,
  ProductList as ProductListView,
  UserList as UserListView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Front as FrontView
} from './views';
import { initial } from 'underscore';

const Routes = () => {

  // user information after login will be saved here
  // and pass to user profile and shipInfo

  const [userInfo, setUserInfo] = useState();

  const initialUserInfo = (info) => {
    setUserInfo(info);
  }

  return (
    <Switch>
      {/*  <Redirect
        exact
        from="/"
        to="/sign-in"
      /> */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={FrontView}
        exact
        layout={FrontLayout}
        path="/"
      />
      <RouteWithLayout
        component={TrackingView}
        exact
        layout={FrontLayout}
        path="/tracking/:id"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/history"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={NewOrderView}
        layout={MainLayout}
        path="/neworder"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
