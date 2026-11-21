import React, { useState } from "react";

function Attendance() {
  const [records, setRecords] = useState([
    { id: 1, name: "Rahul Sharma", date: "21-11-2026", status: "Present" },
    { id: 2, name: "Priya Das", date: "21-11-2026", status: "Absent" }
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const addAttendance = () => {
    if (!name || !date) {
      alert("Please fill all fields");
      return;
    }

    setRecords([
      ...records,
      { id: Date.now(), name, date, status }
    ]);

    setName("");
    setDate("");
    setStatus("Present");
  };

  return (
    <div>
      <h1>Attendance Management</h1>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={addAttendance}>Add Attendance</button>

      <h2>Attendance List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;