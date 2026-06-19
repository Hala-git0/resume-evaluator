import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Password do not match!!');
      return;
    }

    console.log('بيانات الحساب الجديد:', { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create new account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label className="auth-label">Email Address:</label>
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

          <div className="auth-form-group">
            <label className="auth-label"> Confirm password: </label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="******"
              className="auth-input"
              required
            />
          </div>

          <button type="submit" className="register-submit-btn">
            Register
          </button>
        </form>

        <p className="auth-footer-text">
            Already have an account? <Link to="/login" className="auth-link"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;