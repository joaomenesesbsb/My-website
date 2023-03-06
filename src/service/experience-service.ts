import { ExperienceDTO } from "../models/experience";

export function findAll(): ExperienceDTO[] {
    return experiences;
}

export function findById(id: number): ExperienceDTO | undefined {
    return experiences.find(x => x.id === id);
}

let experiences: ExperienceDTO[] = [
    {
        "id": 1,
        "company": "WaySushi",
        "function": "Sushiman",
        "description": "Trabalho em equipe e realizações de tarefas com precisão e ordem.",
        "period": "Atualmente trabalhando"
    },
    {
        "id": 2,
        "company": "Kijin sushi",
        "function": "Sushiman",
        "description": "Trabalho em equipe e realizações de tarefas com precisão e ordem.",
        "period": "03/11/2018 - 07/10/2021"
    },
    {
        "id": 3,
        "company": "São Paulo",
        "function": "Garçon",
        "description": "Trabalho em quipe, atendimento ao cliente",
        "period": "09/11/2016 - 03/11/2018"
    },
    {
        "id": 4,
        "company": "St. Paul Plaza Hotel",
        "function": "Jovem aprendiz",
        "description": "Realizar atividades administrativas e criações de tabelas personalizadas",
        "period": "10/02/2014 - 05/02/2016"
    }
]