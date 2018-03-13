import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResortCard from '../elements/ResortCard';
import './Listing.css';
import back from '../../images/Back.png';
import search from '../../images/Search.png';
import filter from '../../images/Filter.png';
import add from '../../images/Add.png';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.searchResorts = this.searchResorts.bind(this);
        this.goToAddResort = this.goToAddResort.bind(this);
        this.state = { resorts: this.props.resorts }
    }

    goBack() {
        this.props.history.goBack();
    }

    searchResorts(event) {
        let searchTerm = event.target.value;

        this.setState(() => ({
            resorts: this.props.resorts.filter(resort => {
                return resort.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
        }));
    }

    goToAddResort() {
        this.props.history.push('/add');
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
                        <img onClick={this.goBack}
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
                                onChange={this.searchResorts}>
                            </input>
                        </div>
                    </div>
                </div>
                <div>
                    {resortList}
                </div>

                <div className="listing__add-button">
                    <img src={add} alt="add resort" onClick={this.goToAddResort}/>
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
