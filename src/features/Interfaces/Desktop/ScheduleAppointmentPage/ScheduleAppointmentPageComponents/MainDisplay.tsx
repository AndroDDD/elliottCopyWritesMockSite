import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";

import FormikField from "./FormComponents/FormikField";
import FormikSelect, { FormikSelectItem } from "./FormComponents/FormikSelect";

interface FormValues {
  name: string;
  email: string;
  contactNumber: string;
  inquiry: string;
  bestContactTime: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  contactNumber: "",
  inquiry: "",
  bestContactTime: "",
};

const bestContactTimeItems: FormikSelectItem[] = [
  {
    label: "7am - 11am",
    value: "morning",
  },
  { label: "11am - 3pm", value: "afternoon" },
  { label: "3pm - 6pm", value: "evening" },
];

const SchedulingSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Must be a valid email").required("Required"),
  contactNumber: Yup.string().required("Required"),
  inquiry: Yup.string().required("Required"),
  bestContactTime: Yup.string().required("Required"),
});

const MainDisplay: React.FC = () => {
  // Declare variable for navigating scheduling page
  const [currentView, setCurrentView] = React.useState("inquiring");

  // Declare stylesheet for manipulation
  const [styles, setStyles] = React.useState({
    mainScene: styles2.mainScene,
    mainTitle: styles2.mainTitle,
    formMainDisplay: styles2.formMainDisplay,
    formSubDisplay: { width: "100%" },
    submitButtonStyle: { marginTop: "15px", marginBottom: "10px" },
    submissionPageTitle: styles2.submissionPageTitle,
    submittedDataText: styles2.submittedDataText,
    returnButton: { marginTop: "25px", borderRadius: "0px" },
  });

  // Submission Data
  const [submissionData, setSubmissionData] = React.useState({
    name: ``,
    email: ``,
    contactNumber: ``,
    inquiry: ``,
    bestContactTime: ``,
  });

  const handleSubmit = (values: FormValues): void => {
    // const jsonedValues = JSON.stringify(values);
    const preparedData = {
      name: values.name,
      email: values.email,
      contactNumber: values.contactNumber,
      inquiry: values.inquiry,
      bestContactTime: values.bestContactTime,
    };

    // Update submission data state
    setSubmissionData(preparedData);

    // Update current view
    setCurrentView("inquirySubmitted");
    console.log({ submissionData: values });
  };

  // Declare function to handle navigating to inquiry page
  const handleReturn = () => {
    // Update current view
    setCurrentView("inquiring");
  };

  // Handle return view for component
  switch (currentView) {
    case "inquiring":
      return (
        <View style={styles.mainScene}>
          <Text style={styles.mainTitle}>
            {"INQUIRE ABOUT OUR COPYWRITE SERVICES"}
          </Text>
          <View style={styles.formMainDisplay}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={SchedulingSchema}
            >
              {({ dirty, isValid }) => {
                return (
                  <Form style={styles.formSubDisplay}>
                    <FormikField name="name" label="Name" required />
                    <FormikField name="email" label="Email" required />
                    <FormikField
                      name="contactNumber"
                      label="Contact Number"
                      required
                    />
                    <FormikField name="inquiry" label="Inquiry" required />
                    <FormikSelect
                      name="bestContactTime"
                      items={bestContactTimeItems}
                      label="Best Time To Contact?"
                      required
                    />
                    <Button
                      style={styles.submitButtonStyle}
                      variant="contained"
                      color="primary"
                      disabled={!dirty || !isValid}
                      type="submit"
                    >
                      {"SUBMIT INQUIRY"}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </View>
        </View>
      );
    case "inquirySubmitted":
      return (
        <View style={styles.mainScene}>
          <Text
            style={styles.submissionPageTitle}
          >{`Since this is a mock site, your information has not been submitted to any database. But please feel free to review your form submission data.`}</Text>
          <Text
            style={styles.submittedDataText}
          >{`Name: ${submissionData.name}`}</Text>
          <Text
            style={styles.submittedDataText}
          >{`Email: ${submissionData.email}`}</Text>
          <Text style={styles.submittedDataText}>
            {submissionData.contactNumber}
          </Text>
          <Text
            style={styles.submittedDataText}
          >{`Inquiry: ${submissionData.inquiry}`}</Text>
          <Text style={styles.submittedDataText}>
            {`Best time to follow up: ${submissionData.bestContactTime}`}
          </Text>
          <Button
            style={styles.returnButton}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleReturn}
          >
            {"RETURN TO SCHEDULING PAGE"}
          </Button>
        </View>
      );
    default:
      return (
        <View>
          <Text>{"Wonder how you got here.!."}</Text>
        </View>
      );
  }
};

// Declare stylesheet for react-native components
const styles2 = StyleSheet.create({
  mainScene: {
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    width: "80%",
    height: "auto",
    backgroundColor: "whitesmoke",
    borderRadius: 3,
  },
  mainTitle: {
    fontSize: 30,
  },
  formMainDisplay: {
    margin: "auto",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  submissionPageTitle: {
    paddingTop: "20px",
    paddingBottom: "20px",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  submittedDataText: {
    lineHeight: 60,
    fontSize: 25,
  },
});

export default MainDisplay;
