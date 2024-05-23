import './Navbar.css'
import { Link } from 'react-router-dom';

// Navbar component for navigation
const Navbar = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          {/* Brand logo */}
          <Link className="navbar-brand" to={'/Sales'} >Sales App</Link>
          {/* Toggle button for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Link to Add Sales page */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/Add'} >ADD SALES</Link>
              </li>
              {/* Link to Top 5 Sales page */}
              <li className="nav-item">
                <Link className="nav-link" to={'/Top'}>TOP 5 SALES</Link>
              </li>
              {/* Link to Today's Total Revenue page */}
              <li className="nav-item">
                <Link className="nav-link" to={'/Total'}>TODAY'S TOTAL REVENUE</Link>
              </li>
              {/* Link to Login page */}
              <li className="nav-item">
                <Link className="nav-link" to={'/Login'} tabindex="-1" aria-disabled="true">LOGIN</Link>
              </li>
              {/* Link to Register page */}
              <li className="nav-item">
                <Link className="nav-link" to={'/Register'} tabindex="-1" aria-disabled="true">REGISTER</Link>
              </li>
              {/* Link to Logout page */}
              <li className="nav-item">
                <Link className="nav-link" tabindex="-1" aria-disabled="true" to={'/Login'} >LOGOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
