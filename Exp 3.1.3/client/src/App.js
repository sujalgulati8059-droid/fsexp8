import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addUser = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setUsers([...users, { _id: Date.now(), ...form }]);
    setForm({ name: "", email: "" });
    setMsg("User added!");
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>User Management</h1>

        <form onSubmit={addUser} style={{ marginBottom: 20 }}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ marginRight: 8 }}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ marginRight: 8 }}
          />
          <button type="submit">Add User</button>
        </form>

        {msg && <p style={{ color: "green" }}>{msg}</p>}

        <h3>All Users ({users.length})</h3>
        {users.length === 0 ? (
          <p style={{ color: "#888" }}>No users yet. Add one above.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((u) => (
              <li key={u._id} style={{ padding: "6px 0", borderBottom: "1px solid #eee" }}>
                <b>{u.name}</b> — {u.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
