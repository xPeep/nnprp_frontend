import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth.service";

const Navbar = () => {
;
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);

        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
                Cinema testing
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/film"} className="nav-link">
                        Films
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/cinema"} className="nav-link">
                        Cinemas
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/program"} className="nav-link">
                        Program
                    </Link>
                </li>

            </div>

            {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/profile"} className="nav-link" id="profileLink">
                            {currentUser.username}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={logOut}>
                            LogOut
                        </a>
                    </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link" id="loginLink">
                            Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link" id="registerLink" >
                            Sign Up
                        </Link>
                    </li>
                </div>
            )}
        </nav>
    );
};

export default Navbar;