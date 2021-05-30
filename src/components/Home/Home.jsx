import React, { Component } from "react";

export default class Home extends Component {
  findTropicCount = () => {
    const trips = this.props.trips;
    let tropicCount = trips.reduce((count, trip) => {
      return count + (trip.type.toLowerCase() === "tropic");
    }, 0);
    return tropicCount;
  };

  findTrekCount = () => {
    const trips = this.props.trips;
    let trekCount = trips.reduce((count, trip) => {
      return count + (trip.type.toLowerCase() === "trek");
    }, 0);

    return trekCount;
  };

  findClubCount = () => {
    const trips = this.props.trips;
    let clubCount = trips.reduce((count, trip) => {
      return count + (trip.type.toLowerCase() === "club");
    }, 0);
    return clubCount;
  };

  render() {
    let trips = this.props.trips ? (
      <>
        <div className="main-container">
          <h1 className="count-value">{this.props.trips.length}</h1>
          <h4 className="trips">trips</h4>
        </div>

        <div className="info-container">
          <span className="icons">
            <i className="fa fa-sun" aria-hidden="true"></i>
          </span>
          <span className="icons">
            <i class="fas fa-mountain"></i>
          </span>
          <span className="icons">
            <i className="fa fa-beer" aria-hidden="true"></i>
          </span>
        </div>

        <div className="count-container">
          <h1>{this.findTropicCount()}</h1>
          <h1>{this.findTrekCount()}</h1>
          <h1>{this.findClubCount()}</h1>
        </div>
      </>
    ) : (
      <>
        <div className="main-container">
          <h1 className="count-value">{this.props.trips.length}</h1>
          <h4 className="trips">trips</h4>
        </div>

        <div className="info-container">
          <span className="icons">
            <i className="fa fa-sun" aria-hidden="true"></i>
          </span>
          <span className="icons">
            <i class="fas fa-mountain"></i>
          </span>
          <span className="icons">
            <i className="fa fa-beer" aria-hidden="true"></i>
          </span>
        </div>

        <div className="count-container">
          <h1>0</h1>
          <h1>0</h1>
          <h1>0</h1>
        </div>
      </>
    );
    return <>{trips}</>;
  }
}
