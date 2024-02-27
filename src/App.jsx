import { createContext, useState } from 'react'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Password from './components/Password'
import Settings from './components/Settings'
import { DEFAULT_PASSWORD, MIN_PASSWORD_LENGTH } from './utils/helpers'

const defaultSettings = {
  password: DEFAULT_PASSWORD,
  len:MIN_PASSWORD_LENGTH,
  includeLower: true,
  includeNumber: false,
  includeSymbol: true,
  includeUpper: false,
}

export const PasswordContext = createContext(defaultSettings)
function App() {
  const [state, setState] = useState({...defaultSettings});
  

  

  return (
    <>
      <PasswordContext.Provider value={{state, setState}}>
        <ReactNotifications />
        <div className='main'>
          <h1>Password Generator</h1>
          <Password/>
          <Settings />
        </div>
      </PasswordContext.Provider>
    </>
  )
}

export default App
