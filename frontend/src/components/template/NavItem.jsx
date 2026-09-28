import { Link } from 'react-router'

export default function NavItem(props) {
    return (
        <Link to={props.href}>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </Link>
    )
}