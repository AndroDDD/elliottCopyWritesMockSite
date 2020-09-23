import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import HeaderBar from "../../../Bars/Header/Header";
import FooterBar from "../../../Bars/Footer/Footer";
import MainDisplay from "./ScheduleAppointmentPageComponents/MainDisplay";

let screenHeight = Dimensions.get("window").height;

const ScheduleAppointmentPageD: React.FC = () => {
  return (
    <View style={styles.scene}>
      <ImageBackground
        source={{ uri: require("../../../Media/Backgrounds/ECWBluePlate.png") }}
        imageStyle={{ resizeMode: "repeat" }}
        style={styles.backgroundImage}
      >
        <div style={{ position: "relative", top: "-10%", width: "100%" }}>
          <HeaderBar />
        </div>
        <MainDisplay />
        <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
          <FooterBar />
        </div>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    margin: "auto",
    width: "100%",
    height: screenHeight,
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
