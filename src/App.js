import React, { useState } from 'react'
import './App.css';
import './components/Home/Home.css';
import Home from './components/Home/Home'
import AddTrip from './components/AddTrip/AddTrip'
import List from './components/List/List'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


function App() {
  const [trips, setTrips] = useState('');

  const handleCallback = (childData) => {
    console.log('handle call back');
    setTrips(childData)
    console.log("Data from child", childData);
  }


  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <button>
          <Link className="icon1" to="/"><i className='fas fa-home'></i> </Link>
          </button>
          <button>
            <Link className="icon2" to="/addTrip"><i className='far fa-calendar-plus'></i></Link>
          </button>
          <button>
            <Link className="icon3" to="/showTrips"><i className="fa fa-table" aria-hidden="true"></i></Link>
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <Home trips={trips} />
          </Route>
          <Route path="/addTrip">
            <AddTrip parentCallback={handleCallback} />
          </Route>
          <Route path="/showTrips">
            <List trips={trips} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;