import { useCreateStudentMutation } from "./studentSlice";
import { useState } from "react";

function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [createStudent] = useCreateStudentMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const gpaNumber = +gpa;
    createStudent({ firstName, lastName, email, gpa: gpaNumber });
    setFirstName("");
    setLastName("");
    setEmail("");
    setGpa("");
  };

  return (
    <>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          GPA:
          <input
            type="number"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </label>
        <button>Add Student</button>
      </form>
    </>
  );
}

export default StudentForm;
