import React, { Fragment, useState, useEffect } from 'react'; // Ensure you import useState and useEffect
import ControllingCard from "../Components/ControllingCard";
import '../Components/css/ControllingPage.css';
import '../Components/css/BackgroundImg.css';
import Background from "../Components/BackgroundImg";
import SwitchButton from '../Components/SwitchButton';
import '../Components/css/ControllingCard.css';
import axios from "axios";

export default function Controlling() {
    let controlledDevs = ['WB', 'Motion'];

    const [state, setState] = useState({
        SystemMod: "OFF",
        waterControl: "OFF"
    });

    // Post the initial state when the component mounts
    useEffect(() => {
        const postInitialState = async () => {
            try {
                const response = await axios.post('https://project-save.vercel.app/api/controls/', state);
                console.log('Initial state posted:', response.data);
            } catch (error) {
                console.error('Error posting initial state:', error);
            }
        };

        postInitialState();
    }, []); // Empty dependency array means this effect runs once on mount

    // Correctly handle button clicks
    const handleButton = (dev) => async () => {
        const newState = { ...state, [dev]: state[dev] === "ON" ? "OFF" : "ON" };

        try {
            const response = await axios.post('https://project-save.vercel.app/api/controls/', newState);
            console.log('Response body:', response.data);
            console.log(`Successfully updated state for ${dev}`);
        } catch (error) {
            console.error('Error updating device state:', error);
        }

        setState(newState);
        console.log(dev + " : " + newState[dev]);
    };

    return (
        <Fragment>
            <div className="Controlling-container">
                <div className='title-checkbox'>
                    <p>Water Pump</p>
                    <SwitchButton type="checkbox" onClick={handleButton("waterControl")} />
                </div>

                <div className='title-checkbox'>
                    <p>System mode</p>
                    <SwitchButton type="checkbox" onClick={handleButton("SystemMod")} />
                </div>
            </div>
        </Fragment>
    );
}






























// import { Fragment } from "react";
// import ControllingCard from "../Components/ControllingCard";
// import '../Components/css/ControllingPage.css'
// import '../Components/css/BackgroundImg.css'
// import Background from "../Components/BackgroundImg";
// import SwitchButton from '../Components/SwitchButton';
// import '../Components/css/ControllingCard.css'


// export default function Controlling(){
//     let controlledDevs = ['WB','Motion']

//     const [state, setState] = useState({});

//     function handleButton(dev){
//         const newState = {...state, [dev]: !state[dev]};
//         setState(newState);
//         console.log(dev + " : " + (newState[dev] ? "ON" : "OFF"));
        
//     return(
//         <Fragment >
//         {/* <div className="Controlling-container">
//         <ControllingCard controlledDevs={controlledDevs}  />
//         </div> */}
//        <div className="Controlling-container">

//           <div className='title-checkbox'>
//             <p>Water Pumb</p>
//             <SwitchButton type="checkbox" onClick={handleButton("Water Pumb")}/>
//             </div>

//             <div className='title-checkbox'>
//             <p>System mode</p>
//             <SwitchButton type="checkbox" />

//             </div>
//             </div>
//         </Fragment>
//     );
// }}