import { useGetStudentsQuery } from "./studentSlice";
import StudentForm from "./StudentForm";
import { Link } from "react-router-dom";
import "./studentList.less";

export const StudentCard = ({ student }) => {
  return (
    <>
      <div className="student-card">
        <li className="student-name">
          <h2>
            {student.firstName} {student.lastName}
          </h2>
        </li>
        <div className="student-image">
          <img src={student.imageUrl} />
        </div>
        <section className="student-info">
          <h3>{student.email}</h3>
          <p>{student.gpa}</p>
          <Link to={`/students/${student.id}`}> See Details </Link>
        </section>
      </div>
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
