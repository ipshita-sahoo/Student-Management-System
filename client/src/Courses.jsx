import React, { useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, name: "BSc IT", duration: "4 Years", fee: "40000" },
    { id: 2, name: "BCA", duration: "3 Years", fee: "35000" }
  ]);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [fee, setFee] = useState("");

  const addCourse = () => {
    if (!name || !duration || !fee) {
      alert("Please fill all fields");
      return;
    }

    setCourses([
      ...courses,
      { id: Date.now(), name, duration, fee }
    ]);

    setName("");
    setDuration("");
    setFee("");
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div>
      <h1>Course Management</h1>

      <input
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <input
        placeholder="Course Fee"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />

      <button onClick={addCourse}>Add Course</button>

      <h2>Course List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.fee}</td>
              <td>
                <button onClick={() => deleteCourse(course.id)}>
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

export default Courses;