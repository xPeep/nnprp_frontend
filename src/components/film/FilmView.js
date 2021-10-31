import FilmListItem from "./FilmListItem";
import GenericList from "../reusables/GenericList";
import {useHistory} from "react-router";
import useRoles from "../../hooks/useRoles";

const FilmView = () => {
    const history = useHistory();
    const {isAdmin} = useRoles();

    function handleClick() {
        history.push("/film/add");
    }

    return (
        <div>
            <GenericList title="All Films" ListItem={FilmListItem} url={process.env.REACT_APP_SERVER_URL + '/film'}/>
            {isAdmin && <button onClick={handleClick}>Add film</button>}
        </div>
    );
};

export default FilmView;
