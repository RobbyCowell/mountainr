import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {

        let resortData = this.props.resorts.find(resort => resort.name === this.props.match.params.id);
        console.log(resortData);

        return (
            <div>
                <div className="container">
                    <img src={resortData.logoUrl} />
                    <h1>{this.props.match.params.id}</h1>
                    <div>
                        <span>{resortData.lifts} lifts</span>
                        <span>{resortData.trails} trails</span>
                        <span>{resortData.acres} acres</span>
                        <span>Terrain park?{resortData.hasTerrainPark}</span>
                    </div>
                </div>
                <div className="container-fluid">
                    <map></map>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="detail__action col">
                            <a href="#">Directions</a>
                        </div>
                        <div className="detail__action col">
                            <a href={resortData.trailMapUrl} target="_blank" rel="noopener">Trail map</a>
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
