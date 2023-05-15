import { useContext } from "react"
import { AppContext } from "./App"

// eslint-disable-next-line react/prop-types
export default function Get() {
  const {set} = useContext(AppContext)
  return (
    <div>
        <input type='text' placeholder='Enter here' 
        onChange={e => set(e.target.value)}/>
    </div>
  )
}
