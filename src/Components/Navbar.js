import React from 'react'
import {
    Link
} from "react-router-dom";
import image from './Logo.png'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  navbar-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img className='image' src={image} alt='Little GITTI' ></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
