import {useHistory, useParams} from "react-router";
import GenericDetail from "../reusables/GenericDetail";
import moment from "moment";
import ProgramDataService from "../../services/api/ProgramDataService";
import TicketDataService from "../../services/api/TicketDataService";
import AuthService from "../../services/auth/auth.service";
import {useState} from "react";
import useRoles from "../../hooks/useRoles";

const ProgramDetail = () => {
    const {id} = useParams();
    const history = useHistory();
    const {isUser, isModerator} = useRoles();

    const [submitted, setSubmitted] = useState(false);

    const handleDelete = () => {
        ProgramDataService.remove(id).then(() => {
            history.go(-1);
        });
    };

    const handleTicketScanning = () => {
        history.push("/program/revision/" + id);
    };

    const handleBuyTicket = () => {
        const user = AuthService.getCurrentUser()
        console.log("buying ticket", user);
        TicketDataService.save({user, program: {id}});
            setSubmitted(true);
    };

    const DetailLayout = ({item}) => {
        return (
            <div>
                {submitted ? (
                    <div>
                        <h4>Ticket ordered!</h4>
                    </div>
                ) : (
                    <div>
                        {item && <div>
                            <h2>{item.film.name}</h2>
                            <p>Language: {item.film.language}</p>
                            <p>Duration: {item.film.durationMinute} minute(s)</p>
                            <p>Description: </p>
                            <div>{item.film.description}</div>
                            <p>Exact time: {moment(item.timestamp).format("Do MMMM YYYY, h:mm a")}</p>
                            <p>Cinema: {item.hall.cinema.name}</p>
                            <p>Hall: {item.hall.name}</p>
                            { isUser && <button className="example-custom-input" onClick={handleBuyTicket}>Buy ticket</button>}
                            { isModerator && <button className="example-custom-input" onClick={handleTicketScanning}>Ticket scanning</button>}
                        </div>}
                    </div>
                )}
            </div>);
    }

    return (
        <GenericDetail DetailLayout={DetailLayout} handleDelete={handleDelete} modifiable={false} deletable={submitted}
                       url={process.env.REACT_APP_SERVER_URL + "/program/"}/>
    );
};

export default ProgramDetail;
