import {MenuItem} from './';
import Nav from 'react-bootstrap/Nav'


export const Menu = (props) => {
    const {handleRouterClick} = props;

    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <MenuItem text="Home" bgColor="transparent" textColor="black" route="Home" handleMenuClick={handleRouterClick}>Active</MenuItem>
            </Nav.Item>
            <Nav.Item>
                <MenuItem text="Login" bgColor="transparent" textColor="black" route="Formu" handleMenuClick={handleRouterClick} eventKey="link-1">Option 2</MenuItem>
            </Nav.Item>
            <Nav.Item>
                <MenuItem text="Activity" bgColor="transparent" textColor="black" route="Activity" handleMenuClick={handleRouterClick} eventKey="link-2" > Option 3</MenuItem>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;