import linkedinImg from "../../assets/linkedin.png";
import siteImg from "../../assets/site.png";
import emailImg from "../../assets/email.png";
import phoneImg from "../../assets/phone.png";
import happyImg from "../../assets/happy.png";

type Props = {
    onContactClose: Function;
}

export default function CardContact({ onContactClose }: Props) {

    return (
        <div className="card-contact-bg" onClick={() => onContactClose()}>
            <div className="card-contact-box" onClick={(e) => e.stopPropagation()}>
                <div className="header-contact">
                    <div><h3>João Meneses</h3></div>
                    <div className="card-contact-btn" onClick={() => onContactClose()}>X</div>
                </div>
                <div className="card-contact-content">
                    <h6>Infotmações de Contato</h6>
                    <div>
                        <div className="info-contact">
                            <img src={linkedinImg} alt="Linkedin" />
                            <div>
                                <h5>Linkedin</h5>
                                <a href="https://www.linkedin.com/in/jo%C3%A3o-meneses-8198501b6/">linkedin.com/in/joão-meneses-8198501b6</a>
                            </div>
                        </div>
                        <div className="info-contact">
                            <img src={siteImg} alt="site" />
                            <div>
                                <h5>Site</h5>
                                <a href="https://joao-website.netlify.app/">joao-website.netlify.app/</a>
                            </div>
                        </div>
                        <div className="info-contact">
                            <img src={phoneImg} alt="phone" />
                            <div>
                                <h5>Telefone</h5>
                                <p>(61) 998 939 366</p>
                            </div>
                        </div>
                        <div className="info-contact">
                            <img src={emailImg} alt="email" />
                            <div>
                                <h5>Email</h5>
                                <p>joaovic2012@hotmail.com</p>
                            </div>
                        </div>
                        <div className="info-contact">
                            <img src={happyImg} alt="brithday" />
                            <div>
                                <h5>Aniversário</h5>
                                <p>02 de julho</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}