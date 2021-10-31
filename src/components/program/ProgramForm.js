import {forwardRef, useEffect, useState} from "react";
import ProgramDataService from "../../services/api/ProgramDataService";
import {useHistory} from "react-router";
import DatePicker from "react-datepicker";
import FilmDataService from "../../services/api/FilmDataService";
import HallDataService from "../../services/api/HallDataService";
import moment from "moment";

const ProgramForm = ({input: inputProgram}) => {
    const id = inputProgram && inputProgram.id ? inputProgram.id : undefined
    const history = useHistory()

    const goBack = () => {
        history.go(-1)
    };

    const [time, setTime] = useState(id ? inputProgram.time : new Date())
    const [hall, setHall] = useState(id ? inputProgram.hall.id : '')
    const [film, setFilm] = useState(id ? inputProgram.film.id : '')

    const [films, setFilms] = useState([])
    const [halls, setHalls] = useState([])

    const [submitted, setSubmitted] = useState(false);

    const saveProgram = () => {
        const timestamp = moment(time).format("yyyy-MM-DDTHH:mm");
        const program = {id, timestamp: timestamp, hall: {id: hall}, film: {id: film}};
        ProgramDataService.save(program)
            .then(response => {
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        FilmDataService.getAll({size: 99}).then((response) => {
            const {content: newData} = response.data;
            setFilms(newData);
            setFilm(newData[0].id);
        }).catch((e) => {
            console.log(e);
        });

        HallDataService.getAll({size: 99}).then((response) => {
            const {content: newData} = response.data;
            setHalls(newData);
            setHall(newData[0].id);

        }).catch((e) => {
            console.log(e);
        });
    }, []);


    const ExampleCustomInput = forwardRef(({value, onClick}, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

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
                    {"Select date: "}
                    <DatePicker
                        selected={time}
                        dateFormat="dd/MM/yyyy HH:mm"
                        showTimeInput
                        customInput={<ExampleCustomInput/>}
                        onChange={date => {
                            setTime(date);
                        }}
                    />

                    {films && <label>
                        {"Film: "}
                        <select onChange={(e) => setFilm(e.target.value)}>
                            {films.map(film => (
                            <option key={film.id} value={film.id}>
                                {film.name}
                            </option>
                            ))}
                        </select>
                    </label>}
                    <label>
                        {"Cinema - Hall: "}
                        <select onChange={(e) => {
                            setHall(e.target.value)
                        }}>
                            {halls && halls.map(hall => (
                                <option key={hall.id} value={hall.id}>
                                    {hall.cinema.name + " - " + hall.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button onClick={saveProgram} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProgramForm;
