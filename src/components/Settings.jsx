import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Checkbox from "./Checkbox"
import Slider from "./Slider"
import Strength from "./Strength"
import { useContext, useState } from "react";
import { PasswordContext } from "../App";
import { generatePassword, showNotification } from "../utils/generatePassword";
import { passwordStrength } from 'check-password-strength'


function Settings(){
    const {state, setState } = useContext(PasswordContext);
    const [isLoading, setIsLoading] = useState(false);
    const [strength, setStrength] = useState(0);

    function updateLength(e){
        const target = e.target;
        setState({
            ...state,
            len: target.value
        })
        const percentage = (target.value - target.min) / (target.max- target.min) * 100;
        target.style.setProperty('--sx', `${percentage}%`);
    }

    async function getPassword(){
        if (!state.includeLower && !state.includeUpper){
            showNotification('It must contain at least upper or lower case later')
            return
        }
        setIsLoading(true)
        try{
            let res = await generatePassword(state.len, state.includeNumber, state.includeSymbol);
            if (state.includeUpper && !state.includeLower){
                res = res.toUpperCase()
            }
            else if (state.includeLower && !state.includeUpper){
                res = res.toLowerCase()
            }
            
            setState({
                ...state,
                password: res
            })
            getStrength()
        }
        catch (e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    function getStrength(){
        setStrength(passwordStrength(state.password).id)
    }

    return(
        <>
            <div className="card settings">
                <div className="flex-between">
                    <p className="heading">Character Length</p>
                    <p className="char_Length">{state.len}</p>
                </div>
                <Slider  len={state.len} updateLength={updateLength} />
                <div className="options">
                    <div className="option">
                        <Checkbox isChecked={state.includeUpper} id={'includeUpper'}/>
                        <p>Include Uppercase letters</p>
                    </div>
                    <div className="option">
                        <Checkbox isChecked={state.includeLower} id={'includeLower'}/>
                        <p>Include Lowercase letters</p>
                    </div>
                    <div className="option">
                        <Checkbox isChecked={state.includeNumber} id={'includeNumber'} />
                        <p>Include Numbers</p>
                    </div>
                    <div className="option">
                        <Checkbox isChecked={state.includeSymbol} id={'includeSymbol'} />
                        <p>Include Symbols</p>
                    </div>
                </div>
                <Strength strength={strength} />

                <button className="btn" onClick={getPassword}>
                    {isLoading? (<span>GENERATING...</span>): 
                    (<>
                        <span>GENERATE</span>
                        <ArrowRightIcon className="arrow" width={15} />
                    </>) }
                    
                </button>
            </div>
        </>
    )
}

export default Settings