import { Menu, Page } from "./";
import React, {useState} from 'react';

export const Router = (props) => {

    const [route, setRoute] = useState(window.history.state || 'Home')

    window.onpopstate = (evt) => {
        setRoute(window.history.state || 'Home')
    }

    const handleRouterClick = (route)=> {
        window.history.pushState(route,route);
        setRoute(route)
    }

    return (
        <>
            <Menu handleRouterClick={handleRouterClick}/>
            <Page route={route} handleRouterClick={handleRouterClick}/>
        </>
    )
}