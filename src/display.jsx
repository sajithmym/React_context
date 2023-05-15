import { useContext } from "react"
import { AppContext } from "./App"

// eslint-disable-next-line react/prop-types
export default function Display() {
  const {name} = useContext(AppContext)
  return (
    <div>
        <h1>Name is {name}</h1>
        <img src="/s.jpg"/>
    </div>
  )
}
