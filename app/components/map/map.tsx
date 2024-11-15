"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MapComponent() {
  // const mapElement = useRef<boolean | null>(null);

  const router = useRouter();

  // useState
  const [mapElement, setMapElement] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("용산구 한강대로 405");

  // const naverClientID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "";

  // useEffect(() => {
  // 	const initMap = () => {
  // 		const mapOptions = {
  // 			center: new naver.maps.LatLng(37.3595704, 127.105399),
  // 			zoom: 10,
  // 		};

  // 		new naver.maps.Map("map", mapOptions);
  // 	};

  // 	if (window.naver && window.naver.maps) {
  // 		initMap();
  // 	} else {
  // 		const mapScript = document.createElement("script");
  // 		mapScript.onload = () => initMap();
  // 		mapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverClientID}`;
  // 		document.head.appendChild(mapScript);
  // 	}
  // }, []);

  // useEffect(() => {
  // 	// const { naver } = window;
  // 	// if (!mapElement.current || !naver) return;
  // 	const initMap = (x: number, y: number) => {
  // 		new naver.maps.Map("map", {
  // 			center: new naver.maps.LatLng(x, y),
  // 			zoom: 17,
  // 		});

  // 		// const mapMarker = new naver.maps.Marker({
  // 		// 	position: new naver.maps.LatLng(x, y),
  // 		// 	map: map,
  // 		// });
  // 	};
  // 	if (window.naver && window.naver.maps) {
  // 		naver.maps.Service.geocode(
  // 			{
  // 				query: location,
  // 			},
  // 			function (status, response) {
  // 				if (status === naver.maps.Service.Status.ERROR) {
  // 					return console.log(response.v2.errorMessage);
  // 				}
  // 				const result = response.v2.addresses[0];
  // 				const x = Number(result.x);
  // 				const y = Number(result.y);

  // 				initMap(y, x);
  // 			}
  // 		);
  // 	} else {
  // 		// const mapScript = document.createElement("script");
  // 		// mapScript.onload = () => initMap(y, x);
  // 		// mapScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverClientID}`;
  // 		// document.head.appendChild(mapScript);
  // 		router.refresh();
  // 	}
  // }, [location, router]);

  return (
    <div style={{ width: "500px", height: "100vh" }}>
      <div id="map" style={{ width: "500px", height: "100%" }}></div>
    </div>
  );
}
