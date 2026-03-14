import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>
          শিশুর হাসিই আমাদের <span className="text-primary">আনন্দ</span>
        </h2>
        <p>Grab the best toys for your kids at amazing prices.</p>
        <button className="btn btn-primary btn-outline">Expore Products</button>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/hero.png"}
          alt="Grab the best toys for your kids at amazing prices. Limited time
          offer!"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
