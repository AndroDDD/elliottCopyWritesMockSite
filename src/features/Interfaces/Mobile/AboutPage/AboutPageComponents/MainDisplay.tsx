import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "@material-ui/core";

const MainDisplay: React.FC = () => {
  return (
    <View style={styles.mainScene}>
      <Text style={styles.mainTitle}>{"The Heart of a Storyteller"}</Text>
      <View style={styles.portraitScene}>
        <View style={styles.portraitImage}>
          <img
            src={require("../../../../Media/Portraits/LawrencePortraitv2.jpg")}
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
                transform: "translateY(16px) translateX(-8px)",
              }}
            />
            {"Lawrence Elliott: Managing Member of Elliott Copywrites LLC"}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          {`For a long time, Lawrence’s path was clear. He had nurtured a passion for environmental engineering all throughout high-school. He took the right classes and got into the right college. He knew this was the right thing to do. Get a degree. Get a well-paying job (about $81,000 a year on average). But things didn’t go the way he planned. Within a year, he was back home, with a few thousand dollars of debt, no degree and a mountain of shame.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`That was a slice of humble pie that took a long time to eat. Nearly two and a half years. That’s how long it took him to rediscover himself. To realize that the failure of the original plan didn’t have to define him forever.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`Looking inside, he rediscovered old passions that had been shoved into the corner to pursue the most logical path. Passions for dance, art, and literature. It was time to get back up. It was time to chart a new path. If there was one thing he knew that he loved, it was reading books. Throughout the entire process, he had never stopped reading. Not completely.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`Having had some experience as an editor in school and in personal matters, he figured being a proofreader would be a good place to start over. Immediately, he got to work refreshing his memory and sharpening his grammar and spelling skills, eventually mastering CEFR C2 level material. But right before he jumped into the client search, a small voice posed a large question.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`“Is this really what you want to do?” It asked. Could I have a real lasting passion for reading and editing other people’s stories? Almost like a light bulb going off, he realized the hidden common thread between his passions. He had a passion for creating. Whether it’s creating solutions for our energy-supply problems, creating art through dance or drawings, or creating stories from the depths of his imagination. Creating something new and original and putting it out for the world to see. That’s when he realized, he didn’t want to simply to edit and improve other people’s stories…he had his own stories to tell.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`This realization led him to grab that passion for literature out of the corner and put it back in center stage. All that time spent reading classical novels and studying the finer details of English grammar led to the creation of Stop, his first short story as a novelist. At 21 pages long, it was just a taste of more to come. More and better stories were already seeking expression in written form. However, as he researched the business side of the novelist life, he realized that starting from the bottom would mean a long-term investment with more hours per day than practical with his full-time $12.50/hr job. After being in the dumps for those two and a half years, he was ready to get moving now.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`So, it was back to the drawing board, again. How could he put these editing and storytelling skills to use somewhere more practical? After considering a range of unlikely freelance possibilities, he stumbled across a motivational speaker named Dan Lok. Dan moved him in a way that other speakers hadn’t. Truly starting from nothing, Dan carved out a multi-million-dollar position for himself as the “King of High-Ticket Sales.” How did he get started? A little trade called copywriting. Lawrence had never heard of copywriting before, but Dan how somehow made $10,000 a month from it. He figured it was worth investigation.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`The more he learned about the craft the more it seemed too good to be true. A career that required intensive research skills, a knack for storytelling, and a keen eye for editing? And all you needed to get started was a laptop? You shouldn’t have to work too hard to understand how it seemed that this career had been tailor made for his skill set. In ten weeks, he completed the AWAI Course for Six-Figure Copywriting and read over a dozen books on copywriting, business and marketing. His hunger for more knowledge continues to grow but now he’s ready to go out and put these new skills to the test.`}
        </Text>

        <Text style={styles.descriptionText}>
          {`It seems again, his path is clear. This time, it is the culmination of multiple passions stoked by a desire for success and a better future. Only time will tell what the future holds, but fortune favors the prepared. And he has been being prepared for years before he even knew it.`}
        </Text>
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
    bottom: "0%",
    width: "245px",
    textAlign: "center",
    fontSize: 10,
    color: "rgb(250, 144, 0)",
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
    textAlign: "left",
    paddingBottom: "15px",
  },
});

export default MainDisplay;
