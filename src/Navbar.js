import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid d-flex ms-5">
                    <img src='Logo.png' style={{ "height": "90px", "width": "80px" }}></img>
                    <div className="collapse navbar-collapse justify-content-between" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
                            <li className="nav-item " style={{ "margin-left": "500px" }}>
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </li><li className="nav-item " >
                                <a className="nav-link active ms-3" aria-current="page" >About Us</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active ms-3" aria-current="page" >About Us</a>
                            </li>
                            <li className="nav-item " >
                                <a className="nav-link active ms-3" aria-current="page" >Contact Us</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-light px-5 py-3 me-4 mt-4 fw-bold rounded-2" type="submit">Call to Action</button>
                        </form>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
