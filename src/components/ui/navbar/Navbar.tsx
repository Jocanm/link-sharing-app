"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "../Button";
import { Tab } from "../Tab";
import { FaLink, FaRegCircleUser } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { Text } from "../Text";
import { usePathname } from "next/navigation";
import { Routes } from "@/constants/routes";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="md:px-6">
      <nav className="bg-white flex items-center w-full p-4 rounded-lg gap-4 justify-between">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" className="h-8 w-8" />
          <Text variant="heading-m" className="hidden md:block">
            devlinks
          </Text>
        </div>

        <div className="flex items-center  gap-6">
          <Link href={Routes.LINKS}>
            <Tab
              leftIcon={<FaLink />}
              className="flex items-center gap-2"
              active={isActive("/configuration/links")}
            >
              <span className="hidden md:block">Links</span>
            </Tab>
          </Link>
          <Link href={Routes.PROFILE}>
            <Tab
              leftIcon={<FaRegCircleUser />}
              className="flex items-center gap-2"
              active={isActive("/configuration/profile")}
            >
              <span className="hidden md:block">Profile details</span>
            </Tab>
          </Link>
        </div>

        <div>
          <Button
            variant="secondary"
            className="w-14 md:w-28 flex items-center justify-center"
          >
            <LiaEyeSolid className="md:hidden w-5 h-5" />
            <span className="hidden md:block">Preview</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
