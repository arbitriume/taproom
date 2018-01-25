import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/NavBar';
import MenuIcon from 'material-ui-icons/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
class WelcomePage extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="bp--nav-container">
                    <button className="bp--hamburger-button">
                        <MenuIcon key="foo" className="material-icons md-24 md-light"/>
                    </button>
                    <div className="bp--navpage-container">
                        <a href={"#"} className="bp--company-logo" key={1}>
                            {"Company Logo"}
                        </a>
                        <NavBar />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<WelcomePage />, document.getElementById("app"));

