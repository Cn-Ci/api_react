
export const MenuItem = (props) => {

    const {route, text, handleMenuClick} = props;

    return (
        <li className="nav-item">
            <span className="nav-link active" onClick={handleMenuClick.bind(this, route)}>{text}</span>
        </li>
    );
}