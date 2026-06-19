import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header className="app-header">
      
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="logo-link">Resume Evaluator</Link>
      </h1>
      
      <nav>
        <Link to="/login" className="nav-link">Login</Link>
      
      
        <Link to="/register" className="register-btn">Register</Link>
      </nav>

    </header>
  );
}

export default Header;