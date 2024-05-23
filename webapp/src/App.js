import AddSales from './pages/AddSales';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopSales from './pages/TopSales';
import TotalRevenue from './pages/TotalRevenue';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* Router setup for navigation */}
      <Router>
        {/* Navbar component for navigation */}
        <Navbar />
        {/* Define routes for different pages */}
        <Routes>
          <Route exact path='/Add' element={<AddSales />} ></Route>
          <Route exact path='/Top' element={<TopSales />} ></Route>
          <Route exact path='/Total' element={<TotalRevenue />} ></Route>
          <Route exact path='/Login' element={<Login />} ></Route>
          <Route exact path='/Register' element={<Registration />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
