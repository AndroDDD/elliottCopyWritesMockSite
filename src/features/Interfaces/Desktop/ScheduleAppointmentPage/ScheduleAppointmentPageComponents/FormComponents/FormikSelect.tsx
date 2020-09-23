import React, { ReactNode } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Field, ErrorMessage, FieldInputProps } from "formik";

import { View, StyleSheet } from "react-native";

// Declare interface for form select item properties
export interface FormikSelectItem {
  label: string;
  value: string;
}

// Declare interface for main form properties
interface FormikSelectInterface {
  name: string;
  items: FormikSelectItem[];
  label: string;
  required: boolean;
}

interface MaterialUISelectFieldInterface extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label: string;
  required: boolean;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldInterface> = ({
  errorString,
  children,
  label,
  required,
  value,
  name,
  onChange,
  onBlur,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select name={name} onChange={onChange} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

// Main Display Component
const FormikSelect: React.FC<FormikSelectInterface> = ({
  name,
  items,
  label,
  required = false,
}) => {
  // Declare Stylesheet for manipulation
  const [styles, setStyles] = React.useState({
    formDisplay: styles2.formDisplay,
  });

  // Handle return view of component
  return (
    <View style={styles.formDisplay}>
      <Field
        name={name}
        as={MaterialUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
        required={required}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </View>
  );
};

// Declare stylesheet for react-native components
const styles2 = StyleSheet.create({
  formDisplay: {
    margin: "auto",
  },
});

export default FormikSelect;
