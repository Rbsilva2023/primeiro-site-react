export const TechCard = ({ lists }) => {
    return(
        <li>
            <img src={lists.image} alt={lists.name} />
            <h4>{lists.name}</h4>
        </li>
    )
}