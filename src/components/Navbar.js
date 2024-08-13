import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VscColorMode } from "react-icons/vsc";
import { BsPersonCircle } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RiNotification2Line } from "react-icons/ri";
import { RiNotification2Fill } from "react-icons/ri";

const Navbar = () => {
    const [isNotification, setIsNotification] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);

    const handleNotificationClick = () => {
        setIsNotification(!isNotification);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin-profile"> <BsPersonCircle /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sci-fi">Sci-fi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/horror">Horror</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/thriller">Thriller</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/travel">Travel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articles">Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/life-experience">Life-experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/love-story">Love Story</Link>
                            </li>

                        </ul>

                        {!localStorage.getItem('token') ? (
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                                <div className='btn btn-outline-light mx-1 position-relative' id='allNoti' onClick={handleNotificationClick}>
                                    {isNotification ? <RiNotification2Fill style={{ fontSize: '18px' }} /> : <RiNotification2Line style={{ fontSize: '18px' }} />}
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {notificationCount}
                                    </span>
                                </div>
                            </form>
                        ) : (
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                                <Link className="btn btn-outline-light mx-1" to="/login" role="button">Login/Signup</Link>
                            </form>
                        )}



                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
