"use client";

import Logo from "@/assets/logo.png";
import { Text } from "@/components/ui/Text";
import { Routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { Button } from "../../../components/ui/Button";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col h-full px-7 md:px-10 gap-10 items-center justify-center">
      <div className="flex items-center gap-3 mr-auto md:mr-0">
        <Image src={Logo} alt="DevLinks" />
        <Text variant="heading-m" className="text-center">
          devlinks
        </Text>
      </div>

      <div className="md:bg-white rounded-lg md:p-10 w-full md:max-w-md">
        <Text variant="heading-m" className="mb-2">
          Login
        </Text>
        <Text variant="body-m" className="text-gray mb-6">
          Add your details below to get back into the app
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative flex flex-col gap-1">
            <Text variant="body-s" as="label" htmlFor="email">
              Email address
            </Text>

            <AiOutlineMail className="absolute left-3 top-[52px] -translate-y-1/2 text-gray" />
            <input
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "El formato del correo electrónico no es válido",
                },
                required: "Email es requerido",
              })}
              id="email"
              placeholder="e.g. alex@email.com"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <Text variant="body-s" className="text-red">
                {errors.email.message}
              </Text>
            )}
          </div>

          <div className="relative flex-col flex gap-1">
            <Text variant="body-s" as="label" htmlFor="password">
              Password
            </Text>

            <GiPadlock className="absolute left-3 top-[52px] -translate-y-1/2 text-gray" />
            <input
              {...register("password", {
                required: "contraseña es requerida",
                minLength: {
                  value: 8,
                  message: "la contraseña debe tener 8 caracteres",
                },
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <Text variant="body-s" className="text-red">
                {errors.password.message}
              </Text>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <Button className="w-full font-semibold text-white py-2 rounded-lg">
              Login
            </Button>
            <Text
              variant="body-m"
              className="flex md:flex-row md:gap-1 flex-col gap-px items-center justify-center text-gray"
            >
              {"Don't have an account?"}
              <Link href={Routes.REGISTER} className="text-purple">
                <Text variant="body-m">Create account</Text>
              </Link>
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
