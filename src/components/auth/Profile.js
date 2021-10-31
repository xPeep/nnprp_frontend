import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth/auth.service";
import TicketProfileView from "../ticket/TicketProfileView";

const Profile = () => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(AuthService.getCurrentUser());
    }, []);

    return (
        <div>
            {!currentUser && <p>Loading</p>}
            {currentUser &&
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>

                <p>
                    <strong>Id:</strong> {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
                <p>
                    <strong>Token:</strong> {currentUser.accessToken}
                </p>
                <hr/>
                <TicketProfileView id={currentUser.id}/>
            </div>}
        </div>
    );
};

export default Profile;