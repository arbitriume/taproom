import React from 'react';
import { LoginComponent } from './LoginComponent';

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
export class NavBar extends React.Component {

    /**
     * Renders the navigation menu bar and associated menu components.
     *
     * @function
     */
    render() {
        const pages = ["Company Logo","Features", "Our Team", "News", "Contact", "Admin"];
        const navLinks = pages.map((page, index) => {
           return (
                 <a href={"#"} className="nav_item nav_text" key={index}>
                     {page}
                 </a>
           )
        });

        return <nav className="nav_bar">{navLinks}<LoginComponent /></nav>
    }
}