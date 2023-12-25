import { useNavigate, useParams } from "react-router-dom"
import { InfoLine } from "./infoLine"

export const Friend = ( {api} ) => {
    const navigate = useNavigate()
    
    const params = useParams()
    const friend = api.get(params.friendName)

    return (
       <>
            <p>
                <InfoLine label={"Ім'я"} value={friend.name} />
                <InfoLine label={"Вік"} value={friend.age} />
                <InfoLine label={"Хобі"} value={friend.hobby} />
            </p>
            <button onClick={() => navigate(-1)}>Повернутись назад</button>
       </> 
    )
}