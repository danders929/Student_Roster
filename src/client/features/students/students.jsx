import { useGetStudentsQuery, useDeleteStudentMutation } from "./studentSlice";
import StudentForm from "./StudentForm";
import { Link, useNavigate } from "react-router-dom";
import "./studentList.less";

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
      <ul className="student-card">
        <div className="student-image">
          <img src={student.imageUrl} />
        </div>
        <section className="student-info">
          <li className="student-name">
            <h2>
              {student.firstName} {student.lastName}
            </h2>
          </li>
          <h3>{student.email}</h3>
          <p>Gpa - {student.gpa}</p>
          <Link to={`/students/${student.id}`}> See Details </Link>
        </section>
        <button className="deleteButton" onClick={handleDelete}>
          X
        </button>
      </ul>
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
