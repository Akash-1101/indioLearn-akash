import { useState } from "react"
import "./index.css"


const Header=()=>{
    const[dropDown,setDropDown]=useState(false)
    const onClickDropDown=()=>{
        setDropDown(prevState => !prevState);
    }

    return(
        <>
    <div className="nav-bar-container">
        <div>
        <p className="company-name-para">IndigoLearn</p>
        </div>
        <div className="nav-items-container"> 
            <p>Buy Courses</p>
            <p> Programs</p>
            <p>Free Courses </p>
        </div>
        <div className="login-btn-container1">
            <p>Login/ Signup</p>
        </div>
        <div onClick={onClickDropDown}>
            <img className="img4" src="https://tse3.mm.bing.net/th?id=OIP.skDsJ0g8Yn58PB6TeZKncAHaHa&pid=Api&P=0&h=180" />
        </div>
    </div>
    <div>
        {dropDown?(<div className="moblie-view">
            <p>Buy Courses</p>
            <p> Programs</p>
            <p>Free Courses </p>
            <div className="login-btn-container2">
                <p>Login/ Signup</p>
            </div>
        </div>):""}
    </div>
    </>
)
}
export default Header