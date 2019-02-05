/* Wrapper component for loading the Google Maps API */

import React from "react";
import { GoogleApiWrapper } from "google-maps-react";
import PlacesExplorer from "../components/PlacesExplorer";

export function MapsAPI(props) {
  return <PlacesExplorer />;
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCaM53UjMm2_R3STh88YIZzdt_IQSvesng"
})(MapsAPI);
