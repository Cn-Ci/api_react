import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {

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
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
        
        return (
            <MuiThemeProvider>
               <React.Fragment className="text-white">
                   <List>
                        <ListItem
                            primaryText="FirstName"
                            secondaryText={firstName}
                        />
                   </List>
                   <List>
                        <ListItem
                            primaryText="lastName"
                            secondaryText={lastName}
                        />
                   </List>
                   <List>
                        <ListItem
                            primaryText="email"
                            secondaryText={email}
                        />
                   </List>
                   <List>
                        <ListItem
                            primaryText="occupation"
                            secondaryText={occupation}
                        />
                   </List>
                   <List>
                        <ListItem
                            primaryText="city"
                            secondaryText={city}
                        />
                   </List>
                   <List>
                        <ListItem
                            primaryText="bio"
                            secondaryText={bio}
                        />
                   </List>

                    <br/>
                   <RaisedButton className="mx-2" label="Confirm et Continue" primary={true} styles={styles.button} onClick={this.continue} />
                   <RaisedButton className="mx-2"label="Back" primary={false} styles={styles.button} onClick={this.back} />
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
export default Confirm
