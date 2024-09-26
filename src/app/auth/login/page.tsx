import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { Button } from "../../../components/ui/Button";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center mb-8">
        <Image src={Logo} alt="DevLinks" />
        <h2 className="text-4xl font-bold text-center">DevLinks</h2>
      </div>

      <div className="bg-white rounded-lg px-8 py-6 w-full max-w-md">
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
              placeholder="e.g. alex@email.com"
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
              placeholder="Enter your password"
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
