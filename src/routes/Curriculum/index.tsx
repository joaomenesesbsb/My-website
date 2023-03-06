import './styles.css'
import { UserCardCurriculum } from "../../components/UserCardCurriculum";

export default function Curriculum() {
    return (
        <main className="container">
            <UserCardCurriculum />
            <section id="Experience" className="container">
                <div className="experience-title">
                    <h2>Experiência</h2>
                </div>

            </section>
        </ main>
    )
}