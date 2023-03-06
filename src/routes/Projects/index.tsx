import './styles.css';
import { CardProject } from "../../components/CardProject";
import { ProjectDTO } from "../../models/project";
import { useSubmit } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as projectService from '../../service/project-service'

const project: ProjectDTO = {
    id: 1,
    name: "DSCommerce",
    description: "Projeto baseado em e-commerce",
    imgUrl: "https://raw.githubusercontent.com/joaomenesesbsb/My-website-resources/main/img/Catalog.png",
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
            <div className="cards-projects pd20">

                {
                    projectService.findAll().map(project => <CardProject key={project.id} project={project} />)
                }
            </div>
        </section>
    )
}