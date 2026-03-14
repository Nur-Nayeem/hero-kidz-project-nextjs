import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-1 items-center">
      <Image
        alt="logo-hero-kidz"
        src={"/assets/logo.png"}
        height={50}
        width={40}
      />
      <h2 className="text-xl font-bold">
        Hero <span className="text-primary">Kidz</span>
      </h2>
    </Link>
  );
};

export default Logo;
