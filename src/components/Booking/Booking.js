import React from 'react';
import { useParams } from 'react-router-dom';
import fakecity from '../../fakecity';
import BookingForm from '../BookingForm/BookingForm';
import Header from '../Header/Header';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './Booking.css';

const Booking = () => {
    const { cityId } = useParams();
    const placeDetails = fakecity.find(city => city.id === cityId);
    // console.log(placeDetails);
    return (
        <>
            <div className="bg-booking">
                <div className="container">
                    <Header></Header>
                    <div className="row mt-160">
                        <div className="col-md-6 text-white">
                            <PlaceDetails placeDetails={placeDetails}></PlaceDetails>
                        </div>
                        <div className="col-md-6">
                            <BookingForm></BookingForm>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;