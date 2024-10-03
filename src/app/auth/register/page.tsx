"use client";

import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Routes } from "@/constants/routes";
import {
  RegisterFormData,
  useRegisterForm,
} from "@/modules/auth/hooks/register/useRegisterForm";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";

const RegisterPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const onSubmit = (data: RegisterFormData) => {
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
          Create account
        </Text>
        <Text variant="body-m" className="text-gray mb-6">
          Lets get you started sharing your links!
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative flex flex-col gap-1">
            <Text variant="body-s" as="label" htmlFor="email">
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
            )}
          </div>

          <div className="relative flex-col flex gap-1">
            <Text variant="body-s" as="label" htmlFor="password">
              Create Password
            </Text>

            <GiPadlock className="absolute left-3 top-[51px] -translate-y-1/2 text-gray" />
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="At least 8 characters"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <Text variant="body-s" className="text-red">
                {errors.password.message}
              </Text>
            )}
          </div>
          <div className="relative flex-col flex gap-1">
            <Text variant="body-s" as="label" htmlFor="password">
              Confirm Password
            </Text>

            <GiPadlock className="absolute left-3 top-[51px] -translate-y-1/2 text-gray" />
            <input
              {...register("confirmPassword")}
              id="confirmPassword"
              type="password"
              placeholder="At least 8 characters"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <Text variant="body-s" className="text-red">
                {errors.confirmPassword.message}
              </Text>
            )}
          </div>
          <Text variant="body-s" className="text-gray">
            Password must contain at least 8 characters
          </Text>
          <div className="flex flex-col gap-5">
            <Button className="w-full font-semibold text-white py-2 rounded-lg">
              Create new account
            </Button>
            <Text
              variant="body-m"
              className="flex md:flex-row md:gap-1 flex-col gap-px items-center justify-center text-gray"
            >
              Already have an account?
              <Link href={Routes.LOGIN} className="text-purple">
                <Text variant="body-m">Login</Text>
              </Link>
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
