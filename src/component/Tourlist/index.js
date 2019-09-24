import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/Tour.js";
import { tourPhoto } from "../../tourPhoto";

export default class Tourlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: tourPhoto
    };
  }
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    console.log(this.state.tours);
    const { tours } = this.state;

    return (
      <div className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </div>
    );
  }
}
