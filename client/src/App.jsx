import React, { useState } from "react";
import "./App.css";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Attendance from "./Attendance";
import Settings from "./Settings";
function App() {
  const [page, setPage] = useState("Dashboard");

  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", course: "BCA", email: "rahul@gmail.com" },
    { id: 2, name: "Priya Das", course: "BSc IT", email: "priya@gmail.com" },
    { id: 3, name: "Amit Roy", course: "BCA", email: "amit@gmail.com" }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    course: "",
    email: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      setStudents(students.map(s =>
        s.id === editId ? { ...form, id: editId } : s
      ));
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }

    setForm({ name: "", course: "", email: "" });
    setShowForm(false);
    setEditId(null);
  }

  function handleEdit(student) {
    setForm(student);
    setEditId(student.id);
    setShowForm(true);
  }

  function handleDelete(id) {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  }

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Admin Panel</h2>

        {["Dashboard", "Students", "Teachers", "Courses",
          "Attendance", "Settings"].map(item => (
          <button key={item} onClick={() => setPage(item)}>
            {item}
          </button>
        ))}
      </aside>

      <main className="content">

        {page === "Dashboard" ? (
          <>
            <h1>Welcome, Admin!</h1>
            <h3>Total Students: {students.length}</h3>
          </>
        ) : page === "Students" ? (
          <>
            <h1>Student Management</h1>

            <input
              type="text"
              placeholder="Search Student..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <button className="add-btn"
              onClick={() => {
                setForm({ name: "", course: "", email: "" });
                setEditId(null);
                setShowForm(!showForm);
              }}>
              + Add Student
            </button>

            {showForm && (
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Student Name"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                />

                <input
                  placeholder="Course"
                  value={form.course}
                  onChange={e => setForm({...form, course: e.target.value})}
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  required
                />

                <button type="submit">
                  {editId ? "Update Student" : "Save Student"}
                </button>
              </form>
            )}

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.email}</td>
                    <td>
                      <button onClick={() => handleEdit(student)}>
                        Edit
                      </button>

                      <button onClick={() => handleDelete(student.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
) : page === "Teachers" ? (
  <Teachers />
) : page === "Courses" ? (
  <Courses />
) : page === "Attendance" ? (
  <Attendance />
) : page === "Settings" ? (
  <Settings />
) : (
  <h1>{page} Management</h1>
)}
        

      </main>
    </div>
  );
}

export default App;