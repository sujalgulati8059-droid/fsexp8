// src/components/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
 
function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    api.get('/protected')
      .then(({ data }) => setUserData(data))
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [navigate]);
 
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
 
  if (!userData) return <p>Loading...</p>;
 
  return (
    <div style={{ maxWidth: 480, margin: '80px auto', padding: 24 }}>
      <h2>{userData.message}</h2>
      <p>User ID: {userData.user.id}</p>
      <p>Username: {userData.user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
 
export default Dashboard;
