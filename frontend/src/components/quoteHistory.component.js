import React, { Component } from 'react';

export default class QuoteHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {history: []};
    }


    render() {
        return(
            <div className="container">
                <h3>Quote History Page</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Gallons Requested</th>
                            <th>Delivery Address</th>
                            <th>Delivery Date</th>
                            <th>Suggested Price</th>
                            <th>Total Amount Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Test: 255</td>
                            <td>1234 Main Drive</td>
                            <td>March 15 2021</td>
                            <td>$1,200.47</td>
                            <td>$1,367.98</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}