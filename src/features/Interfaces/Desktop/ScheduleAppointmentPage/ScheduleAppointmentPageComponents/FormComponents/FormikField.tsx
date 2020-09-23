import React from "react";
import { View, StyleSheet } from "react-native";
import { TextField } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";

interface FormikFieldInterface {
  name: string;
  label: string;
  type?: string;
  required: boolean;
}

const FormikField: React.FC<FormikFieldInterface> = ({
  label,
  name,
  type = "text",
  required = false,
}) => {
  // Declare stylesheet for mutation
  const [styles, setStyles] = React.useState({
    fieldDisplay: styles2.fieldDisplay,
  });

  // Handle return view for component
  return (
    <View style={styles.fieldDisplay}>
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={<ErrorMessage name={name} />}
      />
    </View>
  );
};

// Declare stylesheet for react-native components
const styles2 = StyleSheet.create({
  fieldDisplay: {
    margin: "auto",
  },
});

export default FormikField;
