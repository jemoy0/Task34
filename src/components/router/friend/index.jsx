import { Link, useParams } from "react-router-dom"
import { InfoLine } from "./infoLine"

export const Friend = ( {api} ) => {
    const params = useParams()
    const friend = api.get(params.friendName)

    return (
       <>
            <InfoLine label={"Ім'я"} value={friend.name} />
            <InfoLine label={"Вік"} value={friend.age} />
            <InfoLine label={"Хобі"} value={friend.hobby} />
            <Link to={"/"}>Назад до головної</Link>
       </> 
    )
}