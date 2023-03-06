import './styles.css'
import { UserCardCurriculum } from "../../components/UserCardCurriculum";
import { CardCurriculumExperience } from '../../components/CardCurriculumExperience';
import * as experienceService from "../../service/experience-service";

export default function Curriculum() {
    return (
        <main className="container">
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
            </section>
        </ main>
    )
}