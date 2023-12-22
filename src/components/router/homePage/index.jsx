import { Link } from "react-router-dom"

export const HomePage = ({friends}) => {

    return (
        <>
            <h3>Головна сторінка</h3>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.name}>
                        <Link to={`/${friend.name}`}>{friend.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}