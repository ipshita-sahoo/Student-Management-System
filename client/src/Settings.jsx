import React, { useState } from "react";

function Settings() {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");

  const saveSettings = () => {
    alert("Settings saved successfully!");
    setPassword("");
  };

  return (
    <div>
      <h1>Admin Settings</h1>

      <h2>Profile Settings</h2>

      <label>Admin Name</label>
      <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <label>Email Address</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <label>New Password</label>
      <br />
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default Settings;