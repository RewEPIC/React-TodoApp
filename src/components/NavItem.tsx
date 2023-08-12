import { ReactNode } from "react"
import { NavLink, To } from "react-router-dom"
interface Props {
    to: To,
    children:  ReactNode
}

const className = "w-full h-full font-semibold hover:bg-emerald-600 flex justify-center p-8 transition text-white"

const NavItem = ({to,children} : Props) => {
    return (
        <NavLink to={to} className={({ isActive }) => `${className} ${isActive ? 'bg-emerald-400' : 'bg-slate-400'}`} >{children}</NavLink>
    )
}
export default NavItem