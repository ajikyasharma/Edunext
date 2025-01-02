import React, { useState } from "react";
import Card from "./Card";
import academics from '../assets/academics.svg'
import administration from '../assets/administration.svg'
import hr from '../assets/hr.svg'
import finance from '../assets/finance.svg'
import transportApp from '../assets/Transport-App.svg'
import studentApp from '../assets/Student-App.svg'
import teacherApp from '../assets/Teacher-App.svg'
import managementApp from '../assets/Management-App.svg'
import onlineClass from '../assets/Online-Class.svg'
import digitalContent from '../assets/Digital-Content.svg'
import onlineAssignment from '../assets/Online-Assignment.svg'
import onlineAssesment from '../assets/Online-Assessment.svg'
import cms from '../assets/CMS.svg'
import SEOandSMO from '../assets/SEO-and-SMO.svg'
import responsiveWebsite from '../assets/Responsive-Website.svg'
import dynamicContent from '../assets/Dynamic-Content.svg'
import alexa from '../assets/ALEXA.svg'
import rfid from '../assets/RFID.svg'
import faceRecognition from '../assets/Face-Recognition.svg'
import gps from '../assets/GPS.svg'

const cardData = {
  School_ERP : [
    { title: "Academics", description: "In this digital era, from banking to education most things have gone online", image:`${academics}` },
    { title: "Administration", description: "Now those complex and time consuming day-by-day administrative process can be", image:`${administration}` },
    { title: "Human Resources", description: "Human resources (HR) is the divison of a busines/organization that is charged with recruting as well as filling an open",image:`${hr}` },
    { title: "Finance", description: "Keeping a close watch on every financial transaction of any nature and any magnitude is truly essential for every", image:`${finance}` },
  ],
  Mobile_App: [
    { title: "Transport App", description: "Through this application, you don't need any GPS Devices for Transportation. Only an Android", image:`${transportApp}` },
    { title: "Student App", description: "The Student app consists of circular, homework, e-learning, fee submission, and many more", image:`${studentApp}` },
    { title: "Teacher App", description: "The teachers also have access to the mobile app, they can view multiple options which are",image:`${teacherApp}` },
    { title: "Management App", description: "The Management App comprises of various options which are mentioned below", image:`${managementApp}` },
 ],
 E_Learning: [
    { title: "Online Classes", description: "Education ERP software comes along with integration with G-Suite and Microsoft Office It allows the", image:`${onlineClass}` },
    { title: "Digital Content", description: "Using the e-learning feature, students can access the leaming resources in various formats like", image:`${digitalContent}` },
    { title: "Online Assignment", description: "Schools can create different types of assignments, homework, project work, and others. It can be",image:`${onlineAssignment}` },
    { title: "Online Assessment", description: "This robust school ERP software allows teachers to conduct quizzes both subjective and objective", image:`${onlineAssesment}` },
 ],
 Website: [
    { title: "CMS", description: "The content management here comprises the relevant content that can be updated on the website", image:`${cms}` },
    { title: "SEO and SMO", description: "Search Engine Optimisation (SEO) is a potent mechanism which helps to enhance the online visibility of", image:`${SEOandSMO}` },
    { title: "Responsive Website", description: "Edunext technology has hands-on experience in developing responsive websites that are auto",image:`${responsiveWebsite}` },
    { title: "Dynamic Content", description: "Integrated with Edunext ERP for Enquiries, Birthdays, Circulars, Notices, Calendar, News, Image", image:`${dynamicContent}` },
 ],
 Smart_Technology: [
    { title: "Alexa", description: "Edunext Technologies, India's leading school management software development company", image:`${alexa}` },
    { title: "RFID", description: "Edunext introduced a new safety feature that ensures the child's safety on school premises. Edunext", image:`${rfid}` },
    { title: "Face Recognition", description: "Our ERP is integrated with a Biometric machine and the teachers can mark the attendance",image:`${faceRecognition}` },
    { title: "GPS", description: "Edunext introduced a new safety feature which ensures the child's safety in School Bus. Edunext safety", image:`${gps}` },
 ],
};

export default function CardSection() {
  const [activeCategory, setActiveCategory] = useState("School_ERP");

  return (
    <section className="py-10 bg-white">
        <div className="container mx-auto max-w-7xl">
      <h2 className="text-center text-3xl font-bold mb-2">Our Comprehensive Offerings</h2>
      <h4 className="text-center text-md lg:text-lg mb-6">Join the League of India’s most futuristic and comprehensive School Management<br/> Software that meets all your school-specific needs.</h4>
      <div className="flex flex-wrap justify-center sm:space-x-4 mb-6">
        {["School_ERP", "Mobile_App","E_Learning","Website","Smart_Technology"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "border border-blue-600 text-blue-600"
            }`}
          >
            {/* {category === "website" ? "Website" : "Mobile App"} */}
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {cardData[activeCategory].map((card, index) => (
          <Card key={index} title={card.title} description={card.description}  image={card.image}/>
        ))}
      </div>
      </div>
    </section>
  );
}
