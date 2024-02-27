import { useState } from "react"
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../utils/helpers"

function Slider({len, updateLength}){
    // const [len, setLen] = useState(0);
    // function updateLength(e){
    //     const target = e.target;
    //     setLen(target.value)
    //     const percentage = (target.value - target.min) / (target.max- target.min) * 100;
    //     target.style.setProperty('--sx', `${percentage}%`);
    //     console.log(target.style.getPropertyValue('--sx'));
    // }

    return(
        <>
         <input type="range" min={MIN_PASSWORD_LENGTH} max={MAX_PASSWORD_LENGTH} value={len} onChange={updateLength} className="styled-slider slider-progress"></input>
        </>
    )
}

export default Slider