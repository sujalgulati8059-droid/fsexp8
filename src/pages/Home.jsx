import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '60px auto', padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Full Stack Development Experiments</h1>
      <p><strong>Name:</strong> Sujal Gulati</p>
      <p><strong>UID:</strong> 24BDA70318</p>
      <hr style={{ margin: '30px 0' }} />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Link to="/exp1" style={cardStyle}>
          <h2>Exp 3.1.1 – React Login Form</h2>
          <p>Form validation with react-hook-form + Material UI</p>
        </Link>

        <Link to="/exp2" style={cardStyle}>
          <h2>Exp 3.1.2 – JWT Authentication</h2>
          <p>Mock JWT-based login with protected routes</p>
        </Link>

        <Link to="/exp3" style={cardStyle}>
          <h2>Exp 3.1.3 – User Management (MERN)</h2>
          <p>Add and view users with in-memory state</p>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  display: 'block',
  padding: 20,
  border: '1px solid #ddd',
  borderRadius: 8,
  textDecoration: 'none',
  color: '#333',
  background: '#f9f9f9',
  transition: 'all 0.2s'
};

export default Home;
