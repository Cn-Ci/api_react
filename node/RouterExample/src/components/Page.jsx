import {HomePage, Cat1Page, Cat2Page, Cat3Page} from '../pages'


export const Page = (props) => {

    const {route, handleRouterClick } = props;

    return (
        <main>
            {route === "HomePage" && <HomePage handleClick={handleRouterClick}/>}
            {route === "Cat1Page" && <Cat1Page/>}
            {route === "Cat2Page" && <Cat2Page/>}
            {route === "Cat3Page" && <Cat3Page/>}
        </main>
    );
}