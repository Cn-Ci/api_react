import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomActivity } from '../components/CustomActivity';
import { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { FiUserCheck } from 'react-icons/fi';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UserForm } from '../components/UserForm';


export function Formu() {
    
    const [page, setPage] = useState('null')
    const handleClick = (route) => {
        setPage(route)
        console.log(route)
    };

    return (
        <div className="text-center my-5">
            <div className="d-flex justify-content-center">
                <CustomActivity route="FormIns" classes="btn-md p-3 mx-2" handleClick={handleClick} borderRadius="40px" bgColor="black" textColor="white" text="S'enregistrer" Icon={FiUserPlus} /> 
                <CustomActivity route="FormLog" classes="btn-md p-3 mx-2 " handleClick={handleClick} borderRadius="40px" bgColor="black" textColor="white" text="Se connecter" Icon={FiUserCheck} /> 
            </div>
            <div className="mt-5">
                {page === 'FormIns' && <UserForm/>}

                {page === 'FormLog' &&
                    <Form className="mt-5 text-white">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                      <Form.Label className="text-black" column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control className="text-center" defaultValue="email@example.com" />
                      </Col>
                    </Form.Group>
                  
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                      <Form.Label column sm="2">
                        Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control className="text-center" type="password" placeholder="Password" />
                      </Col>
                    </Form.Group>
                  </Form>
                }
            </div>
        </div>
    );
}

