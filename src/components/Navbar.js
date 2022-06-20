import React from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()//to send it to another route

    return (

        <div className="App1">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">E-com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/product">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/showproduct">Showproduct</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active" href="/register">Signup</a>
                            </li> */}


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className='button' onClick={() => navigate("/product") } >Logout</div>
      
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar