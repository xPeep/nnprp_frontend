import TicketProfileListItem from "./TicketProfileListItem";
import GenericList from "../reusables/GenericList";

const TicketProfileView = ({id}) => {
    return (
        <GenericList title="Your tickets" ListItem={TicketProfileListItem}
                     url={process.env.REACT_APP_SERVER_URL + '/ticket?userId=' + id}/>
    );
};

export default TicketProfileView;
