import LogoBanner from "../../assets/banner-img.png"

export const BannerSection = () => {
    return(
        <section className="BannerSection__container">

            <div className="BannerSection__Content">
                
                <p className="BannerSection__Name">JOSEDASILVA</p>
                <h1 className="BannerSection__Title">Bem vindo ao meu portfólio</h1>
                <p>Uma Frase interessante sobre mim</p>
                <button className="BannerSection__Button">Saiba mais</button>
    
            </div>

            <img src= {LogoBanner} alt="" />

        </section>
        

        
    )

}