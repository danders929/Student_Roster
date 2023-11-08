import { Link } from 'react-router-dom';
import { useGetStudentsQuery } from "./studentSlice"

export const StudentCard = ({ student }) => {
    return(
        <>
            <li className="student-name">
                <div className="student-image">
                    <img src="  " />
                </div>
                <section className="student-info">
                    <h2>{student.firstName} {student.lastName}</h2>
                    <h3>{student.email}</h3>
                    <p>{student.gpa}</p>
                </section>
            </li>
        </>
    );
}

export default function StudentList() {
// insert useGetStudentsQuery, should look like this

const { data: S, error, isLoading } = useGetStudentsQuery();
if (isLoading) return <div> Loading . . . </div>
if (error) return <div> Error . . . </div>
const student = S?.student


    return(
        <>
        <ul>
            { student?.map((S) => (
                <StudentCard key = {S.id} student = {S} />
            )) }

            {/* this is for testing purposes, when I have data Ill be able to use the code above
            <div>first name</div>
            <div>last name</div>
            <div>email</div>
            <div>image</div>
            <div>GPA 2.1</div> */}
        </ul>
        </>
    );
}