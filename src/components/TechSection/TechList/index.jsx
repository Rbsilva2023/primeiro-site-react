import { ListTecnologic } from "../../Data/lists";
import { TechCard } from "./TechCard";


export const Techlist = () => {
    return(
        <ul>
            {ListTecnologic.map(lists =>(
                
            < TechCard key={lists.id} lists={lists}/>
            ))}

        </ul>
    )
}