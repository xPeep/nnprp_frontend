// import {useState} from "react";
// import {useHistory} from "react-router";
//
// const GenericForm = ({initialItemState, FormLayout, saveItem}) => {
//     const [item, setItem] = useState(initialItemState);
//     const [submitted, setSubmitted] = useState(false);
//
//     const history = useHistory()
//
//
//     const goBack = () => {
//         history.go(-2)
//     };
//
//     return (
//         <div className="submit-form">
//             {submitted ? (
//                 <div>
//                     <h4>You submitted successfully!</h4>
//                     <button className="btn btn-success" onClick={goBack}>
//                         Go Back
//                     </button>
//                 </div>
//             ) : (
//                 <div>
//                     <FormLayout handleInputChange={handleInputChange} item={initialItemState}/>
//                     <button onClick={saveItem} className="btn btn-success">
//                         Submit
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default GenericForm;
