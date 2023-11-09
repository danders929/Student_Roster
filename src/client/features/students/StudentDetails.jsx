import { useParams } from "react-router-dom";
import { useGetStudentByIdQuery } from "./studentSlice";
import UpdateStudentForm from "./updateStudent";

// Shows the details of a single student
export default function StudentDetails() {
  const { id } = useParams();
  const { data: student, isLoading } = useGetStudentByIdQuery(id);

  // Returns a loading message while query is running
  return isLoading ? (
    <p>Loading . . .</p>
  ) : (
    // Returns student details from query
    <main className="student-details">
      <img src={student.imageUrl} />
      <h1>
        {student.firstName} {student.lastName}
      </h1>
      <p>{student.email}</p>
      <p>{student.gpa}</p>
      <UpdateStudentForm studentId={id} />
    </main>
  );
}
