import { useParams, useNavigate } from "react-router-dom";
import { useGetStudentByIdQuery } from '../features/studentSlice'
import { useDeleteStudentMutation } from "../features/studentSlice";

// Shows the details of a single student
export default function StudentDetails() {
  const { id } = useParams();
  const { data: student, isLoading } = useGetStudentByIdQuery(id);
  const [deleteStudent] = useDeleteStudentMutation(id);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteStudent(id);
    navigate("/students");
  };

// Returns a loading message while query is running
  return isLoading ? (
    <p>Loading . . .</p>
  ) : (
    // Returns student details from query
    <main className="student-details">
    <br/>
      <button onClick={handleDelete}>X</button>
      <img src={student.imageUrl}/>
      <h1>{student.firstName} {student.lastName}</h1>
      <p>{student.email}</p>
      <p>{student.gpa}</p>
    </main>
  );
}