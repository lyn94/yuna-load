"use client";

import useKakaoLoader from "@/app/hooks/useKakaoLoader";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapComponent() {
  useKakaoLoader();

  // useState
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 33.450701,
    lng: 126.570667,
  });

  return (
    <div style={{ width: "500px", height: "100vh" }}>
      <Map
        id="map"
        center={location}
        className="w-[500px] h-full"
        level={3} // 지도의 확대 레벨
      >
        <MapMarker position={location}>here!</MapMarker>
      </Map>
    </div>
  );
}
