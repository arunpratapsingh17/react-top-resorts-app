import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { sortedRooms, loading, rooms } = value;
        console.log("Hello from Room Container");

        return (
          <div>
            Hello from rooms container
            <RoomsFilter />
            <RoomsList rooms={rooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
