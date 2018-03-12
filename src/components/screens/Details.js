import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';
import back from '../../images/Back.png';
import directionsImage from '../../images/Directions.png';
import trailImage from '../../images/Trail Map.png';

class Details extends Component {
    goBack(){
        this.props.history.goBack();
    }

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
                    <div className="row">
                        <div className="listing__header col text-center">
                            <img onClick={this.goBack.bind(this)} className="back-button" src={back} alt="back"/>
                            <img className="details__logo" src={resortData.logoUrl} alt="resort logo"/>
                            <p className="details__edit-button">Edit</p>
                        </div>
                    </div>
                    <h1 className="details__name">{this.props.match.params.id}</h1>
                    <div className="details__stats">
                        <span><b>{resortData.lifts}</b> lifts</span>
                        <span><b>{resortData.trails}</b> trails</span>
                        <span><b>{resortData.acres}</b> acres</span>
                        {terrainPark}
                    </div>
                </div>
                <div className="details__map-container container-fluid">
                <iframe className="details__map" frameBorder="0" src={mapSrc} allowFullScreen title="resort location"></iframe>
                </div>
                <div className="container">
                    <div className="details__action__row row justify-content-sm-center">
                        <div className="text-center col-4">
                            <a className="details__action" href={directionsSrc} target="_blank" rel="noopener">
                                <img className="details__action__image" src={directionsImage} alt="directions"/>
                                Directions
                            </a>
                        </div>
                        <div className="text-center col-4">
                            <a className="details__action" href={resortData.trailMapUrl} target="_blank" rel="noopener">
                                <img className="details__action__image" src={trailImage} alt="trail map" />
                                Trail map
                            </a>
                        </div>
                    </div>
                    <div className="details__contact__row row">
                        <div className="col">
                            <h3 className="details__contact__title">Contact</h3>
                            <p className="details__contact__info">{resortData.address}</p>
                            <p className="details__contact__info">{resortData.phone}</p>
                            <p className="details__contact__info">{resortData.hours}</p>
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
