import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { Button } from "../../../components/ui/Button";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-full px-3 items-start justify-start lg:items-center lg:justify-center">
      <div className="flex items-center p-8 justify-center mb-4 gap-3 sm:mb-10">
        <Image src={Logo} alt="DevLinks" />
        <h2 className="text-4xl font-bold text-center">devlinks</h2>
      </div>

      <div className="md:bg-white rounded-lg px-8 py-10 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray mb-6 text-base leading-6">
          Add your details below to get back into the app
        </p>

        <form className="flex flex-col space-y-4">
          <div className="relative">
            <label className="block text-gray-dark text-sm font-normal mb-1">
              Email address
            </label>
            <AiOutlineMail className="absolute left-3 top-[3.3rem] transform -translate-y-1/2 text-gray" />
            <input
              type="email"
              placeholder="e.g. alex@email.com"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-dark text-sm font-medium mb-1">
              Password
            </label>
            <GiPadlock className="absolute left-3 top-[3.3rem] transform -translate-y-1/2 text-gray" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-5">
            <Button className="w-full font-semibold text-white py-2 rounded-lg">
              Login
            </Button>
            <p className="flex md:flex-row md:gap-1 flex-col gap-px items-center justify-center text-base font-normal text-gray">
              {"Don't have an account?"}
              <Link href="/" className="text-purple">
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
