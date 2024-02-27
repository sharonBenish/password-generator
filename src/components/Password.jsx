import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { useContext, useState } from 'react'
import { PasswordContext } from '../App'

function Password(){
    const { state, setState } = useContext(PasswordContext);
    const [copied, setCopied] = useState(false)
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(state.password);
            setCopied(true)
            setTimeout(()=>{
                setCopied(false)
            },2000)
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        }
    };
    return(
        <>
            <div className="card password">
                <p className="text">{ state.password }</p>
                <div>
                    { copied && <span className='notification'>COPIED</span>}
                    <DocumentDuplicateIcon color='rgb(164, 255, 175)' className='copy-icon' height={20} onClick={copyToClipboard} />
                </div>
            </div>
        </>
    )
}

export default Password