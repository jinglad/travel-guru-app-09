import React from 'react';
import './PlaceDetails.css';

const PlaceDetails = (props) => {
    // console.log(props.placeDetails.name);
    const { name, description } = props.placeDetails;
    return (
        <div className="place-details">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default PlaceDetails;