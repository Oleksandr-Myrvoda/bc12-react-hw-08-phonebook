import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router";
// import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth";
import AppBar from "./components/AppBar";
import Container from "./components/Container";

import PrivateRoute from "./components/Routes/PrivatRoute";
import PublicRoute from "./components/Routes/PublicRoute";

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
/* webpackChunkName: "home-page" */
/* webpackChunkName: "contacts-page" */
/* webpackChunkName: "register-page" */
/* webpackChunkName: "login-page" */

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCurrentUser()), [dispatch]);

  return (
    <div className="mainBox">
      <Container className="section">
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>

            <PublicRoute path="/register" onlyNotAuth>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" onlyNotAuth>
              <LoginPage />
            </PublicRoute>
          </Switch>

          {/* <Switch>
            <Route exact path="/" render={() => <HomePage />} />

            <Route
              path="/contacts"
              render={() => (
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              )}
            />

            <Route
              exact
              path="/register"
              render={() => (
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <PublicRoute path="/login" redirectTo="/contacts" restricted>
                  <LoginPage />
                </PublicRoute>
              )}
            />
          </Switch> */}
        </Suspense>
      </Container>
    </div>
  );
}
