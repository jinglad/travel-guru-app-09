import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row pt-5">
            <div className="col-md-2 logo">
                <Link to="/"><img src={logo} className="img-fluid" alt="" /></Link>
            </div>
            <div className="col-md-4 mt-3">
                <input type="text" placeholder="search your destination..." className="form-control" />
            </div>
            <div className="col-md-5 menu">
                <Link className="text-decoration-none text-white item" to="/news">News</Link>
                <Link className="text-decoration-none text-white item" to="/destination">Destination</Link>
                <Link className="text-decoration-none text-white item" to="/blog">Blog</Link>
                <Link className="text-decoration-none text-white item" to="/contact">Contact</Link>
                {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} className="login-btn text-decoration-none text-dark">Log Out</button> : <Link to="/login" className="login-btn text-decoration-none text-dark">Login</Link>}
            </div>
        </div >
    );
};

export default Header;