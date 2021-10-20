export function CustomActivity(props){
    const {text, classes, Icon, bgColor, textColor, handleClick, route, borderRadius } = props;
    return (
        <button className={classes} style={{background: bgColor, color: textColor, borderRadius: borderRadius}} onClick={handleClick?.bind(this, route)}> <Icon/> {text} </button>
    )
}

