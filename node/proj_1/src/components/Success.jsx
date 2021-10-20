import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        // Process Form // 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
                
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   <h1>Merci pour votre inscription !</h1>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
