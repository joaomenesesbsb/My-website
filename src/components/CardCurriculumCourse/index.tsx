import './styles.css';
import { CourseDTO } from '../../models/course';

type Props ={
    course : CourseDTO;
}
export function CardCurriculumCourse({course}: Props) {

    return (
        <main>
            <div className="card-course">
                <h3>{course.institution}</h3>
                <h4>{course.name} | {course.period}</h4>
                <p>{course.description}</p>
            </div>
        </main>
    )
}