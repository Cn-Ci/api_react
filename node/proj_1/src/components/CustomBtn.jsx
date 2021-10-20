export function CustomBtn(props){
    const {text, classes, Icon, bgColor, textColor, border, width, onMouseOver, borderRadius } = props;
    return (
        <button className={classes} style={{background: bgColor, color: textColor, border: border, width: width, borderRadius: borderRadius}} onMouseOver={onMouseOver} > <Icon/> {text} </button>
    )
}
