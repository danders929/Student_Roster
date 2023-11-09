import { useGetStudentByIdQuery, useUpdateStudentMutation } from "../studentSlice";
import { useState } from "react";
import { useParams } from "react-router";

function UpdateStudentForm() {
    // const { id }  = useParams()
    // const { data: student, isLoading } = useGetStudentByIdQuery();

    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gpa, setGpa] = useState('');
    const [updateStudent] = useUpdateStudentMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const gpaNumber = +gpa
        updateStudent({  firstName, lastName, email, gpa: gpaNumber});
        setFirstName('');
        setLastName('');
        setEmail('');
        setGpa('');
    };

    return (
        <>
        <div>
            
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
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    GPA:
                    <input type="number" value={gpa} onChange={(e) => setGpa(e.target.value)} />
                </label>
                <button>Update Student</button>                
            </form>
            
            </div>
        </>
        
    )
}

export default UpdateStudentForm