import {useState} from "react";
import CinemaDataService from "../../services/api/CinemaDataService";
import {useHistory} from "react-router";

const CinemaForm = ({input: inputCinema}) => {
    const id = inputCinema && inputCinema.id ? inputCinema.id : undefined
    const history = useHistory()

    const goBack = () => {
        history.go(-1)
    };

    const [name, setName] = useState(id ? inputCinema.name : '')
    const [address, setAddress] = useState(id ? inputCinema.address : '')
    const [telephone, setTelephone] = useState(id ? inputCinema.telephone : '')
    const [email, setEmail] = useState(id ? inputCinema.email : '')

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = e => {
        e.preventDefault();
        const {value} = e.target
        setName(value)
    }
    const handleAddressChange = e => {
        e.preventDefault();
        const {value} = e.target
        setAddress(value)
    }
    const handleTelephoneChange = e => {
        e.preventDefault();
        const {value} = e.target
        setTelephone(value)
    }
    const handleEmailChange = e => {
        e.preventDefault();
        const {value} = e.target
        setEmail(value)
    }

    const saveCinema = () => {
        const cinema = {id, name, address, telephone, email}
        CinemaDataService.save(cinema)
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
                        <label htmlFor="name">Names</label>
                        <input value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input id={`address_${id ? id : 'new'}`}
                               key={`address_${id ? id : 'new'}`}
                               value={address}
                               onChange={handleAddressChange} name="address"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input id={`telephone_${id ? id : 'new'}`}
                               key={`telephone_${id ? id : 'new'}`}
                               value={telephone}
                               onChange={handleTelephoneChange} name="telephone"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id={`email_${id ? id : 'new'}`}
                               key={`email_${id ? id : 'new'}`}
                               value={email}
                               onChange={handleEmailChange} name="language"/>
                    </div>

                    <button onClick={saveCinema} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default CinemaForm;
