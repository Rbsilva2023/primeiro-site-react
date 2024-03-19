import WhatSappIcon from "../../assets/whatsapp-icon.png";
import LinkeDinIcon from "../../assets/linkedin-icon.png";
import  GithubIcon from "../../assets/github-icon.png";

export const Footer = () => {
    return(
        <footer>
            <h3>Contato</h3>
            <img src={WhatSappIcon} alt="" />
            <img src={LinkeDinIcon} alt="" />
            <img src={GithubIcon} alt="" />
            <p> Todos os direitos reservados - José da silva</p>
        </footer>
    )

}