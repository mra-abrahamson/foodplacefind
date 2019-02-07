/* Wrapper component for loading the Google Maps API */

import React from "react";
import { GoogleApiWrapper } from "google-maps-react";
import PlacesExplorer from "../components/PlacesExplorer";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";


export function MapsAPI(props) {
  return (
    <div>
      <Header />
      <PlacesExplorer />
      <Footer />
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCaM53UjMm2_R3STh88YIZzdt_IQSvesng"
})(MapsAPI);
