// FormikSelect.tsx
import { TextField } from "@mui/material";
import { Field } from "formik";
import { FC, ReactNode } from "react";

interface Props {
  label: string;
  name: string;
  onChange?: (value: string) => void; // Add an onChange prop
  children: ReactNode;
}

const FormikSelect: FC<Props> = ({ label, name, onChange, children }) => {
  return (
    <div style={{ paddingBottom: "24px" }}>
      <Field name={name} id={name}>
        {(props: any) => {
          const handleChange = (
            event: React.ChangeEvent<HTMLSelectElement>
          ) => {
            if (onChange) {
              onChange(event.target.value);
            } // Call the onChange prop with the selected value
            props.field.onChange(event); // Handle the Formik field change
          };

          return (
            <>
              <TextField
                fullWidth
                variant="standard"
                label={label}
                select
                {...props.field}
                onChange={handleChange} // Attach the custom handleChange
              >
                {children}
              </TextField>
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikSelect;
