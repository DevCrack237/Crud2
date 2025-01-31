import React, { useState } from 'react'
import { Link } from 'react-router'
function Header(props) {







    const [search, setSearch] = useState('')

    const handleClick = (e) => {

        props.onSubmit(search)
    }


    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">DEArSky</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><b>HOME</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add"><b>ADD</b></Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search By Name" />
                            <button className="btn btn-info" type="button" onClick={() => handleClick()}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header