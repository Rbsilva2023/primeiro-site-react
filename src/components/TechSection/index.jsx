import { Techlist } from "./TechList"
import styles from "../../styles/style.module.css";

export const TechSection = () => {
    return(
       <>
            <section className={styles.techsection}>

                 <div  className={styles.techsection__container}>
                    <div>

                     <h1>Tecnologias</h1>

                    </div>
                    
                    <div>

                     < Techlist />

                    </div>

                 </div>

            </section>
       </>
    )
}
    
