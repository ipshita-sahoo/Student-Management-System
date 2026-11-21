import React, { useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Rahul Sen", subject: "Mathematics", email: "rahul@gmail.com" },
    { id: 2, name: "Priya Roy", subject: "English", email: "priya@gmail.com" }
  ]);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  function addTeacher(e) {
    e.preventDefault();

    setTeachers([
      ...teachers,
      {
        id: Date.now(),
        name,
        subject,
        email
      }
    ]);

    setName("");
    setSubject("");
    setEmail("");
  }

  function deleteTeacher(id) {
    setTeachers(teachers.filter(t => t.id !== id));
  }

  return (
    <div>
      <h1>Teacher Management</h1>

      <form onSubmit={addTeacher}>
        <input
          placeholder="Teacher Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add Teacher</button>
      </form>

      <h2>Teacher List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map(t => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.subject}</td>
              <td>{t.email}</td>
              <td>
                <button onClick={() => deleteTeacher(t.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;