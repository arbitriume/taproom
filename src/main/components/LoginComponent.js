import React from 'react';
import LoginMenu  from './LoginMenu';

/**
 * The UI Component representing the "Log In" section of the
 * navigation menu bar.
 *
 * @class
 */
export class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.toggleOpenState = this.toggleOpenState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Toggles the open/closed status of the drop down menu for logging in/signing up.
     *
     * @function
     */
    toggleOpenState() {
        let open=this.state.open;
        open=!open;
        this.setState({
            open: open
        });
    }

    /**
     * Sets the anchor point for the drop down menu upon click event.
     *
     * @function
     *
     * @param event
     */
    handleClick(event) {
        event.preventDefault();
        this.setState({
            anchor: event.currentTarget
        });
        this.toggleOpenState();
    }

    /**
     * Renders Log In section of the navigation menu bar and the LoginMenu component.
     *
     * @function
     */
    render() {
        return (
            <div ref="megaMenu1" className="login_box">
                <a href={"#"} className="nav_log nav_item nav_text" onClick={this.handleClick} >
                    {"Log In"}
                </a>
                <LoginMenu
                    open={this.state.open}
                    handleRequestClose={this.toggleOpenState}
                    anchor={this.state.anchor || window}
                />

            </div>
        );
    }
}