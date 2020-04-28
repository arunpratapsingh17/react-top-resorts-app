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
  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
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
      </form>
    </section>
  );
}
