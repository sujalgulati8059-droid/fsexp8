import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("guest");

  return (
    <div className="container">
      <div className="card">
        <h1>Access Denied</h1>

        <div style={{ marginBottom: "15px" }}>
          <button onClick={() => setRole("admin")}>
            Login as Admin
          </button>

          <button
            onClick={() => setRole("user")}
            style={{ marginLeft: "10px" }}
          >
            Login as User
          </button>
        </div>

        {role === "admin" ? (
          <a href="#" className="link primary">
            Go to Admin Dashboard
          </a>
        ) : (
          <a href="#" className="link primary">
            Admin Dashboard (Restricted)
          </a>
        )}

        <a href="#" className="link">
          User Profile
        </a>

        <p style={{ marginTop: "15px" }}>
          Current Role: <b>{role}</b>
        </p>
      </div>
    </div>
  );
}

export default App;