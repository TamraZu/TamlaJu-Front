import React from "react";
import { latLngType } from "~/types/kakaoMapType";
import KakaoMap from "../components/kakaoMap/KakaoMap";
const defaultPosition: latLngType = { lat: 33.3764, lng: 126.5377 };
function Main() {

    return <div><KakaoMap center={defaultPosition} zoom={11} /></div>;
}

export default Main;
