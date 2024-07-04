import './css/ControllingCard.css'
import SwitchButton from './SwitchButton';
import { useState } from 'react';
import axios from 'axios';
export default function ControllingCard({controlledDevs}) {
    const [state, setState] = useState({});

    function handleButton(dev){
        // Toggle the state of the checkbox
        const newState = {...state, [dev]: !state[dev]};
        setState(newState);

        // Log the state of the checkbox
        console.log(dev + " : " + (newState[dev] ? "ON" : "OFF"));
    }

    return(
        <div className="control-container">
            <h2>Controlled Devices</h2>
            {Array.isArray(controlledDevs) && controlledDevs.map((dev, index) => (<div key={index} className='title-checkbox'><p>{dev}</p><SwitchButton type="checkbox" onClick={() => handleButton(dev)} /></div>))}
        </div>
    );
}



//Try to get on/off and post it


// import './css/ControllingCard.css';
// import SwitchButton from './SwitchButton';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function ControllingCard({ controlledDevs }) {
//     const [state, setState] = useState({});

//     useEffect(() => {
//         // Initialize the state with the current status of the devices
//         const fetchInitialStates = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/controls/');
//                 const initialState = {};
//                 response.data.forEach(device => {
//                     initialState[device.name] = device.state;
//                 });
//                 setState(initialState);
//             } catch (error) {
//                 console.error('Error fetching initial device states:', error);
//             }
//         };

//         fetchInitialStates();
//     }, []);

//     const handleButton = async (dev) => {
//         // Toggle the state of the checkbox
//         const newState = { ...state, [dev]: !state[dev] };
//         setState(newState);

//         // Log the state of the checkbox
//         console.log(dev + " : " + (newState[dev] ? "ON" : "OFF"));
//         /*
//         body{
        
//             sytemmod:On
//             watermod:on
//         }        
        
//         axios.post("rl",body)
//         */ 
//         // Send the new state to the server
//         try {
//             await axios.post('http://localhost:5000/api/controls/', {
//                 dev: "ON", 
//             });
//             console.log(`Successfully updated state for ${dev}`);
//         } catch (error) {
//             console.error('Error updating device state:', error);
//         }
//     };

//     return (
//         <div className="control-container">
//             <h2>Controlled Devices</h2>
//             {Array.isArray(controlledDevs) && controlledDevs.map((dev, index) => (
//                 <div key={index} className='title-checkbox'>
//                     <p>{dev}</p>
//                     <SwitchButton
//                         type="checkbox"
//                         onClick={() => handleButton(dev)}
//                         checked={state[dev]}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }
