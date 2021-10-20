import { MenuItem } from './';

export const Menu = (props) => {

    const {handleRouterClick} = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <MenuItem text="Home" route="HomePage" handleMenuClick={handleRouterClick}/>
                        <MenuItem text="Cat1" route="Cat1Page" handleMenuClick={handleRouterClick}/>
                        <MenuItem text="Cat2" route="Cat2Page" handleMenuClick={handleRouterClick}/>
                        <MenuItem text="Cat3" route="Cat3Page" handleMenuClick={handleRouterClick}/>
                    </ul>
                </div>
            </div>
        </nav>
    );


}