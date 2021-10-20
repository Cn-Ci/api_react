

export const HomePage = (props) => {

    const {handleClick} = props;

    return (
        <>
            The Home Page
            <button onClick={handleClick.bind(this, "Cat1Page")}>Cat1</button>
        </>
    )
}