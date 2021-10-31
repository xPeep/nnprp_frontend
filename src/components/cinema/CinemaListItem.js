import {Link} from "react-router-dom";

const CinemaListItem = ({item: cinema, listKey}) => {
    return (
        <div className="blog-preview" key={listKey}>
            <Link to={`/cinema/${cinema.id}`}>
                <h2>{cinema.name}</h2>
                <p>Address: {cinema.address}</p>
            </Link>
        </div>
    );
};

export default CinemaListItem;