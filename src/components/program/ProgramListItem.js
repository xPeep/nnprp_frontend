import {Link} from "react-router-dom";

const ProgramListItem = ({item, listKey}) => {
    return (
        <div className="blog-preview" key={listKey}>
            <Link to={`/program/${item.id}`}>
                <h2>Name: {item.film.name}</h2>
                <p>Cinema: {item.hall.cinema.name}</p>
            </Link>
        </div>
    );
};
export default ProgramListItem;