import { useCreateStudentMutation } from "./studentSlice";
import { useState } from "react";

const defaultImage = '/blank-profile-picture.svg';

function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [createStudent] = useCreateStudentMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // finalImageUrl removes any white spaces using trim, and then checks that the value does not equal "".
    // if that returns true then it uses the imageUrl value that was supplied through the form.
    // if it returns false, then it useses the default profile picture.
    const finalImageUrl = imageUrl.trim() !== "" ? imageUrl : defaultImage;
    const gpaNumber = +gpa;
    createStudent({ firstName, lastName, email, gpa: gpaNumber, imageUrl: finalImageUrl });
    setFirstName("");
    setLastName("");
    setEmail("");
    setGpa("");
    setImageUrl("");
  };

  return (
    <>
      <form className="add-student-form" onSubmit={handleSubmit}>
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
        <button>Add Student</button>
      </form>
    </>
  );
}

export default StudentForm;
