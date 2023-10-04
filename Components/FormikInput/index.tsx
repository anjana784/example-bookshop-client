import TextField from "@mui/material/TextField";
import { ErrorMessage, Field, FieldAttributes } from "formik";
import { FC, HTMLInputTypeAttribute } from "react";

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  fullWidth?: boolean;
  disabled?: boolean;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string | number;
  autoFocus?: boolean;
}

const FormikInput: FC<Props> = ({
  type,
  name,
  label,
  fullWidth,
  disabled,
  value,
  placeholder,
  defaultValue,
  autoFocus,
}) => {
  return (
    <div
      style={{
        paddingBottom: "24px",
      }}
    >
      <Field type={type} name={name} id={name}>
        {(props: FieldAttributes<any>) => {
          return (
            <TextField
              {...props.field}
              variant="standard"
              label={label}
              fullWidth={fullWidth}
              disabled={disabled}
              value={value}
              placeholder={placeholder}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(error) => {
          console.log(error);

          return <div className="text-themeError text-sm">{error}</div>;
        }}
      </ErrorMessage>
    </div>
  );
};

export default FormikInput;
