import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { FiberManualRecordRounded } from "@material-ui/icons";

import { navigateToProject } from "./MainDisplayLogic";

const MainDisplay: React.FC = () => {
  return (
    <View style={styles.mainScene}>
      <Text style={styles.mainTitle}>{"Test Sales Landing Page"}</Text>
      <View style={styles.listScene}>
        <List>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://elliottcopywrites.com/wp-content/uploads/2018/10/TMF-SA-Sales-Letter-Sample.pdf",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`The Motley Fool Spec Sample: Stock Advisor — flagship service for The Motley Fool`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/1jHYBhDbAx-Yc94rHI8QBDOUA52gZCMhe/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Crush Leaf Tea: 33 Years of Sleepless Nights…`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://elliottcopywrites.com/wp-content/uploads/2019/03/Archer-Sample-Sales-Letter.pdf",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Archer Investment Management Spec Sample: Personal financial management advisor`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://elliottcopywrites.com/wp-content/uploads/2018/10/Budget-Brainiacs-Sample-2.0.pdf",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Budget Brainiacs Sample: Online financial education course for youth`}</ListItemText>
          </ListItem>
        </List>
      </View>
      <Divider
        variant={"middle"}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
      <Text style={styles.mainTitle}>{"Emails"}</Text>
      <View style={styles.listScene}>
        <List>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/1V4R7yBqkAcXNx5Sx1rMFlgD7GtqEVDgI/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Development Finance LTD: Retention-focused message towards a maturing fixed deposit (CD)`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/1lmW5le3nCkQSkoYE-XNpYvRPwhZk2mxx/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Posterity Wealth Management (fictional company): 5-Part welcome sequence `}</ListItemText>
          </ListItem>
        </List>
      </View>
      <Divider
        variant={"middle"}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
      <Text style={styles.mainTitle}>{"Articles/Blog"}</Text>
      <View style={styles.listScene}>
        <List>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/157sFmuBOpA5szvC36bh9bR81E5KgGNWz/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Development Finance LTD: Navigating Retrenchment with Fixed Deposits (CDs)`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/157sFmuBOpA5szvC36bh9bR81E5KgGNWz/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Rock Candy Media Spec Sample: 4 Factors to Keep Herbs Fresh`}</ListItemText>
          </ListItem>
        </List>
      </View>
      <Divider
        variant={"middle"}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
      <Text style={styles.mainTitle}>{"Other Projects"}</Text>
      <View style={styles.listScene}>
        <List>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://docs.google.com/presentation/d/1_qXRWCO4RXAFbZRrUR5-KCCXwG42dbeIZz-CJ1c14H8/edit?usp=sharing",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`(Webinar) doTERRA: Slide deck designed to help essential oils Distributor increase partnership inquiries`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/1J1EG1eMy2Z8_ZihThqFDPyf0n0YZQIw1/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`(Web Page Teardown-Live Commentary!) Go Above Marketing: Showcasing copy revisions to the Home Page`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/1egLE--vpFr3ZdOjh9V6F7d8QDe5wZ6qT/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`(Video Script) Go Above Marketing: short intro video establishing brand story and expertise`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/18WH9V0-Ylpy1MtdGeG8DFVT6EflJVndI/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`(Facebook Content Campaign) Development Finance LTD: “Did You Know?”-themed social media posts to educate our market`}</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() =>
              navigateToProject({
                url:
                  "https://drive.google.com/file/d/17s9V794jwQZrU1OVPSIxZedDVP5iQmuE/view",
              })
            }
          >
            <ListItemIcon>
              <FiberManualRecordRounded style={styles2.listIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles2.listItemText}
            >{`Testing Go Above Marketing: Reviewed and improved proposal to close an eCommerce client `}</ListItemText>
          </ListItem>
        </List>
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
    marginBottom: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
    textAlign: "left",
    fontSize: 20,
  },
  listScene: {
    margin: "auto",
    width: "100%",
  },
});

const styles2 = {
  listIcon: {
    width: "7px",
    height: "7px",
    color: "black",
    transform: "translateX(20px)",
  },
  listItemText: {
    transform: "translateX(-20px)",
  },
};

export default MainDisplay;
