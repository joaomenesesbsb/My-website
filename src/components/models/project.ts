import { SkillDTO } from "./skill";

export type ProjectDTO ={
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    skills: SkillDTO[];
}