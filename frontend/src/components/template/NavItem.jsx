export default function NavItem(props) {
    return (
        <a href={props.href}>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </a>
    )
}