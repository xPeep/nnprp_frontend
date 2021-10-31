import {Link} from "react-router-dom";

const HallListItem = ({item: hall, listKey}) => {
    return (
        <div className="blog-preview" key={listKey}>
            <Link to={`/hall/${hall.id}`}>
                <h2>{hall.name}</h2>
                <p>Capacity: {hall.capacity}</p>
            </Link>
        </div>
    );
};

export default HallListItem;