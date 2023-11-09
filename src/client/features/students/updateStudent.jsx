import { useUpdateStudentMutation } from "./studentSlice";
import { useState } from "react";

const defaultImage = '/blank-profile-picture.svg';

function UpdateStudentForm({ studentId, student }) {
  const [firstName, setFirstName] = useState(student.firstName || "");
  const [lastName, setLastName] = useState(student.lastName || "");
  const [email, setEmail] = useState(student.email || "");
  const [gpa, setGpa] = useState(student.gpa || "");
  const [imageUrl, setImageUrl] = useState(student.imageUrl || "");
  const [updateStudent] = useUpdateStudentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // finalImageUrl removes any white spaces using trim, and then checks that the value does not equal "".
    // if that returns true then it uses the imageUrl value that was supplied through the form.
    // if it returns false, then it useses the default profile picture.
    const finalImageUrl = imageUrl.trim() !== "" ? imageUrl : defaultImage;
    const gpaNumber = +gpa;
    await updateStudent({
      id: studentId,
      firstName,
      lastName,
      email,
      gpa: gpaNumber,
      imageUrl: finalImageUrl
    });
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setGpa(gpa);
    setImageUrl(imageUrl);
  };

  return (
    <>
      <div>
        <form className="update-student-form" onSubmit={handleSubmit}>
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
