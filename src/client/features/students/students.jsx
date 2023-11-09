import { useGetStudentsQuery, useDeleteStudentMutation } from "./studentSlice";
import StudentForm from "./StudentForm";
import { Link, useNavigate } from "react-router-dom";


export const StudentCard = ({ student }) => {
  // Delete Handle function
  const navigate = useNavigate();
  const [deleteStudent] = useDeleteStudentMutation();
  const handleDelete = () => {
    deleteStudent(student.id);
    navigate("/students");
  };

  return (
    <>
      <li className="student-name">
        <div className="student-image">
          <img src="  " />
        </div>
        <section className="student-info">
          <h2>
            {student.firstName} {student.lastName}
          </h2>
          <h3>{student.email}</h3>
          <p>{student.gpa}</p>
          <Link to={`/students/${student.id}`}> See Details </Link>
        </section>
      </li>
      <button className="deleteButton" onClick={handleDelete}>X</button>
    </>
  );
};

export default function StudentList() {
  const { data: students, error, isLoading } = useGetStudentsQuery();
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  return (
    <>
      <StudentForm />
      <ul>
        {students?.map((S) => (
          <StudentCard key={S.id} student={S} />
        ))}
      </ul>
    </>
  );
}
