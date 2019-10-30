import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <ul>
                <li>
                <Link to = "/">Home</Link>
                </li>
                <li>
                <Link to = "/Blog">Blog</Link>
                </li>
                <li>
                <Link to="/Apropos">Apropos</Link>
                </li>
            </ul>
        </div>
    )
}


export default  Nav;