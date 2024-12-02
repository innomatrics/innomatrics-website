import React, { forwardRef } from "react";
import "./About.css"; // Import Tailwind styles
import aboutMe from "../../assets/aboutMe.jpeg";
import about from "../../assets/about.jpg";
import OurVision from "../Home/Our Vision/OurVision";
import OurMission from "../Home/Our Mission/OurMission";
import inno from "../../assets/m1.webp";
import digi from "../../assets/m2.jpg";
import qlty from "../../assets/m3.jpg";
import grwth from "../../assets/m4.png";

import innovation from "../../assets/mission1.jpg";
import digiTransform from "../../assets/mission2.jpg";
import quality from "../../assets/mission3.jpg";
import growth from "../../assets/mission4.jpg";
import ClientsCarousel from "../ClientsLogo/ClientsCarousel";
import c1 from "../../assets/portfolioLogo/MRItow.jpg";
import test from "../../assets/portfolio/test.png";
import c2 from "../../assets/portfolioLogo/RoyalKing.jpg";
import c3 from "../../assets/portfolioLogo/chanconst.jpg";
import c4 from "../../assets/portfolioLogo/dstudio.jpg";
import c5 from "../../assets/portfolioLogo/goldkey.jpg";
import c6 from "../../assets/portfolioLogo/infinitytravels.jpg";
import c7 from "../../assets/portfolioLogo/ngo.jpg";
import c8 from "../../assets/portfolioLogo/osprezt.jpg";
import c9 from "../../assets/portfolioLogo/skb.jpg";
import c10 from "../../assets/portfolioLogo/thriupathiTours.jpg";
import c11 from "../../assets/portfolioLogo/vklights.jpg";
import aboutCorporate from '../../assets/aboutCorporate.jpg'
const About = forwardRef((props, ref) => {
  const clientLogos = [
    {
      image: c1,
    },
    {
      image: c2,
    },
    {
      image: c3,
    },
    {
      image: c4,
    },
    {
      image: c5,
    },
    {
      image: c6,
    },
    {
      image: c7,
    },
    {
      image: c8,
    },
    {
      image: c9,
    },
    {
      image: c10,
    },
    {
      image: c11,
    },
  ];
  return (
    <>
      <section className="about-section bg-cover bg-center" ref={ref}>
        <div className="container mx-auto px-4 py-20 md:py-40">
          <div className="flex flex-col my-[50px] md:my-[10px] items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              About US
            </h1>
            <p className="text-xl font-semibold text-white md:text-2xl">
              Helping businesses thrive with digital and tech solutions.
            </p>
            <hr className="text-sky-600 w-[100%] md:w-[50%] " />
          </div>
        </div>
      </section>

      <div
        className="flex flex-col lg:flex-row bg-gray-100 gap-x-10
       px-4 py-8 lg:px-28 lg:py-16 rounded-lg shadow-md"
      >
        <div className="w-full lg:w-[100%] p-6">
          <p className="text-xl text-gray-800 text-left md:text-left font-semibold mb-4">
            Welcome to Innomatrics Technologies, where innovation meets
            excellence in the realm of digital solutions.
          </p>
          <p className="text-base text-gray-700 text-justify md:text-left mb-4">
            Founded on the belief that technology has the power to revolutionize
            businesses, Innomatrics Technologies emerged as a brainchild of
            visionary minds dedicated to driving meaningful change in the
            digital landscape. Since our inception, we have been on a mission to
            empower businesses of all sizes to thrive in the digital age.
          </p>
          <p className="text-base text-gray-700 text-justify md:text-left mb-4">
            We understand the unique challenges of the digital sphere and
            provide tailored solutions to meet your specific needs and
            objectives. Whether you're a startup or an established enterprise,
            our team of experts is dedicated to guiding you every step of the
            way.
          </p>
          <p className="text-base text-gray-700 text-justify md:text-left mb-4">
            With a passion for innovation and a commitment to excellence, we
            deliver cutting-edge solutions that exceed expectations. We
            prioritize collaboration, transparency, and results, building
            lasting partnerships that drive success and growth.
          </p>
        </div>
        <div className="w-full lg:w-full p-3">
          <img
            src={aboutMe}
            alt="About Us"
            className="w-[500px] h-[500px] rounded-lg"
          />
        </div>
      </div>

      {/* Vision */}
      <div className="missonVision">
        <div className="bg-inherit p-8">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl text-white font-semibold md:text-6xl text-center mb-8">
              Our Vision
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-orange-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={innovation}
                  alt="Empowering Innovation"
                  className="w-full rounded h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Empowering Innovation
                  </h3>
                  <p className="text-gray-700 text-sm">
                    At Innomatrics Technologies, we empower innovation by
                    providing cutting-edge tech solutions tailored to meet the
                    needs of our clients.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-blue-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={digiTransform}
                  alt="Driving Digital Transformation"
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Driving Digital Transformation
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Our mission is to drive digital transformation for
                    businesses by leveraging cutting-edge technologies.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-amber-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={quality}
                  alt="Delivering Excellence"
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Delivering Excellence
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We are committed to delivering excellence by providing
                    high-quality, reliable, and scalable tech solutions.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-red-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={growth}
                  alt="Enabling Growth"
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Enabling Growth
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Our mission is to enable growth for our clients by offering
                    innovative tech solutions that empower them to adapt and
                    evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-inherit p-8">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-semibold md:text-6xl text-white text-center mb-8">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-fuchsia-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={inno}
                  alt="Enhancing User Experience"
                  className="w-full rounded h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Enhancing User Experience
                  </h3>
                  <p className="text-gray-700 text-sm">
                    At Innomatrics Technologies, we empower innovation by
                    providing cutting-edge tech solutions tailored to meet the
                    needs of our clients.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-violet-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={digi}
                  alt="Ensuring Data Security"
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Ensuring Data Security
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Our mission is to drive digital transformation for
                    businesses by leveraging cutting-edge technologies.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-emerald-400 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={qlty}
                  alt="Continuous Learning"
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We are committed to delivering excellence by providing
                    high-quality, reliable, and scalable tech solutions.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:bg-lime-500 hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={grwth}
                  alt="Social Impact"
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
                  <p className="text-gray-700 text-sm">
                    Our mission is to enable growth for our clients by offering
                    innovative tech solutions that empower them to adapt and
                    evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row bg-gray-100 gap-x-10
       px-4 py-8 lg:px-28 lg:py-16 rounded-lg shadow-md"
      >
        <div className="w-full lg:w-[100%] p-6">
          <p className="text-xl text-orange-500 text-left md:text-left font-semibold mb-4">
            DIVERSITY, EQUITY & INCLUSION
          </p>
          <p className="text-base text-gray-700 text-justify md:text-left mb-4">
            At Innomatrics Technologies, we firmly believe that diversity,
            equity, and inclusion serve as vital catalysts for fostering
            collaboration and nurturing creativity. As a functionally operating
            company, we acknowledge the paramount importance of amplifying every
            voice and recognize the myriad ways in which diverse teams propel
            innovation.
          </p>
          <p className="text-base text-gray-700 text-justify md:text-left mb-4">
            Our mission is to cultivate a supportive and inclusive workplace
            environment where the exchange of diverse ideas, perspectives, and
            experiences isn't just accepted but actively encouraged. By
            empowering our workforce to embrace their authentic selves, we pave
            the way for collective growth and prosperity. We're proud to
            announce that our dedication to this cause has been acknowledged by
            the Top Employer Institute, recognizing Innomatrics Technologies as
            a Top Employer in India!
          </p>
          <p className="text-base text-gray-700 text-justify md:text-left mb-4">
            Integrity is fundamental to who we are. That’s why we are committed
            to treating everyone – from our customers to our colleagues – with
            dignity and respect, providing equal growth opportunities to our
            employees, and making space for continuous, honest, and transparent
            communication about diversity and inclusion.
          </p>
        </div>
        <div className="w-full lg:w-full p-3">
          <img
            src={aboutCorporate}
            alt="About Us"
            className="md:w-[700px] md:h-[400px] rounded-lg"
          />
        </div>
      </div>

      <div className="bg-inherit text-center py-8 lg:py-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          ALLIANCES & PARTNERS
        </h2>
        <p className="text-base lg:text-lg text-gray-700 mb-8">
          Bringing our clients the best through the power of partnerships
        </p>

        <h4
          className="text-center md:text-left text-2xl lg:text-2xl 
        mx-16 font-bold text-gray-800 mb-4"
        >
          OUR CLIENTS
        </h4>
        <div
          className="flex gap-5 justify-between py-4 mt-3 
        w-full max-w-[802px]
        mx-[10%] md:mx-[20%] 
         max-md:flex-wrap max-md:max-w-full"
        >
          <ClientsCarousel clientLogos={clientLogos} />
        </div>
      </div>
    </>
  );
});

export default About;
