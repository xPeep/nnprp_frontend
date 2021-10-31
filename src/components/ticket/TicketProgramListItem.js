import moment from "moment";
import TicketDataService from "../../services/api/TicketDataService";
import {useState} from "react";

const TicketProfileListItem = ({item: ticket, listKey}) => {
    const [isUsed, setIsUsed] = useState(ticket.isUsed)

    const handleTicketScan = () => {
        TicketDataService.save({...ticket, isUsed: !isUsed}).then(() => {
                console.log("ticket red", ticket)
                setIsUsed(!isUsed)
            }
        )
    }

    return (
        <div className="blog-preview" key={listKey}>
            <h3>{ticket.program.film.name}</h3>
            <p>Date: {moment(ticket.program.timestamp).format("Do MMMM YYYY, h:mm a")}</p>
            <p>Username: {ticket.user.username}</p>
            <p>Ticket ID: {ticket.id}</p>
            <input type="checkbox" defaultChecked={isUsed} onChange={handleTicketScan} />
        </div>
    );
};

export default TicketProfileListItem;