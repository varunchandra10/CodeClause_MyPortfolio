import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <AllRoutes/>
      <Footer/>
    </Router>
  );
};

export default App;
