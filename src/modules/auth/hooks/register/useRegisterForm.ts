import { regex } from "@/constants/regex";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerFormSchema = yup.object({
  email: yup
    .string()
    .required("El correo es requerido")
    .matches(regex.email, "El correo no es válido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "las contraseñas deben coincidir"),
});

export type RegisterFormData = yup.InferType<typeof registerFormSchema>;

export const useRegisterForm = () => {
  const methods = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  });

  return methods;
};
