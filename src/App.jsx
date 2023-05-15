import { createContext, useState } from 'react'
import './App.css'
import Display from './display'
import Get from './Get'

export const AppContext = createContext(null)

function App() {

  const [name, set] = useState("")

  return (
    <div>
      <AppContext.Provider value={{name,set}}>
        <Get />
        <Display/>
      </AppContext.Provider>

    </div>
  )
}

export default App
