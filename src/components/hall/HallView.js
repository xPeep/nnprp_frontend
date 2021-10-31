import HallListItem from "./HallListItem";
import GenericList from "../reusables/GenericList";
import {useHistory} from "react-router";
import useRoles from "../../hooks/useRoles";

const HallView = ({parent: cinema}) => {
    const history = useHistory();
    const {isAdmin} = useRoles();

    function handleClick() {
        history.push(`/hall/add/${cinema.id}`);
    }

    return (
        <div>
            <GenericList title={"All halls of cinema: " + cinema.name} ListItem={HallListItem} url={process.env.REACT_APP_SERVER_URL + '/hall?cinemaId=' + cinema.id} parentId={cinema.id}/>
            {isAdmin && <button onClick={handleClick}>Add Hall</button>}
        </div>

    );
};

export default HallView;
