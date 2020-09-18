import React from 'react';
import { Link } from 'react-router-dom';
import './Places.css';
const Places = (props) => {
    // console.log(props);
    const { name, img, id } = props.city;
    return (
        <>
            <div className="col-md-4">
                <Link to={"/booking/" + id}>
                    <div className="img-container">
                        <div className="img-box">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                        <div className="img-details"><h3>{name}</h3></div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Places;