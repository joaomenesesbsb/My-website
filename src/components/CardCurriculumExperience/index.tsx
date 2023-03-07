import './styles.css';
import { ExperienceDTO } from '../../models/experience';


type Props ={
    experience : ExperienceDTO;
}
export function CardCurriculumExperience({experience}: Props) {

    return (
        <main>
            <div className="card-experience">
                <h3>{experience.company}</h3>
                <h4>{experience.period}</h4>
                <p>{experience.description}</p>
            </div>
        </main>
    )
}