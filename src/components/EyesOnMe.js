// Code EyesOnMe Component Here
 import React from "react"

 function handleFocus(e) {
    console.log("Good!")
 }

 function handleBlurr(e) {
    console.log("Hey! Eyes on me!")
 }

 function EyesOnME() {
     return (
         <>
          <button onFocus={handleFocus} onBlur={handleBlurr}>Eyes on me</button>
         </>
     )
 }

 export default EyesOnME;