import React from "react";
// import mobileImage from "../assets/mobile.png"; // Replace with the path to your mobile image
import googlePlay from "../assets/playstore.png"; // Replace with Google Play logo
import appStore from "../assets/appstore.png"; // Replace with App Store logo

export default function MobileAppSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">

      <div className="lg:w-1/2 text-center">
          <img src="" alt="Mobile App" className="w-full max-w-sm mx-auto" />
        </div>
        <div className="mb-6 lg:mb-0 lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2 text-blue-700">Explore Our Most Advanced </h2>
          <h2 className="text-4xl font-bold mb-4 text-blue-600 ">School Mobile App</h2>
          <p className="text-gray-600 mb-6">
            The Edunext School Mobile App ensures that all essential school-related tasks
            are completed from anywhere, anytime with just a tap.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <img src={googlePlay} alt="Google Play" className="h-12" />
            <img src={appStore} alt="App Store" className="h-12" />
          </div>
        </div>

      </div>
    </section>
  );
}
