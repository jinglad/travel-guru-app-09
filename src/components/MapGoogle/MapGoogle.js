import React from 'react';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const MapGoogle = () => {
    const libraries = ["places"];
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCDEBfmVaDHWGMfRiTnMXCz5P1Zim8oQ-0",
        libraries,
    })

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";
    // let api = "AIzaSyCDEBfmVaDHWGMfRiTnMXCz5P1Zim8oQ-0";
    const mapContainerStyle = {
        width: "100%",
        height: "700px",
    }
    const center = {
        lat: 23.810331,
        lng: 90.412521,
    }
    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
            ></GoogleMap>
        </div>
    );
};

export default MapGoogle;