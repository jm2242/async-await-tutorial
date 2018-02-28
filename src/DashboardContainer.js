import React, { Component } from 'react';
import { connect } from "react-redux"
import { loadBitcoinData } from "./action-creators"
import RaisedButton from 'material-ui/RaisedButton';

class DashboardContainer extends Component {

    componentDidMount() {
        this.handleLoad()
    }

    handleLoad = () => {
        this.props.loadBitcoinData()
    }


    render() {
        return (
            <div className="container">
                <div className="flex">
                    <RaisedButton
                        label="Get Bitcoin Prices"
                        onClick={this.handleLoad}
                        />
                </div>
            </div>

        )
    }
}

export default connect(null, { loadBitcoinData })(DashboardContainer)
