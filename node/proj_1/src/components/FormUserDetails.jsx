import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <TextField 
                        hintText="Enter your firstName" 
                        floatingLabelText="firstName" 
                        onChange={handleChange('firstName')} 
                        defaultValue={values.firstName} 
                    /> <br/>
                   <TextField 
                        hintText="Enter your lastName" 
                        floatingLabelText="lastName" 
                        onChange={handleChange('lastName')} 
                        defaultValue={values.lastName} 
                    /> <br/>
                   <TextField 
                        hintText="Enter your email" 
                        floatingLabelText="email" 
                        onChange={handleChange('email')} 
                        defaultValue={values.email} 
                    /> <br/>
                   <RaisedButton label="Continue" primary={true} styles={styles.button} onClick={this.continue} />
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15
    }
}
export default FormUserDetails
