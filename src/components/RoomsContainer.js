import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
function RoomsContainer({ context }) {
  const { sortedRooms, loading, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      Hello from rooms container
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomsContainer);

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { sortedRooms, loading, rooms } = value;
//         console.log("Hello from Room Container");
// if(loading){
//     <Loading />
// }
//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter />
//             <RoomsList rooms={rooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
