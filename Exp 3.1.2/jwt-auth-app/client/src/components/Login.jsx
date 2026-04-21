
// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
 
function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/login', form);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };
 
  return (
    <div style={{ maxWidth: 380, margin: '80px auto', padding: 24 }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username"
          value={form.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password"
          value={form.password} onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
 
export default Login;
