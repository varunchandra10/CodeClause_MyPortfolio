import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Footer from './components/Footer/Footer';
import CustomLoader from './components/Loader/CustomLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <AllRoutes />
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
