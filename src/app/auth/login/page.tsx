import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { Button } from "../../../components/ui/Button";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-full px-10 gap-10 items-center justify-center">
      <div className="flex items-center gap-3 mr-auto md:mr-0">
        <Image src={Logo} alt="DevLinks" />
        <h2 className="text-4xl font-bold text-center">devlinks</h2>
      </div>

      <div className="md:bg-white rounded-lg md:p-10 w-full md:max-w-md">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray mb-6 text-base leading-6">
          Add your details below to get back into the app
        </p>

        <form className="space-y-6">
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block text-gray-dark text-sm font-normal"
            >
              Email address
            </label>
            <AiOutlineMail className="absolute left-3 top-[54px] -translate-y-1/2 text-gray" />
            <input
              id="email"
              type="email"
              placeholder="e.g. alex@email.com"
              className="w-full pl-10 py-4 border border-borders rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative flex-col flex gap-1">
            <label
              htmlFor="password"
              className="block text-gray-dark text-sm font-medium"
            >
              Password
            </label>
            <GiPadlock className="absolute left-3 top-[54px] -translate-y-1/2 text-gray" />
            <input
              id="password"
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
