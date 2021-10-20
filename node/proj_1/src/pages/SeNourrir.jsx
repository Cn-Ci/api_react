import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import food1 from "../components/assets/img/food1.jpg";
import food2 from "../components/assets/img/food2.jpg";
import food3 from "../components/assets/img/food3.jpg";
import food4 from "../components/assets/img/food4.jpg";
import { MdLogin } from 'react-icons/md';
import { CustomActivity } from '../components';

export const SeNourrir = (props) => {

    const {handleClick} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="text-center">
            <Button className="mb-5" variant="secondary" onClick={handleShow}>
                Inscrivez vous pour découvrir nos repas
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Les inscriptions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Vous devez remplir certaines conditions : <br/>
                    - Peser + de 5kg <br/>
                    - Etre gourmand <br/>
                    - Aimer les fruits et les légumes <br/>
                    <CustomActivity route="Formu" classes="btn-md m-3" handleClick={handleClick} bgColor="grey" textColor="white" text="Voir les critère de sélection" Icon={MdLogin} /> 
                    <br/><br/><br/>
                    Nous recherchons un cuisinier, pour postuler c'est par ici... <br/>
                    <CustomActivity route="Formu" classes="btn-md m-3" handleClick={handleClick} bgColor="grey" textColor="white" text="postulez ici" Icon={MdLogin} /> 
                </Offcanvas.Body>
            </Offcanvas>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="imgCarousel d-block w-100"
                    src={food1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Les pièces composées</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="imgCarousel d-block w-100"
                    src={food2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Les desserts</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="imgCarousel d-block w-100"
                    src={food3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-black">Les miniatures</h3>
                    <p className="text-black">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="imgCarousel d-block w-100"
                    src={food4}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-black">Les verrines</h3>
                    <p className="text-black">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p className="text-white text-center m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
            convallis elit quis dui tristique, vitae ullamcorper ipsum laoreet. Nullam sit amet metus at est dignissim 
            ullamcorper vel eu mi. Aliquam ultricies sollicitudin eros. Duis sit amet ullamcorper felis. Nunc sed leo 
            in sapien commodo venenatis quis vitae ex. Vestibulum at enim eget metus suscipit lacinia non sed neque. 
            Suspendisse potenti.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. <br/><br/> Vestibulum ante ipsum primis in 
            faucibus orci luctus et ultrices posuere cubilia curae; Nullam tempor venenatis lacinia. Integer est nulla,
            bibendum et efficitur in, ornare fermentum nulla. Donec vitae tortor felis. Sed ullamcorper, purus nec 
            interdum suscipit, neque justo finibus velit, sed tempus velit diam ut nisl. Nullam ac mi quis justo 
            vehicula pharetra vel sit amet mauris.
            Aenean feugiat hendrerit est quis bibendum. Nam efficitur libero et congue feugiat. <br/><br/> Aenean 
            rhoncus nunc augue, et varius leo dignissim eget. Quisque consectetur elit eget nibh ornare, pharetra 
            vulputate arcu auctor. Fusce a volutpat diam. Vestibulum fermentum ultricies dui, a tempus dui bibendum vel. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque 
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed faucibus porttitor eros, non 
            consectetur sem vehicula sit amet. Nulla quam lorem, vestibulum ac iaculis vel, elementum nec nulla. Ut 
            feugiat, ex sed semper pellentesque, odio mauris congue odio, eget faucibus quam nisi sed elit. Mauris ac 
            urna hendrerit, convallis nunc id, tempor lacus. Nunc sem ante, pellentesque sit amet viverra quis, molestie
            eget arcu.</p>
        </div>
    );
};

export default SeNourrir;