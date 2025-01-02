import React from "react";
import heroimage from '../assets/heroimage.png'

const HeroSection = () => {
  return (
    <section className="pt-2">
      <div className="conatainer mx-auto md:mx-[300px] lg:mx-[400px]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-4xl font-bold text-blue-900">Helping Teachers Manage Online Classes</h1>
          <p className="text-lg text-gray-600">Empower students and teachers with an online learning solution.</p>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src={heroimage} alt="Teacher and student" className="w-full h-auto mx-auto" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
