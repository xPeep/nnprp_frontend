import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/general/Home";
import Profile from "./components/auth/Profile";
import BoardUser from "./components/general/BoardUser";
import BoardModerator from "./components/general/BoardModerator";
import BoardAdmin from "./components/general/BoardAdmin";
import Navbar from "./components/general/Navbar";
import FilmView from "./components/film/FilmView";
import FilmDetail from "./components/film/FilmDetail";
import CinemaView from "./components/cinema/CinemaView";
import CinemaDetail from "./components/cinema/CinemaDetail";
import ProgramView from "./components/program/ProgramView";
import ProgramDetail from "./components/program/ProgramDetail";
import FilmForm from "./components/film/FilmForm";
import CinemaForm from "./components/cinema/CinemaForm";
import HallDetail from "./components/hall/HallDetail";
import HallForm from "./components/hall/HallForm";
import ProgramForm from "./components/program/ProgramForm";
import TicketDetail from "./components/ticket/TicketDetail";
import TicketProgramView from "./components/ticket/TicketProgramView";

const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/profile" component={Profile}/>

              <Route exact path="/film" component={FilmView}/>
              <Route exact path="/film/add" component={FilmForm}/>
              <Route exact path="/film/:id" component={FilmDetail}/>

              <Route exact path="/cinema" component={CinemaView}/>
              <Route exact path="/cinema/add" component={CinemaForm}/>
              <Route exact path="/cinema/:id" component={CinemaDetail}/>

              <Route exact path="/hall/add/:cinemaId" component={HallForm}/>
              <Route exact path="/hall/:id" component={HallDetail}/>

              <Route exact path="/program" component={ProgramView}/>
              <Route exact path="/program/add" component={ProgramForm}/>
              <Route exact path="/program/:id" component={ProgramDetail}/>

              <Route exact path="/program/revision/:id" component={TicketProgramView}/>

              <Route exact path="/ticket/:id" component={TicketDetail}/>

              <Route exact path="/user" component={BoardUser}/>
              <Route exact path="/mod" component={BoardModerator}/>
              <Route exact path="/admin" component={BoardAdmin}/>
              {/*<Route path="*" component={NotFound}>*/}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
};

export default App;
