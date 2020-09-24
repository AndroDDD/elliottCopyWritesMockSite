import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import HeaderBar from "../../../Bars/Header/Header";
import FooterBar from "../../../Bars/Footer/Footer";
import MainDisplay from "./ScheduleAppointmentPageComponents/MainDisplay";

import $ from "jquery";

const ScheduleAppointmentPageD: React.FC = () => {
  // Handle screen size detection and changes
  const [screenHeight, setScreenHeight] = React.useState(() => {
    let fetchedScreenHeight = Dimensions.get("window").height;
    return fetchedScreenHeight;
  });
  $(window).on("resize", () => {
    console.log({ prevScreenHeight: screenHeight });
    setScreenHeight(() => {
      let fetchedScreenHeight = Dimensions.get("window").height;
      return fetchedScreenHeight;
    });
    console.log({ updatedScreenHeight: screenHeight });
  });

  // Declare stylesheet for manipulation
  const [styles, setStyles] = React.useState({
    scene: styles2.scene,
    sceneSupport: { width: "100%", height: `${screenHeight}px` },
    backgroundImage: styles2.backgroundImage,
  });

  // Handle screen size changes
  React.useEffect(() => {
    console.log({ detectedScreenHeightChange: screenHeight });
    let updatedHeightConfig = {
      ...styles,
      sceneSupport: { ...styles.sceneSupport, height: `${screenHeight}px` },
    };
    setStyles(updatedHeightConfig);
  }, [screenHeight]);

  // Handle return view for component
  return (
    <div style={styles.sceneSupport}>
      <View style={styles.scene}>
        <ImageBackground
          source={{
            uri: require("../../../Media/Backgrounds/ECWBluePlate.png"),
          }}
          imageStyle={{ resizeMode: "repeat" }}
          style={styles.backgroundImage}
        >
          <div
            style={{
              boxSizing: "border-box",
              position: "absolute",
              top: "0px",
              width: "100%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeaderBar />
          </div>
          <div
            style={{
              position: "absolute",
              top: "150px",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MainDisplay />
          </div>
          <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
            <FooterBar />
          </div>
        </ImageBackground>
      </View>
    </div>
  );
};

const styles2 = StyleSheet.create({
  scene: {
    margin: "auto",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "rgb(0, 0, 50)",
    paddingBottom: "24px",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default ScheduleAppointmentPageD;
