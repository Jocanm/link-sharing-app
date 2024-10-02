import { regex } from "@/constants/regex";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const loginFormSchema = yup.object({
  email: yup.string().required("El correo es requerido").matches(regex.email, "El correo no es válido"),
  password: yup.string().required("La contraseña es requerida").min(8, "La contraseña debe tener al menos 8 caracteres"),
})

export type LoginFormData = yup.InferType<typeof loginFormSchema>;

export const useLoginForm = () => {
  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  return methods;
}
