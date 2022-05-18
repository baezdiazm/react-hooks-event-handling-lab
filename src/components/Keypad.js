// Code Keypad Component Here
import React from "react"

function handlePW(e) {
    console.log("Entering password...")
}

function Keypad() {
    return(
        <>
            <input type="password" onChange={handlePW}/>

        </>
    )
}

export default Keypad;