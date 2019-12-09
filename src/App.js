import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Calender from './components/Calender';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              Personal Trainer
          </Typography>

            <Navbar />
          </Toolbar>
        </AppBar>
        <div>
          <Switch>
            <Route path="/home" />
            <Route path="/customers" component={Customerlist} />
            <Route path="/trainings" component={Traininglist} />
            <Route path="/calender" component={Calender} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

