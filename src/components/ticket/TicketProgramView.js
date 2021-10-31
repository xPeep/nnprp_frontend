import GenericList from "../reusables/GenericList";
import TicketProgramListItem from "./TicketProgramListItem";
import {useParams} from "react-router";

const TicketProgramView = () => {
    const {id} = useParams();

    return (
        <GenericList title="Ticket List for Program" ListItem={TicketProgramListItem}
                     url={process.env.REACT_APP_SERVER_URL + '/ticket?programId=' + id}/>
    );
};

export default TicketProgramView;
