import React  from "react"
import airbnblogo from "../images/logo.png"

function Navbar () {
    return (
        <nav>
            <img src={airbnblogo} alt="logo" className="logo" />
        </nav>
    )
}

export default Navbar;