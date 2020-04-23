import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
}
