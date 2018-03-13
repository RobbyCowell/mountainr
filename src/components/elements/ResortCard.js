import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ResortCard.css";

class ResortCard extends Component {
    constructor(props) {
        super(props);
        this.goToDetails = this.goToDetails.bind(this);
    }

    goToDetails() {
        this.props.history.push('/details/' + this.props.data.name);
    }
    
    render() {
        let terrainPark = "";
        if (this.props.data.hasTerrainPark === 'true') {
            terrainPark = <span>Terrain Park</span>
        }

        return (
            <div className="resort-card">
                <div className="resort-card__info">
                    <h3 className="resort-card__title">{this.props.data.name}</h3>
                    <div className="resort-card__stats">
                        <span>{this.props.data.lifts} lifts</span>
                        <span>{this.props.data.trails} trails</span>
                        <span>{this.props.data.acres} acres</span>
                        {terrainPark}
                    </div>
                    <p className="resort-card__action" onClick={this.goToDetails}>Explore</p>
                </div>
                <div className="resort-card__logo-container text-center">
                    <img className="resort-card__logo" src={this.props.data.logoUrl} alt={this.props.data.name} />
                </div>
            </div>
        )
    }
}

export default connect()(ResortCard);