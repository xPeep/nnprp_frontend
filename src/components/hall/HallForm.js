import {useState} from "react";
import HallDataService from "../../services/api/HallDataService";
import {useHistory, useParams} from "react-router";

const HallForm = ({input: inputHall}) => {
    const id = inputHall && inputHall.id ? inputHall.id : undefined
    const history = useHistory()
    const {cinemaId} = useParams();

    const goBack = () => {
        history.go(-1)
    };

    const [name, setName] = useState(id ? inputHall.name : '')
    const [capacity, setCapacity] = useState(id ? inputHall.capacity : '')

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = e => {
        e.preventDefault();
        const {value} = e.target
        setName(value)
    }
    const handleCapacityChange = e => {
        e.preventDefault();
        const {value} = e.target
        setCapacity(value)
    }


    const saveFilm = () => {
        const cinId = inputHall && inputHall.cinema && inputHall.cinema.id ? inputHall.cinema.id : cinemaId
        console.log("consoleid", cinId);
        const hall = {id, name, capacity, cinema: {id: cinId}}
        HallDataService.save(hall)
            .then(response => {
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={goBack}>
                        Go Back
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Capacity</label>
                        <textarea
                            value={capacity}
                            onChange={handleCapacityChange} name="capacity"/>
                    </div>
                    <button onClick={saveFilm} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default HallForm;
