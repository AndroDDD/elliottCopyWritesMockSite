import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainDisplay: React.FC = () => {
  return (
    <View style={styles.mainScene}>
      <Text>{"Scheduling Page Under Construction"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScene: {
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
    height: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 3,
  },
});

export default MainDisplay;
