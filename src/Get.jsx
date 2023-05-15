// eslint-disable-next-line react/prop-types
export default function Get({seting}) {
  return (
    <div>
        <input type='text' placeholder='Enter here' 
        onChange={e => seting(e.target.value)}/>
    </div>
  )
}
