import {useHistory, useParams} from "react-router";
import GenericDetail from "../reusables/GenericDetail";
import HallDataService from "../../services/api/HallDataService";
import HallForm from "./HallForm";

const HallDetail = () => {
    const {id} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        HallDataService.remove(id).then(() => {
            history.go(-1);
        });
    };

    const DetailLayout = ({item: hall}) => {
        return (
            <div>
                {hall && <div>
                    <h2>{hall.name}</h2>
                    <p>Capacity: {hall.capacity}</p>
                </div>}
            </div>);
    }

    return (
        <GenericDetail DetailLayout={DetailLayout} DetailForm={HallForm} handleDelete={handleDelete}
                       url={process.env.REACT_APP_SERVER_URL + "/hall/"}/>
    );
};

export default HallDetail;
