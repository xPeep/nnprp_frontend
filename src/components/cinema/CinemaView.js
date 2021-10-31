import CinemaListItem from "./CinemaListItem";
import GenericList from "../reusables/GenericList";
import {useHistory} from "react-router";
import useRoles from "../../hooks/useRoles";

const CinemaView = () => {
    const history = useHistory();
    const {isAdmin} = useRoles();

    function handleClick() {
        history.push("/cinema/add");
    }

    return (
        <div>
            <GenericList title="All Cinemas" ListItem={CinemaListItem} url={process.env.REACT_APP_SERVER_URL + '/cinema'}/>
            {isAdmin && <button onClick={handleClick}>Add cinema</button>}
        </div>

    );
};

export default CinemaView;
