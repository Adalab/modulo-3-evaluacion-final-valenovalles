import { Link } from "react-router-dom"

function NotFound({changeReset}) {

  const handleReset=()=>{
    console.log("click")
    changeReset()
  }

  return (
    <>
    <button onClick={handleReset} >Reset your search</button>
    <h2>NotFound</h2>
    
    </>
  )
}

export default NotFound