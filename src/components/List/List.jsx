import React from "react";
import "./List.css";

export default class List extends React.Component {
  renderTrips = () => {
    const trips = this.props.trips;
    const mapRows = trips.map((trip, index) => (
      <tr key={index} className="table.content">
        <td>{trip.date}</td>
        <td>{trip.place}</td>
        <td>{trip.type}</td>
      </tr>
    ));
    return mapRows;
  };

  render() {
    <h1>All Trips</h1>;
    let list = this.props.trips ? (
      <>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Place</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTrips()}</tbody>
        </table>
      </>
    ) : (
      <>No Trips Added</>
    );
    return (
      <div>
        {list}
        <div className="filter">
          <p>Filter by: </p>
          <p onClick={() => this.changeType("")}>All</p>
          <hr />
          <p onClick={() => this.changeType("Trek")}>Trek</p>
          <hr />
          <p onClick={() => this.changeType("Club")}>Club</p>
          <hr />
          <p onClick={() => this.changeType("Tropic")}>Tropic</p>
        </div>
      </div>
    );
  }
}
