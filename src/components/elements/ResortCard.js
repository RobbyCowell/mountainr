import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ResortCard.css";

class ResortCard extends Component {    
    goToDetails() {
        this.props.history.push('/details/' + this.props.data.name);
    }
    
    render() {
        return (
            <div className="resort-card">
                <div className="resort-card__info">
                    <h3>{this.props.data.name}</h3>
                    {/* <p>{this.props.usState}</p> */}
                    <div className="resort-card__stats">
                        <span>{this.props.data.lifts} lifts</span>
                        <span>{this.props.data.trails} trails</span>
                        <span>{this.props.data.acres} acres</span>
                        <span>Terrain park?{this.props.data.hasTerrainPark}</span>
                    </div>
                    <p className="resort-card__action" onClick={this.goToDetails.bind(this)}>Explore</p>
                </div>
                <div className="resort-card__logo-container text-center">
                    <img className="resort-card__logo" src={this.props.data.logoUrl} alt={this.props.data.name} />
                </div>
            </div>
        )
    }
}

export default connect()(ResortCard);