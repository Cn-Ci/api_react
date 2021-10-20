import {Home, Formu, Activity, SeLoger, SeNourrir, SeSoigner} from '../pages';

export const Page = (props) => {
    const {route, handleRouterClick} = props;
    return (
        <main>
            {route === "Home" && <Home/>}
            {route === "Formu" && <Formu/>}
            {route === "Activity" && <Activity/>}
            {route === "SeLoger" && <SeLoger/>}
            {route === "SeNourrir" && <SeNourrir handleClick={handleRouterClick} />}
            {route === "SeSoigner" && <SeSoigner/>}
        </main>
    );
}