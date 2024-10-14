import React from "react";
import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "@/components/ui/Input";

interface InputFormProps extends InputProps {
  name: string;
}

const InputForm = ({ name, ...props }: InputFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;
  return <Input errorValidation={error} {...props} {...register(name)} />;
};

export default InputForm;
