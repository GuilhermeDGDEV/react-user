import './Nav.css'
import NavItem from './NavItem'

export default function Nav() {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem title="Início" icon="home" href="/" />
                <NavItem title="Usuários" icon="users" href="/users/" />
            </nav>
        </aside>
    )
}