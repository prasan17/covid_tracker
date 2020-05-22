import React, { Component } from 'react';
class Countrytable extends Component {
    constructor() {
        super();
        this.state = {
            countrydetail: null
        }
    }
    async componentDidMount() {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ countrydetail: data.Countries })
    }
    render() {
        return (
            this.state.countrydetail ?
                this.state.countrydetail.map((item, index) =>
                    <tr key={index}>
                        <td>{item.Country}</td>
                        <td>{item.TotalConfirmed}</td>
                        <td>{item.TotalRecovered}</td>
                        <td>{item.TotalDeaths}</td>
                    </tr>
                )
                :
                null
        );
    }
}
export default Countrytable;