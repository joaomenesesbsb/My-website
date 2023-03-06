import './styles.css';
import { CardProject } from "../../components/CardProject";
import * as projectService from '../../service/project-service'


export default function Projects() {
    return (
        <section id="projects-catalog" className="container">
            <h2>Meus Projetos</h2>
            <div className="cards-projects">

                {
                    projectService.findAll().map(project => <CardProject key={project.id} project={project} />)
                }
            </div>
        </section>
    )
}