import { Button } from "@mui/material"
import { HomeView } from "../App"
import { numberButton } from "../utils/constants"


const Buttons = () => {
    const buttonList = ()=>{
      const a = numberButton.map((s)=>console.log(s))
        console.log("🚀 ~ file: buttons.jsx:7 ~ buttonList ~ a:", a)
        return (
            numberButton.map((item)=> {<button>{item}</button>})

       )
    }
  return (
    <>{ numberButton.map((item)=> {<Button style={HomeView.button}>{item}</Button>})}</>)}
export default Buttons