"use client";

import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Routes } from "@/constants/routes";
import {
  LoginFormData,
  useLoginForm,
} from "@/modules/auth/hooks/login/useLoginForm";
import Image from "next/image";
import Link from "next/link";
import { FieldErrors } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";

const LoginPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    reset();
  };

  const onErrors = (errors: FieldErrors<LoginFormData>) => {
    console.log(errors);
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
        <Text variant="heading-m" className="mb-2" as="h1">
          Login
        </Text>
        <Text variant="body-m" className="text-gray mb-6 block">
          Add your details below to get back into the app
        </Text>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onErrors)}>
          <div className="relative flex flex-col gap-1">
            <Input
              label="Email address"
              placeholder="e.g. alex@email.com"
              Icon={<AiOutlineMail />}
              errorValidation={errors.email?.message}
              {...register("email")}
            />
          </div>

          <div className="relative flex-col flex gap-1">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              Icon={<GiPadlock />}
              errorValidation={errors.password?.message}
              {...register("password")}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Button
              type="submit"
              className="w-full font-semibold text-white py-2 rounded-lg"
            >
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
