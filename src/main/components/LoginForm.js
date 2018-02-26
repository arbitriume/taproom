import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

/**
 * The UI Component representing the drop down menu for logging in/signing up.
 *
 * @class
 */
export class LoginForm extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {isSigningUp: false};
    }

    /**
     * Toggles the  menu fields for logging in/signing up upon a click event.
     *
     * @function
     */
    handleClick() {
        let state = this.state.isSigningUp;
        state = !state;
        this.setState({
            isSigningUp: state
        });
    }

    /**
     * Renders the drop down menu for logging in/signing up.
     *
     * @function
     */
    render() {
        let confirmPass, userEmail, userAge, flexSetting, buttonText;
        if(this.state.isSigningUp) {
            confirmPass =
                <div className="bp--login-field">
                    <TextField
                        label="Confirm Password"
                        type="password"
                    />
                </div>;
            userEmail =
                <div className="bp--login-field">
                    <TextField
                        label="Email"
                    />
                </div>;
            userAge =
                <div className="bp--login-field">

                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedG"
                            />
                        }
                        label="I'm 21 or older."
                    />

                </div>;
            flexSetting =
                <div className="bp--login-field">
                    {"Already have an account?"}
                    <a onClick={this.handleClick} href={"#"} className="new_account">
                        {"Log In"}
                    </a>
                </div>;
            buttonText = "Join";
        } else {
            confirmPass = null;
            userEmail = null;
            userAge = null;
            buttonText = "Log In";
            flexSetting =
                <div className="bp--login-field">
                    {"Need an account?"}
                    <a onClick={this.handleClick} href={"#"} className="new_account">
                        {"Sign Up"}
                    </a>
                </div>;
        }

        return (
            <div className="login_form">
                <div className="bp--login-field">
                    <TextField
                        label="Username"
                    />
                </div>
                {userEmail}
                <div className="bp--login-field">
                    <TextField
                        label="Password"
                        type="password"
                    />
                </div>
                {confirmPass}
                <br />
                {userAge}
                <div className="bp--login-field">
                    <Button raised={true} disableFocusRipple={true} disableRipple={true}>{buttonText}</Button>
                </div>
                <br />
                <div className="bp--login-field">
                    <a href={"#"} className="forgot_pass">
                        {"Forgot Password?"}
                    </a>
                </div>
                <br />
                {flexSetting}
            </div>
        );
    }
}
