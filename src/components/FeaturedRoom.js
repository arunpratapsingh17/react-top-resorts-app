import React, { Component } from "react";
import Loading from "./Loading";
import { RoomContext } from "../context";
export default class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: room } = this.context;
    console.log(room);

    return (
      <div>
        Hello from featuer room componentd
        <Loading />
      </div>
    );
  }
}
