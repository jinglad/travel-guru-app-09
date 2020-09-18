import React, { useContext } from 'react';
import img1 from '../../Image/Rectangle26.png';
import img2 from '../../Image/Rectangle27.png';
import img3 from '../../Image/Rectangle28.png';
import './BookingDetails.css';
import logo from '../../Logo1.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import MapGoogle from '../MapGoogle/MapGoogle';

const BookingDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const { email } = loggedInUser;
    // console.log(loggedInUser);
    // console.log(email);
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-2 logo">
                    <Link to="/"><img src={logo} className="img-fluid" alt="" /></Link>
                </div>
                <div className="col-md-5 menu ml-auto">
                    <Link className="text-decoration-none text-dark item" to="/news">News</Link>
                    <Link className="text-decoration-none text-dark item" to="/destination">Destination</Link>
                    <Link className="text-decoration-none text-dark item" to="/blog">Blog</Link>
                    <Link className="text-decoration-none text-dark item" to="/contact">Contact</Link>
                    <button onClick={() => setLoggedInUser({})} className="login-btn text-decoration-none text-dark">Log Out</button>
                </div>
            </div>
            <div className="row pt-5">
                <div className="hotel-list col-md-7">
                    <div className="row">
                        <div className="col-md-12 d-flex mb-4">
                            <div>
                                <img className="w-90" src={img1} alt="" />
                            </div>
                            <div>
                                <h5>{"Light bright airy stylish apt & safe peaceful stay"}</h5>
                                <p><small>{"4 guests 2 bedrooms  2 beds  2 baths"}</small></p>
                                <p><small>Wifi Air condition Kitchen</small></p>
                                <p><small>Cancellation flexibility available</small></p>
                                <p><small>4.9(20) <span>$34/</span>night</small></p>
                            </div>
                        </div>
                        <div className="col-md-12 d-flex mb-4">
                            <div>
                                <img className="w-90" src={img2} alt="" />
                            </div>
                            <div>
                                <h5>{"Light bright airy stylish apt & safe peaceful stay"}</h5>
                                <p><small>{"4 guests 2 bedrooms  2 beds  2 baths"}</small></p>
                                <p><small>Wifi Air condition Kitchen</small></p>
                                <p><small>Cancellation flexibility available</small></p>
                                <p><small>4.9(20) <span>$34/</span>night</small></p>
                            </div>
                        </div>
                        <div className="col-md-12 d-flex mb-4">
                            <div>
                                <img className="w-90" src={img3} alt="" />
                            </div>
                            <div>
                                <h5>{"Light bright airy stylish apt & safe peaceful stay"}</h5>
                                <p><small>{"4 guests 2 bedrooms  2 beds  2 baths"}</small></p>
                                <p><small>Wifi Air condition Kitchen</small></p>
                                <p><small>Cancellation flexibility available</small></p>
                                <p><small>4.9(20) <span>$34/</span>night</small></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hotel-map col-md-5">
                    <MapGoogle></MapGoogle>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;