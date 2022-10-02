import { TextField } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useFormContext, ValidationRule } from "react-hook-form";
interface CustomTextFieldProps {
  registeryProp: string;
  label: string;
  required?: boolean;
  type?: React.InputHTMLAttributes<unknown>["type"];
  pattern?: ValidationRule<RegExp>;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  registeryProp,
  label,
  required = false,
  type = "text",
  pattern,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<any>();

  return (
    <TextField
      type={type}
      error={!!errors[registeryProp]}
      label={label}
      {...register(registeryProp, {
        required: { value: required, message: "This field is required" },
        pattern,
      })}
      helperText={errors[registeryProp]?.message as ReactNode}
    />
  );
};

export default CustomTextField;
