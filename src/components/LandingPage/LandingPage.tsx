"use client";
import { SignInButton } from "@clerk/nextjs";
import Lottie from "lottie-react";
// components
import Footer from "../Footer/Footer";
// utils & static data
import { FEATURES_DATA } from "~/utils/constants";
// assets
import { LandingBgAnimation } from "~/assets/animations";

const LandingPage = () => {
  return (
    <>
      <main className="" style={{ height: "calc(100vh - 10%)" }}>
        <main className="flex h-full flex-grow  items-center justify-center px-8 text-center ">
          <Lottie
            animationData={LandingBgAnimation}
            style={{
              position: "absolute",
              zIndex: "0",
            }}
            loop={0}
          />
          <div className=" z-10 flex flex-col items-center">
            <h1 className="font-heading mb-4 text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              This is{" "}
              <span className="from-gradientStart to-gradientEnd bg-gradient-to-r bg-clip-text text-transparent ">
                Shoots
              </span>
            </h1>
            <p className="mb-6 text-lg text-secondary-foreground lg:text-xl">
              Your ultimate destination to manage and showcase your photos.
            </p>
            <SignInButton>
              <button className="from-gradientStart  to-gradientEnd gradient-hover-effect transform rounded-md bg-gradient-to-r px-6 py-3 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-gradient-to-l hover:ease-in-out">
                Get Started
              </button>
            </SignInButton>
          </div>
        </main>
        <section className=" rounded-md bg-background py-12 shadow-sm">
          <div className="container mx-auto flex flex-col items-center justify-center px-8 text-center">
            <h2 className="font-heading mb-8 text-4xl font-bold text-primary/90">
              Upcoming{" "}
              <span className="from-gradientStart to-gradientEnd bg-gradient-to-r bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <div className="flex w-full flex-wrap justify-center">
              {FEATURES_DATA.map((feature, index) => (
                <div
                  key={index}
                  className="m-4 w-[100%] rounded-lg  bg-primary p-6 shadow-lg sm:w-[320px]"
                >
                  <feature.icon className="mx-auto mb-4 text-[2.5rem] text-secondary sm:text-[3rem] lg:text-[4rem]" />
                  <h3 className="text-xl font-semibold text-secondary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-secondary/50">
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
