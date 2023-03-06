import './styles.css';
import { ProjectDTO } from '../../models/project';

type Props = {
    project: ProjectDTO;
}


export function CardProject({ project }: Props) {
    return (
        <main >
            <div className="card-project-content">
                <div className="card-project-left">
                    <img src={project.imgUrl}></img>
                </div>
                <div className="card-project-rigth">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </div>
        </main>
    )
}