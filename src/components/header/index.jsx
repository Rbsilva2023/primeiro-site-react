import logo from "../../assets/Portfólio.png"

export const Header = () => {
    return(
        <header className="header">
            
            <img src={logo} alt="" />
            <li className="li"><a href="#">Sobre</a></li>
            <li className="li"><a href="#">Stack</a></li>
            <li className="li"><a href="#">Projetos</a></li>
            <button className="button">Contato</button> 
            
        </header>
    )

}