import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';

class Details extends Component {
    render() {
        let resortData = this.props.resorts.find(resort => resort.name === this.props.match.params.id);

        let terrainPark = "";
        if (resortData.hasTerrainPark === 'true') {
            terrainPark = <span>Terrain Park</span>
        }

        let encodedAddress =  encodeURIComponent(resortData.address.trim());
        let mapSrc = "https://www.google.com/maps/embed/v1/place?q="
            + encodedAddress +
            "&key=AIzaSyAi6C3hi1lszSKxvUvxIR3GjSsHC1CpZfo" +
            "&zoom=10";
        let directionsSrc = "https://www.google.com/maps/dir/?api=1&destination=" + encodedAddress;

        return (
            <div>
                <div className="text-center container">
                    <img className="details__logo" src={resortData.logoUrl} />
                    <h1 className="details__name">{this.props.match.params.id}</h1>
                    <div className="details__stats">
                        <span><b>{resortData.lifts}</b> lifts</span>
                        <span><b>{resortData.trails}</b> trails</span>
                        <span><b>{resortData.acres}</b> acres</span>
                        {terrainPark}
                    </div>
                </div>
                <div className="details__map-container container-fluid">
                <iframe className="details__map" frameBorder="0" src={mapSrc} allowFullScreen></iframe>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="text-center col">
                            <a className="details__action" href={directionsSrc} target="_blank" rel="noopener">Directions</a>
                        </div>
                        <div className="text-center col">
                            <a className="details__action" href={resortData.trailMapUrl} target="_blank" rel="noopener">Trail map</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Contact</h3>
                            <p>{resortData.address}</p>
                            <p>{resortData.phone}</p>
                            <p>{resortData.hours}</p>
                            <a href={resortData.url} target="_blank" rel="noopener">Visit site</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => { 
    return {
        resorts: store.resorts
    }
}

export default connect(mapStateToProps)(Details);
