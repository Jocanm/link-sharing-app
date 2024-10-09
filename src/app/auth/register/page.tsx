"use client";

import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
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
        <Text variant="heading-m" className="mb-2" as="h1">
          Create account
        </Text>
        <Text variant="body-m" className="text-gray mb-6 block">
          Lets get you started sharing your links!
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              placeholder="e.g. alex@email.com"
              Icon={<GiPadlock />}
              errorValidation={errors.password?.message}
              {...register("password")}
            />
          </div>
          <div className="relative flex-col flex gap-1">
            <Input
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="e.g. alex@email.com"
              Icon={<GiPadlock />}
              errorValidation={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
          </div>
          <Text variant="body-s" className="text-gray text-xs">
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
