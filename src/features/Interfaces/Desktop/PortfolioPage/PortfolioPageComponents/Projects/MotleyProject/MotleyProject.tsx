import React from "react";
import { View, StyleSheet } from "react-native";

const MotleyProject: React.FC = () => {
  return <View style={styles.scene}>{"A Future PDF Viewer"}</View>;
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
});

export default MotleyProject;
