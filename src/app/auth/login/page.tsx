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

  console.log(errors.email);

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
            <Input
              {...register("email")}
              label="Email address"
              placeholder="e.g. alex@email.com"
              Icon={<AiOutlineMail />}
              errorValidation={errors.email?.message}
            />
            {/* <Text variant="body-s" as="label" htmlFor="email">
              Email address
            </Text>

            <AiOutlineMail className="absolute left-3 top-[52px] -translate-y-1/2 text-gray" />
            <input
              {...register("email")}
              id="email"
              placeholder="e.g. alex@email.com"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <Text variant="body-s" className="text-red">
                {errors.email.message}
              </Text>
            )} */}
          </div>

          <div className="relative flex-col flex gap-1">
            <Text variant="body-s" as="label" htmlFor="password">
              Password
            </Text>

            <GiPadlock className="absolute left-3 top-[52px] -translate-y-1/2 text-gray" />
            <input
              {...register("password")}
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
