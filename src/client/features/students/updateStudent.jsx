import { useUpdateStudentMutation } from "./studentSlice";
import { useState } from "react";

function UpdateStudentForm({ studentId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [updateStudent] = useUpdateStudentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gpaNumber = +gpa;
    await updateStudent({
      id: studentId,
      firstName,
      lastName,
      email,
      gpa: gpaNumber,
      imageUrl
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setGpa("");
    setImageUrl("");
  };

  return (
    <>
      <div>
        <form className="updata-student-form" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input required
              type="email"
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
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <button>Update Student</button>
        </form>
      </div>
    </>
  );
}

export default UpdateStudentForm;
