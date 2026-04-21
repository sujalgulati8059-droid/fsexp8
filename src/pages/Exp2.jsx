import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const mockAPI = {
  login: (username, password) => {
    if (username === 'admin' && password === 'password123') {
      const token = btoa(JSON.stringify({ id: 1, username }));
      return { success: true, token };
    }
    return { success: false, error: 'Invalid credentials' };
  },
  getProtected: (token) => {
    if (!token) return null;
    const user = JSON.parse(atob(token));
    return { message: `Welcome ${user.username}`, user };
  }
};

function Exp2() {
  const [view, setView] = useState('login');
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('exp2_token');
    if (token) {
      const data = mockAPI.getProtected(token);
      if (data) {
        setUserData(data);
        setView('dashboard');
      }
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const result = mockAPI.login(form.username, form.password);
    if (result.success) {
      localStorage.setItem('exp2_token', result.token);
      const data = mockAPI.getProtected(result.token);
      setUserData(data);
      setView('dashboard');
    } else {
      setError(result.error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('exp2_token');
    setUserData(null);
    setView('login');
    setForm({ username: '', password: '' });
  };

  return (
    <div style={{ maxWidth: 480, margin: '60px auto', padding: 24 }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#1976d2', fontSize: 14 }}>← Back to Home</Link>
      <h2>Exp 3.1.2 – JWT Authentication</h2>

      {view === 'login' ? (
        <div style={cardStyle}>
          <p style={{ color: '#666', fontSize: 14 }}>
            Test credentials: <strong>admin</strong> / <strong>password123</strong>
          </p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              name="username" placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              name="password" type="password" placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Sign In</button>
          </form>
        </div>
      ) : (
        <div style={cardStyle}>
          <h3>{userData?.message}</h3>
          <p>User ID: {userData?.user.id}</p>
          <p>Username: {userData?.user.username}</p>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </div>
      )}
    </div>
  );
}

const cardStyle = { background: '#f9f9f9', padding: 24, borderRadius: 8, border: '1px solid #ddd' };
const inputStyle = { width: '100%', padding: 10, marginBottom: 12, borderRadius: 4, border: '1px solid #ccc' };
const buttonStyle = { width: '100%', padding: 10, background: '#1976d2', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' };

export default Exp2;
