import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResortCard from '../elements/ResortCard';
import './Listing.css';
import back from '../../images/Back.png';
import search from '../../images/Search.png';
import filter from '../../images/Filter.png';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = { resorts: this.props.resorts, searchHidden: true }
    }

    goBack () {
        this.props.history.goBack();
    }

    searchResorts (event) {
        let searchTerm = event.target.value;

        this.setState(() => ({
            resorts: this.props.resorts.filter(resort => {
                return resort.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
        }));
    }

    render() {
        let resortList = [];

        for (var i = 0; i < this.state.resorts.length; i++) {
            resortList.push(
                <ResortCard
                    key={i}
                    history={this.props.history}
                    data={this.state.resorts[i]}
                />
            );
        }

        return (
            <div className="container">
                <div className="row listing__header">
                    <div className="col">
                        <img onClick={this.goBack.bind(this)}
                            className="back-button"
                            src={ back }
                            alt="back" />
                    </div>
                    <div className="col">
                        <h1 className="listing__title">Resorts</h1>
                    </div>
                    <div className="col">
                        <div className="listing__search">
                            <input
                                className="search-bar"
                                placeholder="Search resorts"
                                value={this.state.searchTerm}
                                onChange={this.searchResorts.bind(this)}>
                            </input>
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
