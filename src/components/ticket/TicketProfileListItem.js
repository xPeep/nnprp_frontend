import {Link} from "react-router-dom";
import moment from "moment";

const TicketProfileListItem = ({item: ticket, listKey}) => {
    return (
        <div className="blog-preview" key={listKey}>
            <Link to={`/ticket/${ticket.id}`}>
                <h3>{ticket.program.film.name}</h3>
                <p>
                    <label >Was used: </label>
                    <input type="checkbox" disabled={true} defaultChecked={ticket.isUsed}/>
                </p>
                <div className={"top"}>
                    <label>Username: {ticket.user.username}</label>
                    <label >
                        Date: {moment(ticket.program.timestamp).format("Do MMMM YYYY, h:mm a")}
                    </label>
                </div>
            </Link>
        </div>
    );
};

export default TicketProfileListItem;