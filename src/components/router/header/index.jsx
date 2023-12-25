import { Link, Outlet } from "react-router-dom"
import "./index.css"

export const Header = () => {
    return (
            <div>
                <div className="div">
                    <Link to={"/"} >На головну</Link>
                    <Link to={"/friends"}>Друзі</Link>
                </div>
                <Outlet/>
            </div>
    )
}