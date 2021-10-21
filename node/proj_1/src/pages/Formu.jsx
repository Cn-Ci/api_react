import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { CustomActivity } from '../components/CustomActivity';
import { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { FiUserCheck } from 'react-icons/fi';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
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
                    <MuiThemeProvider>
                        <React.Fragment className="text-white">
                            <TextField 
                                hintText="Enter your email" 
                                floatingLabelText="email" 
                                // defaultValue={values.occupation} 
                            /> <br/>
                            <TextField 
                                hintText="Enter your password" 
                                floatingLabelText="password" 
                                // defaultValue={values.city} 
                            /> <br/>
                            <RaisedButton className="mx-2" label="Connexion" primary={true} styles={styles.button} />
                        </React.Fragment>
                    </MuiThemeProvider>
                }
            </div>
        </div>
    );
}

const styles = {
  button: {
      margin:15
  }
}
