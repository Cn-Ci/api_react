export const MenuItem = (props) => {

    const {route, text, handleMenuClick, bgColor, textColor} = props;

    return (
        <li className="nav-item">
            <span className="nav-link active" style={{background: bgColor, color: textColor }} onClick={handleMenuClick.bind(this, route)}>{text}</span>
        </li>
    );
}