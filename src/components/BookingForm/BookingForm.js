import React from 'react';
import { Link } from 'react-router-dom';

const BookingForm = () => {
    return (
        <div>
            <form className="bg-light rounded">
                <div className="form-group">
                    <label htmlFor="origin">Origin</label>
                    <br />
                    <input className="form-control" type="text" name="origin" />
                </div>
                <div className="form-group">
                    <label htmlFor="destination">Destination</label>
                    <br />
                    <input className="form-control" type="text" name="destination" />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="form-date">Form</label>
                        <br />
                        <input className="form-control" type="date" name="form-date" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="to-date">To</label>
                        <br />
                        <input className="form-control" type="date" name="to-date" />
                    </div>
                </div>
                <div className="form-group">
                    <Link className="text-decoration-none" to="/booking-details"><input type="button" value="Start Booking" className="btn btn-block btn-warning" /></Link>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;