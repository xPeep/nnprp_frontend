import {useHistory, useParams} from "react-router";
import GenericDetail from "../reusables/GenericDetail";
import FilmForm from "./FilmForm";
import FilmDataService from "../../services/api/FilmDataService";

const FilmDetail = () => {
    const {id} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        FilmDataService.remove(id).then(() => {
            history.push("/film");
        });
    };

    const DetailLayout = ({item: film}) => {
        return (
            <div>
                {film && <div>
                    <h2>{film.name}</h2>
                    <p>Language: {film.language}</p>
                    <p>Duration: {film.durationMinute} minute(s)</p>
                    <p>Description: </p>
                    <div>{film.description}</div>
                </div>}
            </div>);
    }

    return (
        <GenericDetail DetailLayout={DetailLayout} DetailForm={FilmForm} handleDelete={handleDelete}
                       url={process.env.REACT_APP_SERVER_URL + "/film/"}/>
    );
};

export default FilmDetail;
