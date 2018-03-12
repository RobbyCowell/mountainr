import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResortCard from '../elements/ResortCard';
import './Listing.css';
import back from '../../images/Back.png';
import search from '../../images/Search.png';
import filter from '../../images/Filter.png';

class Listing extends Component {

    goBack(){
        this.props.history.goBack();
    }

    searchResorts() {}

    filterResorts() {}

    render() {
        let resortList = [];

        for (var i = 0; i < this.props.resorts.length; i++) {
            resortList.push(
                <ResortCard
                    key={i}
                    history={this.props.history}
                    data={this.props.resorts[i]}
                />
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="listing__header col text-center">
                        <div>
                            <img onClick={this.goBack.bind(this)} className="back-button" src={back} />
                        </div>
                        <h1 className="listing__title">Resorts</h1>
                        <div>
                            <img onClick={this.searchResorts.bind(this)} className="search-button" src={search} />
                            <img onClick={this.filterResorts.bind(this)} className="filter-button" src={filter} />
                        </div>
                    </div>
                </div>
                <div>
                    {resortList}
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

export default connect(mapStateToProps)(Listing);
