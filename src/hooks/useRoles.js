import {useEffect, useState} from "react";
import AuthService from "../services/auth/auth.service";

const useRoles = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isModerator, setIsModerator] = useState(false);
    const [isUser, setIsUser] = useState(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setIsUser(user.roles.includes("ROLE_USER"));
            setIsAdmin(user.roles.includes("ROLE_ADMIN"));
            setIsModerator(user.roles.includes("ROLE_MODERATOR"));
        }
    }, []);

    return {isAdmin, isModerator, isUser};
};

export default useRoles;
