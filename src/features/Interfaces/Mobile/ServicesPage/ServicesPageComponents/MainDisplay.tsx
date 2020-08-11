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

import { exampleLetter, portfolioPage, contactPage } from "./MainDisplayLogic";

const MainDisplay: React.FC = () => {
  return (
    <View style={styles.mainScene}>
      <Text
        style={styles.mainTitle}
      >{`“Come, I Will Choke You with Gold.” -Cosimo de Medici`}</Text>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          {`Direct response marketing is a staple of consumer brands by this point. In 2018, digital ad spend was clocked in at $93.75 billion.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`According to eMarketer, digital marketing will reach over $121 billion in 2021, becoming the largest single area of ad spend.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`However, many financial advice firms have been slow to capitalize on this strategy.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`Honestly, many copywriters are put off by the comparatively strict regulations of the industry. So, it’s little surprise that the two fields have been resistant to merging.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`You may even be wondering why you would need a copywriter like me.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`You can think of it like this — I’m a market research specialist.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`While you focus on keeping up with the latest in financial service trends, I focus on understanding your clients’ needs and motivations.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`I methodically scour the web and contact your target market to get first-hand accounts of what’s important to them and develop insights into their decision-making process.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`This research then serves to give you a strategic edge in talking to prospects. With the support of evidence-based marketing, you can see your aggregate assets increase by the millions.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`Beyond research, I can put this knowledge into practice through powerful persuasive copy.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`Here’s a short list of the type of content that would be useful to you for attracting prospects…`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <View style={styles.listScene}>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Case Studies`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Social Media Management`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Website Audit`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Home Page and Content Page Updates`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Targeted Surveys`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`In-depth Articles`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Blog Posts`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`SEO keyword targeting`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Sales Pages`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Landing Pages`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`Testimonials`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`FAQs`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`How-To Guides`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordRounded style={styles2.listIcon} />
              </ListItemIcon>
              <ListItemText>{`And many more!`}</ListItemText>
            </ListItem>
          </List>
        </View>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`That list just begins to cover the breadth of deliverables you could expect…`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`Direct mail and in-person channels, while more expensive, are still proven to be the most effective ways to drive conversions.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`While a lot of the benefits of those deliverables are obvious, as a CFP® you might be wondering when you would ever need something like a sales letter or landing page.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`Following the principle of “show don’t tell,” take a look at `}
          <Text
            style={styles.descriptionLink}
            onPress={exampleLetter}
          >{`this letter`}</Text>
          {` and see for yourself. A sales letter is the perfect tool to establish your brand identity and position your firm in the market.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`I could go on but if you’re not interested after looking at that letter or any of the `}
          <Text
            style={styles.descriptionLink}
            onPress={portfolioPage}
          >{`other samples in my portfolio`}</Text>
          {`, then we probably aren’t a good fit.`}
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Text style={styles.descriptionText}>
          {`But if you would like to learn more about how my services can benefit your unique business needs, give me a call at 800-513-3554 or email me `}
          <Text style={styles.descriptionLink} onPress={contactPage}>
            {"here."}
          </Text>
        </Text>
        <Divider
          variant={"middle"}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
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
  descriptionView: {
    height: "100%",
    margin: "10px",
    padding: "10px",
    border: "solid 1px slategray",
    borderRadius: 3,
    justifyContent: "center",
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 30,
  },
  descriptionLink: {
    textDecorationLine: "underline",
  },
  listScene: {
    margin: "auto",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const styles2 = {
  listIcon: {
    width: "7px",
    height: "7px",
    color: "black",
    transform: "translateX(40px)",
  },
};

export default MainDisplay;
