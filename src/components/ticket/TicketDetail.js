import {useHistory, useParams} from "react-router";
import GenericDetail from "../reusables/GenericDetail";
import moment from "moment";
import TicketDataService from "../../services/api/TicketDataService";

const TicketDetail = () => {
    const {id} = useParams();
    const history = useHistory();


    const handleDelete = () => {
        TicketDataService.remove(id).then(() => {
            history.go(-1);
        });
    };

    const DetailLayout = ({item: ticket}) => {
        return (
            <div>
                {ticket && <div>
                    <h3>{ticket.program.film.name}</h3>
                    <p>Date: {moment(ticket.program.timestamp).format("Do MMMM YYYY, h:mm a")}</p>
                    <p>Username: {ticket.user.username}</p>
                    <p>Cinema: {ticket.program.hall.cinema.name}</p>
                    <p>Hall: {ticket.program.hall.name}</p>
                    <p>Was used: {ticket.isUsed ? "true" : "false"}</p>
                </div>}
            </div>);
    }

    return (
        <GenericDetail DetailLayout={DetailLayout} handleDelete={handleDelete} modifiable={false} deletableByUser={true}
                       url={process.env.REACT_APP_SERVER_URL + "/ticket/"}/>
    );
};

export default TicketDetail;
