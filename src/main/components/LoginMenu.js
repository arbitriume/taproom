import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';

/**
 * The UI Component representing the drop down menu for logging in/signing up.
 *
 * @class
 */
export default class LoginMenu extends React.Component {
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
        let confirmPass,userEmail,flexSetting, buttonText;
        if(this.state.isSigningUp) {
            confirmPass =
                <div className="log_form_field">
                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth={true}
                    />
                </div>;
            userEmail =
                <div className="log_form_field">
                    <TextField
                        label="Email"
                        fullWidth={true}
                    />
                </div>;
            flexSetting =
                <div className="log_form_field">
                    {"Already have an account?"}
                    <a onClick={this.handleClick} href={"#"} className="new_account">
                        {"Log In"}
                    </a>
                </div>;
            buttonText = "Join";
        } else {
            confirmPass = null;
            userEmail = null;
            buttonText = "Log In";
            flexSetting =
                <div className="log_form_field">
                    {"Need an account?"}
                    <a onClick={this.handleClick} href={"#"} className="new_account">
                        {"Sign Up"}
                    </a>
                </div>;
        }

        return (
                <Popover
                    open={this.props.open}
                    anchorEl={this.props.anchor}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    onRequestClose={this.props.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <div className="log_form_field">
                        <TextField
                            label="Username"
                            fullWidth={true}
                        />
                    </div>
                    {userEmail}
                    <div className="log_form_field">
                        <TextField
                            label="Password"
                            type="password"
                        />
                    </div>
                    {confirmPass}
                    <br />
                    <div className="log_form_field">
                        <Button raised={true} disableFocusRipple={true} disableRipple={true}>{buttonText}</Button>
                    </div>
                    <br />
                    <div className="log_form_field">
                        <a href={"#"} className="forgot_pass">
                            {"Forgot Password?"}
                        </a>
                    </div>
                    <br />
                    {flexSetting}
                </Popover>
        );
    }
}