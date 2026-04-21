import { useState } from 'react';
import { Link } from 'react-router-dom';

function Exp3() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [msg, setMsg] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { _id: Date.now(), ...form }]);
    setForm({ name: '', email: '' });
    setMsg('User added!');
    setTimeout(() => setMsg(''), 2000);
  };

  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: 24 }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#1976d2', fontSize: 14 }}>← Back to Home</Link>
      <h2>Exp 3.1.3 – User Management (MERN)</h2>

      <div style={cardStyle}>
        <form onSubmit={addUser} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            placeholder="Name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required style={inputStyle}
          />
          <input
            placeholder="Email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Add</button>
        </form>

        {msg && <p style={{ color: 'green', margin: '0 0 12px' }}>{msg}</p>}

        <h4 style={{ margin: '0 0 10px' }}>All Users ({users.length})</h4>
        {users.length === 0 ? (
          <p style={{ color: '#888' }}>No users yet. Add one above.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {users.map((u) => (
              <li key={u._id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <strong>{u.name}</strong> — {u.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const cardStyle = { background: '#f9f9f9', padding: 24, borderRadius: 8, border: '1px solid #ddd' };
const inputStyle = { flex: 1, padding: 10, borderRadius: 4, border: '1px solid #ccc' };
const buttonStyle = { padding: '10px 20px', background: '#1976d2', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' };

export default Exp3;
