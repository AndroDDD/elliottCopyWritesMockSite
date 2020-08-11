import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import HeaderBar from "../../../Bars/Header/Header";
import FooterBar from "../../../Bars/Footer/Footer";
import MainDisplay from "./PortfolioPageComponents/MainDisplay";

const PortfolioPageD: React.FC = () => {
  return (
    <View style={styles.scene}>
      <ImageBackground
        source={{ uri: require("../../../Media/Icons/logoIconv1.png") }}
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
    flex: 1,
    justifyContent: "center",
  },
});

export default PortfolioPageD;
