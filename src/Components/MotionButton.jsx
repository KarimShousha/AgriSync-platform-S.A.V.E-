import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { otherData } from './sensorsData';

export default function MotionButton({ isActive, name, reading, onDismiss, onClick }) {
    const isMotionDetected = reading.includes('Detected') || reading.includes('detected');

    let [isAlertDismissed, setIsAlertDismissed] = useState(true); 
    useEffect(() => {
        setIsAlertDismissed(false);
    }, [reading]);

    function handleDismissAlert() {
        setIsAlertDismissed(true); 
        onDismiss();
    }

    return (
        <>
            <button
                style={{ backgroundColor: isMotionDetected ? 'red' : '' }}
                className={isActive ? "nav-button-active" : "nav-button"}
                onClick={() => {
                    onClick(); 
                }}
            >
                {name}
            </button>

            {isMotionDetected && !isAlertDismissed && (
                <Popup
    trigger={<div></div>}
    open={true}
    modal
    closeOnDocumentClick={false} 
    closeOnEscape
    contentStyle={{
        width: "400px", 
        height: "auto", 
        padding: "20px", 
        color: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px", 
        fontWeight: "bold", 
        textAlign: "center" 
    }}
>
    <div>
        <span>{otherData[2].reading}</span>
    </div>
    <button 
        style={{
            height: "40px",
            width: "150px",
            marginTop: "20px",
            backgroundColor: "transparent",
            border: "1px solid red",
            color: "red",
            cursor: "pointer",
            transition: "background-color 0.3s",
        }} 
        onClick={handleDismissAlert}
        onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255, 0, 0, 0.2)"} 
        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
    >
        Dismiss Alert
    </button>
</Popup>




            )}
        </>
    );
}
