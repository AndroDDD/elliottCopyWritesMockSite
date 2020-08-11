import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link, Grid } from "@material-ui/core";
import {
  LocationCityRounded,
  PhoneAndroidRounded,
  MailOutlineRounded,
} from "@material-ui/icons";
import "./FooterStyles.scss";

import { isMobile } from "../../../routes/routerBlock";

const FooterBar: React.FC = () => {
  return (
    <View style={styles.mainScene}>
      <View style={isMobile ? styles.contactSceneMobile : styles.contactScene}>
        <Grid container spacing={1}>
          <Grid item>
            <View style={styles.individualContactContainer}>
              <MailOutlineRounded
                className={
                  isMobile ? "contactIconMobile" : "contactIconDesktop"
                }
                style={isMobile ? { transform: "translateY(-1px)" } : {}}
              />
              <Text
                style={isMobile ? styles.contactTextMobile : styles.contactText}
              >
                {"Lawrencewte@elliottcopywrites.com"}
              </Text>
            </View>
          </Grid>

          <Grid item>
            <View style={styles.individualContactContainer}>
              <PhoneAndroidRounded
                className={
                  isMobile ? "contactIconMobile" : "contactIconDesktop"
                }
                style={isMobile ? { transform: "translateX(-3px)" } : {}}
              />
              <Text
                style={isMobile ? styles.contactTextMobile : styles.contactText}
              >
                {"800-513-3554"}
              </Text>
            </View>
          </Grid>

          <Grid item>
            <View style={styles.individualContactContainer}>
              <LocationCityRounded
                className={
                  isMobile ? "contactIconMobile" : "contactIconDesktop"
                }
                style={
                  isMobile
                    ? { transform: "translateX(-1px) translateY(2px)" }
                    : {}
                }
              />
              <Text
                style={isMobile ? styles.contactTextMobile : styles.contactText}
              >
                {"10601 Clarence Dr. Suite 250 Frisco TX, 75033"}
              </Text>
            </View>
          </Grid>
        </Grid>
      </View>
      <View style={styles.privacyLinkScene}>
        <Link
          href={"#"}
          className={isMobile ? "privacyLinkMobile" : "privacyLinkDesktop"}
          onClick={(e: { preventDefault: any }) => {
            e.preventDefault();
          }}
        >
          {"Privacy Policy"}
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScene: {
    width: "100%",
    backgroundColor: "rgb(0, 0, 50)",
    flexDirection: "row",
    flex: 2,
  },
  privacyLinkScene: {
    position: "absolute",
    right: "0%",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  contactScene: {
    position: "absolute",
    width: "70%",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  contactSceneMobile: {
    width: "70%",
    paddingLeft: "0px",
    paddingRight: "10px",
  },
  individualContactContainer: {
    flexDirection: "row",
    flex: 2,
  },
  contactText: {
    color: "whitesmoke",
    textDecorationLine: "underline",
    textDecorationColor: "slategray",
    textOverflow: "ellipsis",
  },
  contactTextMobile: {
    color: "whitesmoke",
    textDecorationLine: "underline",
    textDecorationColor: "slategray",
  },
});

export default FooterBar;
