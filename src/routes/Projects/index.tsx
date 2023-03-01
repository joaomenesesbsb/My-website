import './styles.css';
import { CardProject } from "../../components/CardProject";
import { ProjectDTO } from "../../components/models/project";

const project: ProjectDTO = {
    id: 1,
    name: "DSCommerce",
    description: "Projeto baseado em e-commerce",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/10-big.jpg",
    skills: [
        {
            id: 2,
            name: "HTML"
        },
        {
            id: 3,
            name: "CSS"
        }
    ]
}

export default function Projects() {
    return (
        <section id="projects-catalog" className="container">
            <h2>Meus Projetos</h2>
            <div>
               <CardProject project={project}/> 
               <CardProject project={project}/>
               <CardProject project={project}/>
               <CardProject project={project}/>
               <CardProject project={project}/>
               <CardProject project={project}/>
            </div>
        </section>
    )
}