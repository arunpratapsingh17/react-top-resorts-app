import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//FOR GETTING ALL UNIQUE VALUES(VVVIMP)
const getUnique = (items, value) => {
  return [
    ...new Set(
      items.map((item) => {
        return item[value];
      })
    ),
  ];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  //GETTING ALL THE UNIQUE VALUES IN AN ARRAY
  let types = getUnique(rooms, "type");
  //ADDING ALL IN THE STARTING
  types = ["all", ...types];
  //MAPPING TO JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <>
      <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
          {/*   Filter For Room Type   */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* Filter for number of guests */}
          <div className="form-group">
            <label htmlFor="capacity">room type</label>
            <select
              name="capacity"
              id="type"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* Filter by price */}
          <div className="form-group">
            <label htmlFor="price">Room Price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </form>
      </section>
    </>
  );
}
