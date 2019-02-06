/* In a complete app, this would probably be the root component of one screen */

import React from "react";
import TopBarControls from "../containers/TopBarControls";
import PlacesListControls from "../containers/PlacesListControls";
import MapControls from "../containers/MapControls";
import styled from "styled-components";
// import Footer from "./Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const LeftSide = styled.div`
  min-width: 360px;
  width: 25%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// const Header = styled.div
//   position: top
//   width: 100%
//   height: 10%
//   background-color: grey

//   const Footer = styled.div
//     position: bottom
//     width: 100%
//     height: 10%
//     background-color: charcoal

export default function PlacesExplorer(props) {
  return (
    <Container>
      {/* <Header/> */}
      <LeftSide>
        <TopBarControls />
        <PlacesListControls />
      </LeftSide>
      <RightSide>
        <MapControls />
      </RightSide>
      {/* <Footer/> */}
    </Container>
  );
}
