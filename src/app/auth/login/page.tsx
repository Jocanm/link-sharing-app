import React from "react";
import { Button } from "../../../components/ui/Button";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { PiLinkSimpleFill } from "react-icons/pi";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex items-center justify-center mb-8">
        <PiLinkSimpleFill className="text-5xl rounded-2xl mr-3 text-blue-700" />
        <h1 className="text-4xl font-bold text-center">DevLinks</h1>
      </div>

      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray mb-6 text-base leading-6">
          Add your details below to get back into the app
        </p>

        <form className="flex flex-col space-y-4">
          <div className="relative">
            <label className="block text-gray-dark text-sm font-normal mb-1">
              Email address
            </label>
            <AiOutlineMail className="absolute left-3 top-11 text-gray" />
            <input
              type="email"
              placeholder="       e.g. alex@email.com"
              className="w-full px-4 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-dark text-sm font-medium mb-1">
              Password
            </label>
            <GiPadlock className="absolute left-3 top-11 text-gray" />
            <input
              type="password"
              placeholder="       Enter your password"
              className="w-full px-4 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <span className="flex items-center justify-center text-base font-normal">
            {"Don't have an account?"}
            <Link href="/" className="text-purple ">
              Create account
            </Link>
          </span>

          <Button className="w-full font-semibold text-white py-2 rounded-lg">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
