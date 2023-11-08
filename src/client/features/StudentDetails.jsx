import { useParams } from "react-router-dom";
import { getStudentQuery } from '../studentSlice'

// Shows the details of a single student
export default function StudentDetails() {
  const { id } = useParams();
  const { data: student, isLoading } = useStudentQuery(id);
// Returns a loading message while query is running
  return isLoading ? (
    <p>Loading . . .</p>
  ) : (
    // Returns student details from query
    <main classname="student-details">
      <h1>`${student.firstName} ${student.lastName}`<img src={student.imageUrl}/></h1>
      <p>{student.email}</p>
      <p>{student.gpa}</p>
    </main>
  );
}