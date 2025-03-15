"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const markers = [
  { name: "Maroc", coordinates: [-6.8498, 34.0209] }, // Morocco
  { name: "France", coordinates: [2.2137, 46.6034] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
];

export default function WorldMap() {
  const [tooltip, setTooltip] = useState("");

  return (
    <div className="relative flex justify-center items-center">
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        className="w-full max-w-3xl h-auto"
      >
        {/* Load World Map */}
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-blue-300 stroke-blue-500"
              />
            ))
          }
        </Geographies>

        {/* Add Markers */}
        {markers.map(({ name, coordinates }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <circle
              r={5}
              fill="red"
              className="cursor-pointer"
              onMouseEnter={() => setTooltip(name)}
              onMouseLeave={() => setTooltip("")}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div className="absolute bg-black text-white text-sm py-1 px-2 rounded">
          {tooltip}
        </div>
      )}
    </div>
  );
}
