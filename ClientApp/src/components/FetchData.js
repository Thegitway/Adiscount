import React, { Component } from 'react';
import {getClient} from '../API/apiService';
export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { clients: [], loading: true };
  }

  componentDidMount() {
    getClient().then((x)=>{this.setState({ forecasts: x , loading: false });});
  }

  static renderForecastsTable(clients) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>BirthDay</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client =>
            <tr key={client.birth}>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.birth}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Clients data</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateData() {
    const response = await fetch('https://localhost:5000/api/client');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
