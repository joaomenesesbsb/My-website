import './styles.css';
import userImg from "../../assets/user.jpg";

export function HeaderProfile() {
    return (
        <header>
            <nav className="nav-content container">
                <div className="nav-left">
                    <h1>João Victor</h1>
                </div>
                <div className="nav-rigth">
                    <div className="links-content">
                        <div className="nav-item">Projetos</div>
                        <div className="nav-item">Curriculo</div>
                        <div className="nav-item">Contato</div>
                    </div>
                    <img src={userImg} alt="User" />
                </div>
            </nav>
        </header>
    )
}