import React from 'react';
import './index.css';
import Main from '../components/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthenicationRoutes from '../routes/AuthenticationRoutes';



function App() {
  return (
    <Router>
    <div className="App">
        <AuthenicationRoutes />
        <Main />
      </div>
    </Router>
  );
}

export default App;
