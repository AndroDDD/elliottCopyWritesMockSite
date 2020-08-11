import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "@material-ui/core";

import {
  scheduleAppointment,
  aboutPageLink,
  writersBadgeLink,
} from "./MainDisplayLogic";

const MainDisplay: React.FC = () => {
  return (
    <View style={styles.mainScene}>
      <Text style={styles.mainTitle}>
        {
          "Struggling with the Marketing and Psychological Aspects of Handling Clients?"
        }
      </Text>
      <Text style={styles.openingStatement}>
        {
          "Your prospects’ top concern is getting an advisor who listens to and respects their values. But as “bionic” advisors shape the future of personal finance management, you need the marketing expertise to differentiate yourself from the competition."
        }
      </Text>
      <View style={styles.portraitScene}>
        <View style={styles.portraitImage}>
          <Button style={{ padding: "0px" }} onClick={aboutPageLink}>
            <img
              src={require("../../../../Media/Portraits/LawrencePortraitv1.jpg")}
              alt={"Lawrence Elliott Portrait"}
              width={"250px"}
              height={"auto"}
              style={{ border: "solid 1px slategray", borderRadius: "3px" }}
            />
            <Text style={styles.portraitLabelText}>
              <img
                src={require("../../../../Media/Icons/logoIconv1.png")}
                alt={"Elliot Copywrites Logo"}
                width={"25px"}
                height={"25px"}
                style={{
                  border: "solid 1px rgb(250, 144, 0)",
                  borderRadius: "1px",
                  transform: "translateY(18px) translateX(-6px)",
                }}
              />
              {"Lawrence Elliott: Managing Member of Elliott Copywrites LLC"}
            </Text>
          </Button>
        </View>
        <View style={styles.portraitBadges}>
          <Button style={{ padding: "0px" }} onClick={writersBadgeLink}>
            <img
              src={require("../../../../Media/Badges/americanWritersVerifiedBadge.jpg")}
              alt={"American Writers and Artists Inc. Verified Badge"}
              width={"62.5px"}
              height={"62.5px"}
            />
          </Button>
        </View>
      </View>

      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          {
            "I help Austin-based CFPs develop long-term client relationships through persuasive sales copy and marketing content. \nIf you’re tired of running into dead-ends with your prospecting through cold calls and cold emails… Tired of losing clients to competition that always seems one step ahead… And frustrated with not having the time you know you need to invest into digital marketing… Then you may want to keep reading."
          }
        </Text>

        <Text style={styles.descriptionText}>
          {
            "As the personal financial management industry grows ever more sophisticated, keeping up with the latest developments is a full-time job by itself. Disruptors like A.I. and the ever-growing skillset of “bionic” advisors mean you need to spend more time than ever honing your craft. However, at the end of the day, clients still care about two things above all others. They want and advisor that is trustworthy and is dedicated to listening to their values. No amount of industry knowledge or technological convenience will grow your business if your prospects don’t feel assured that you have their best interests at heart."
          }
        </Text>

        <Text style={styles.descriptionText}>
          {
            "That’s where I come in. I will be able to dedicate the time and effort necessary to fully realizing your marketing message. I have studied the principles of direct response marketing to understand what motivates people and why so you know your copy will be working hard to get results. Additionally, I have studied CFP® Board code of conduct and FINRA compliance policies to keep you out of hot water in this heavily regulated industry. Work with Elliott Copywrites to help you deepen relationships with your current clients and boost your digital marketing profile to help attract new prospects. You’ll also enjoy the collaborative experience and develop a lasting profitable partnership. Sound good to you? Then…\n"
          }
        </Text>

        <Button
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            borderRadius: "20px",
            backgroundColor: "rgb(250, 144, 0)",
            fontWeight: "bold",
          }}
          onClick={scheduleAppointment}
        >
          {"SCHEDULE YOUR APPOINTMENT TODAY"}
        </Button>
      </View>
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
  mainTitle: {
    margin: "auto",
    marginTop: "5px",
    marginBottom: "15px",
    paddingLeft: "5px",
    paddingRight: "5px",
    textAlign: "center",
    fontSize: 20,
  },
  openingStatement: {
    margin: "auto",
    marginBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  portraitScene: {
    flexDirection: "row",
    margin: "auto",
    marginBottom: "15px",
    width: "100%",
    height: "auto",
    justifyContent: "center",
  },
  portraitImage: {
    paddingLeft: "3px",
    paddingRight: "3px",
  },
  portraitLabelText: {
    position: "absolute",
    bottom: "2px",
    width: "245px",
    textAlign: "center",
    fontSize: 10,
    color: "rgb(250, 144, 0)",
    transform: [{ translateY: -4 }],
  },
  portraitBadges: {
    paddingLeft: "3px",
    paddingRight: "3px",
  },
  descriptionView: {
    height: "100%",
    margin: "10px",
    padding: "10px",
    border: "solid 1px slategray",
    borderRadius: 3,
    justifyContent: "center",
  },
  descriptionText: {
    position: "relative",
    paddingBottom: "15px",
    fontSize: 15,
    lineHeight: 30,
    textAlign: "left",
  },
});

export default MainDisplay;
