import {useState} from "react";
import FilmDataService from "../../services/api/FilmDataService";
import {useHistory} from "react-router";

const FilmForm = ({input: inputFilm}) => {
    const id = inputFilm && inputFilm.id ? inputFilm.id : undefined
    const history = useHistory()

    const goBack = () => {
        history.go(-1)
    };

    const [name, setName] = useState(id ? inputFilm.name : '')
    const [description, setDescription] = useState(id ? inputFilm.description : '')
    const [durationMinute, setDurationMinute] = useState(id ? inputFilm.durationMinute : '')
    const [language, setLanguage] = useState(id ? inputFilm.language : '')

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = e => {
        e.preventDefault();
        const {value} = e.target
        setName(value)
    }
    const handleDescriptionChange = e => {
        e.preventDefault();
        const {value} = e.target
        setDescription(value)
    }
    const handleDurationMinuteChange = e => {
        e.preventDefault();
        const {value} = e.target
        setDurationMinute(value)
    }
    const handleLanguageChange = e => {
        e.preventDefault();
        const {value} = e.target
        setLanguage(value)
    }

    const saveFilm = () => {
        const film = {id, name, description, durationMinute, language}
        FilmDataService.save(film)
            .then(response => {
                setSubmitted(true);
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
                        <label htmlFor="description">Description</label>
                        <textarea id={`description_${id ? id : 'new'}`}
                                  key={`description_${id ? id : 'new'}`}
                                  value={description}
                                  onChange={handleDescriptionChange} name="description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="durationMinute">Duration</label>
                        <input id={`durationMinute_${id ? id : 'new'}`}
                               key={`durationMinute_${id ? id : 'new'}`}
                               value={durationMinute}
                               onChange={handleDurationMinuteChange} name="durationMinute"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="language">Language</label>
                        <input id={`language_${id ? id : 'new'}`}
                               key={`language_${id ? id : 'new'}`}
                               value={language}
                               onChange={handleLanguageChange} name="language"/>
                    </div>

                    <button onClick={saveFilm} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default FilmForm;
