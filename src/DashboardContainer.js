import React, { Component } from 'react';
import { connect } from "react-redux"
import { loadBitcoinData } from "./action-creators"

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
                    Hello
                </div>
            </div>

        )
    }
}

export default connect(null, { loadBitcoinData })(DashboardContainer)
