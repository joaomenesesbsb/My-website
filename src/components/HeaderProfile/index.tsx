import './styles.css';
import userImg from "../../assets/user.jpg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CardContact from '../CardContact';

export function HeaderProfile() {

    const [contact, setContact] = useState({
        visible: false,
      });

    function handleContactClick() {
        setContact({...contact, visible: true})
    }

    function handleContactClose(){
        setContact({...contact, visible: false})
    }

    return (
        <header>
            <nav className="nav-content container">
                <div className="nav-left">
                    <Link to={"/"}>
                        <h1>João Victor</h1>
                    </Link>
                </div>
                <div className="nav-rigth">
                    <div className="links-content">
                        <Link to={"/projects"}>
                            <div className="nav-item">Projetos</div>
                        </Link>
                        <Link to={"/curriculum"}>
                            <div className="nav-item">Curriculo</div>
                        </Link>
                        <div onClick={handleContactClick} className="nav-item">Contato</div>
                    </div>
                    <Link to={"/"}>
                        <img src={userImg} alt="User" />
                    </Link>
                </div>
            </nav>

            {
                contact.visible && 
                <CardContact
                onContactClose={handleContactClose}
                 />
            }
        </header>
    )
}