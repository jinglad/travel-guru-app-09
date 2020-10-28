import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import fakecity from '../../fakecity';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import Places from '../Places/Places';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const { name, description } = fakecity;
    return (
        <div className="bg-home">
            <div className="container">
                <Header></Header>
                <div className="row mt-160">
                    <div className="col-md-4 text-white little-description">
                        <h1>COX'S BAZAR</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit, rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem dolor autem, reiciendis veritatis distinctio inventore nihil sit tempore soluta sunt,...</p>
                        <button className="booking-btn">Booking  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                fakecity.map(place => <Places city={place}></Places>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;