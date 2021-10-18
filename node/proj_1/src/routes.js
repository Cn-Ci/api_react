import { Form } from "./pages/Form";
import { Home } from "./pages/home";

const routes = [
    {
        'name': 'login',
        'path': '/login',
        'component': Form,
    },
    {
        'name': 'index',
        'path': '/',
        'component': Home,
        'roles': ['ROLE_USER'],
    },
];

