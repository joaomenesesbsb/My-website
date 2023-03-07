import { CourseDTO } from "../models/course";
import { ExperienceDTO } from "../models/experience";

export function findAll(): CourseDTO[] {
    return courses;
}

export function findById(id: number): CourseDTO | undefined {
    return courses.find(x => x.id === id);
}

let courses: CourseDTO[] = [
    {
        "id": 99,
        "institution": "Secac-DF",
        "name": "Serviços Hoteleiros",
        "description": "Concluído",
        "period": "01/2014 - 12/2014"
    }, 
    {
        "id": 98,
        "institution": "Secac-DF",
        "name": "Serviços Administrativos",
        "description": "Concluído",
        "period": "01/2015 - 12/2015"
    },
    {
        "id": 97,
        "institution": "UNOPAR",
        "name": "Ciências Contabeis",
        "description": "Incompleto",
        "period": "01/2019 - 06/2021"
    },
    {
        "id": 96,
        "institution": "DevSuperior",
        "name": "Desenvolvedor Moderno",
        "description": "Concluído",
        "period": "03/2022 - 02/2023"
    },
]