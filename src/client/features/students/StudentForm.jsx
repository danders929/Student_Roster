// import useAddStudentMutation here 
import { useState } from "react"


function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [addStudent] = useAddStudentMutation

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(firstName, lastName, email);
    setFirstName('');
    setLastName('');
    setEmail('');
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button>Add Student</button>
      </form>


    </>

  )
}

export default StudentForm