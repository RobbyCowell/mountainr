import React, { Component } from 'react';
import { connect } from 'react-redux';
import PapaParse from 'papaparse';
import { initializeData } from '../../actions/resortsActions';
import headersConfig from '../../config/headersConfig';
import './Welcome.css';

class Welcome extends Component {
    handleUpload(evt) {
        //Store file
        let file = evt.target.files[0];

        //Store dispatch and history for use in config
        let dispatch = this.props.dispatch;
        let history = this.props.history;

        let parserConfig = {
            header: true,
            beforeFirstChunk: (chunk) => {
                //Cleanup data
                let index = chunk.match( /\r\n|\r|\n/ ).index;
                let headings = chunk.substr(0, index).split(',');
                
                //Update data object key names based on index
                for (var i=0; i < headings.length; i++) {
                    headings[i] = headersConfig[i];
                }

                return headings.join() + chunk.substr(index);
            },
            complete: (results) => {
                dispatch(initializeData(results.data));
                history.push('/listing');
            },
        };
        
        //Parse file
        PapaParse.parse(file, parserConfig);
    }

    render() {
        return (
            <div className="container-fluid welcome__background">
                <h1 className="welcome__title text-center">Mountainr</h1>
                <div className="row">
                    <div className="col text-center">
                        <label htmlFor="csv-file" className="welcome__uploader__button">Upload CSV</label>
                        <input type="file"
                            className="welcome__uploader"
                            id="csv-file"
                            accept=".csv"
                            name="csv-file"
                            onChange={this.handleUpload.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => { return {} }

export default connect(mapStateToProps)(Welcome);