import React from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Book Management App</h1>
            <hr/>
            <div className="links">
                <NavLink to="/" className="link" activeClassname="active" excat>
                    Book List
                </NavLink>
                <NavLink to="/add" className="link" activeClassname="active">
                    Add Book
                </NavLink>
            </div>
        </header>
    );

};

export default Header;