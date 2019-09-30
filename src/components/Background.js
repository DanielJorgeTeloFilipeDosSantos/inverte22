import React, { Component } from "react";
import bk from "../ui/bk.jpg";

export class Background extends Component {
  render() {
    return (
      <div>
        <img className="bk" src={bk} alt="Logo" />
      </div>
    );
  }
}

export default Background;
