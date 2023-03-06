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
        "description": "Trabalho em equipe e realizações de tarefas com precisão e ordem.",
        "period": "Atualmente trabalhando"
    }
]