import { Link } from "react-router-dom"

export const FriendList = ({friends}) => {
    return (    
        <ul>
            {friends.map((friend) => (
                <li key={friend.name}>
                    <Link to={`/friends/${friend.name}`}>{friend.name}</Link>
                </li>
            ))}
        </ul>
    )
}