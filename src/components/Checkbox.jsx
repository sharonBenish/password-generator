import { CheckIcon } from "@heroicons/react/24/outline"
import { useContext, useState } from "react"
import { PasswordContext } from "../App"

function Checkbox({isChecked, id}){
    const {state, setState} = useContext(PasswordContext);


    function updateCheck(e){
        console.log(e.target.checked);
        console.log(e.target.id)
        const property = e.target.id;
        setState({
            ...state,
            [property]:e.target.checked
        })
        console.log(state)
    }

    return(
        <>
            <label className="custom-checkbox">
                <input type="checkbox" id={id}  checked={isChecked} onChange={updateCheck}/>
                <span className="checkmark">
                    {isChecked && <CheckIcon width={20} color="#18171f"/>}
                </span>
            </label>
        </>
    )
}

export default Checkbox