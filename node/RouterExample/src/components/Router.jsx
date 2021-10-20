import {Menu, Page} from './';
// import {Page} from './Page';
import React, {useState} from 'react';

export const Router = (props) => {

    const [route, setRoute] = useState(window.history.state || 'HomePage')

    window.onpopstate = (evt) => {
        setRoute(window.history.state || 'HomePage')
    }

    const handleRouterClick = (route) => {
        window.history.pushState(route, route);
        setRoute(route);
    }

    return (
        <>
            <Menu handleRouterClick={handleRouterClick}/>
            <Page route={route} handleRouterClick={handleRouterClick}/>
        </>
    );
}