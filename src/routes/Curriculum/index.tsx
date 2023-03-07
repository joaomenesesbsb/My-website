import './styles.css'
import { UserCardCurriculum } from "../../components/UserCardCurriculum";
import * as experienceService from "../../service/experience-service";
import * as courseService from "../../service/course-service";
import { CardCurriculumExperience } from '../../components/CardCurriculumExperience';
import { CardCurriculumCourse } from '../../components/CardCurriculumCourse';

export default function Curriculum() {
    return (
        <main className="container mb20">
            <UserCardCurriculum />
            <section id="Experience" className="container">
                <div className="curriculum-title">
                    <h2>Experiências</h2>
                </div>
                {
                    experienceService.findAll().map(exp => <CardCurriculumExperience key={exp.id} experience={exp} />)
                }
            </section>
            <section id="school" className="container">
                <div className="curriculum-title">
                    <h2>Escolaridade</h2>
                </div>
                {
                    courseService.findAll().map(course => <CardCurriculumCourse key={course.id} course={course} />)
                }
            </section>
        </ main>
    )
}