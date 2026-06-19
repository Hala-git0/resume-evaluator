import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('بيانات تسجيل الدخول:', { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title"> Login </h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label className="auth-label"> Email Address: </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="auth-input"
              required
            />
          </div>

          <div className="auth-form-group">
            <label className="auth-label"> Password: </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              className="auth-input"
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>

        <p className="auth-footer-text">
         Don't have an account?<Link to="/register" className="auth-link"> Register </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;