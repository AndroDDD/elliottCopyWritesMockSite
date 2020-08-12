import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import HeaderBar from "../../../Bars/Header/Header";
import FooterBar from "../../../Bars/Footer/Footer";
import MainDisplay from "./AboutPageComponents/MainDisplay";

const AboutPageM: React.FC = () => {
  return (
    <View style={styles.scene}>
      <ImageBackground
        source={{ uri: require("../../../Media/Backgrounds/ECWBluePlate.png") }}
        imageStyle={{ resizeMode: "repeat" }}
        style={styles.backgroundImage}
      >
        <HeaderBar />
        <MainDisplay />
        <FooterBar />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    margin: "auto",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "slategray",
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
});

export default AboutPageM;
