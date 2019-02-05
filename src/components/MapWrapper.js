import React from "react";
import { Map, Marker, InfoWindow } from "google-maps-react";
import PlaceCard from "./PlaceCard";
import placeIcon from "../assets/place.svg";
import favoriteIcon from "../assets/favorite.svg";

export default function MapWrapper(props) {
  const markers = props.places
    //.filter(place => !props.activePlace || place.id !== props.activePlace.id)
    .map(place => {
      return (
        <Marker
          key={place.id}
          id={place.id}
          name={place.name}
          title={place.name}
          position={{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }}
          icon={{
            url: place.favorite ? favoriteIcon : placeIcon,
            anchor: new window.google.maps.Point(20, 40),
            scaledSize: new window.google.maps.Size(40, 40)
          }}
          onClick={props.onMarkerClicked}
        />
      );
    });

  const infoWindow = (
    <InfoWindow
      visible={!!props.activePlace}
      position={{
        lat: props.activePlace ? props.activePlace.geometry.location.lat() : 0,
        lng: props.activePlace ? props.activePlace.geometry.location.lng() : 0
      }}
      onClose={props.onInfoWindowClose}
    >
      {props.activePlace ? <PlaceCard place={props.activePlace} /> : <span />}
    </InfoWindow>
  );

  return (
    <Map
      className="map"
      google={window.google}
      center={{
        lat: props.lat,
        lng: props.lng
      }}
      zoom={14}
      onReady={props.onMapReady}
      onClick={props.onMapClicked}
    >
      {markers}
      {infoWindow}
    </Map>
  );
}
