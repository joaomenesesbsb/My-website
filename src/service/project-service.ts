import { ProjectDTO } from "../models/project";

export function findAll(): ProjectDTO[] {
    return projects;
}

export function findById(id: number): ProjectDTO | undefined {
    return projects.find(x => x.id === id);
}

let projects: ProjectDTO[] = [
    {
        "id": 1,
        "name": "DSCommerce",
        "description": "Projeto baseado em e-commerce",
        "imgUrl": "https://raw.githubusercontent.com/joaomenesesbsb/My-website-resources/main/img/Catalog.png",
        "skills": [
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
]