import React from "react";
import mapLocation from "./../../resources/images/mapLocation.png";

export default function Location() {
  return (
    <div className="location_wrapper">
      <div
        style={{
          // border: '10px solid black',
          background: "#3c3c3c",
          textAlign: "center"
        }}
      >
        <img
          style={{ margin: "0 auto" }}
          src={mapLocation}
          alt="location on map"
        />
      </div>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}
