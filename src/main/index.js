import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/NavBar';
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
                <div className="main_header">
                    <NavBar />
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<WelcomePage />, document.getElementById("app"));

