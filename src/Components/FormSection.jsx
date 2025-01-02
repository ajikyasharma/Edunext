import React from "react";

const FormSection = () => {
  return (
    <section className="bg-gradient-to-t from-green-300 to-white  shadow-lg py-8">
      <div className="container mx-auto p-4 max-w-7xl bg-white">
        <h2 className="text-2xl font-bold text-blue-900">Get Edunext ERP for your school</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <input type="text" placeholder="Full Name" className="border p-2 rounded-md" />
          <input type="email" placeholder="Email ID" className="border p-2 rounded-md" />
          <input type="text" placeholder="Mobile Number" className="border p-2 rounded-md" />
          <input type="text" placeholder="School/Organization" className="border p-2 rounded-md" />
          <input type="text" placeholder="Website" className="border p-2 rounded-md" />
          <input type="text" placeholder="City" className="border p-2 rounded-md" />
          <textarea placeholder="Your Message" className="border p-2 rounded-md col-span-full" rows="2"></textarea>
          <div className="flex items-center col-span-full justify-between">
          <div className="col-span-full flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>I’m not a robot</span>
          </div>
          <button className="col-span-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
            Submit
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
