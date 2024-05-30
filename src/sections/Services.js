import SectionWrapper from "@/section/SectionWrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Services = () => {
  return (
    <>
      <div className="bg-quaternary justify-center items-center text-center px-4 py-10">
        <div>
          <div className="text-6xl font-bold text-black">Our Services</div>
        </div>
        <div className="flex flex-row w-[95%] m-auto justify-around text-lg text-black p-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            {/* <img
              src="/images/api.jpg"
              alt="Picture of the author"
              className="object-contain bg-fixed w-[500px] rounded-lg"
            /> */}
            <div className="h-72 rounded-xl w-96 bg-white"></div>
            <div className="flex flex-col w-96">
              <div className="font-semibold text-3xl">Automation</div>
              <div className="font-light">
                Unlock innovation and creativity and achieve outcomes faster
                with automation.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-72 rounded-xl w-96 bg-white"></div>
            {/* <img
              src="/images/customer-service-hotline-operators-consult-customers-call-center-modern-vector-flat-illustration_720185-107.avif"
              alt="Picture of the author"
              className="object-contain w-[500px] bg-fixed rounded-lg"
            /> */}
            <div className="flex flex-col w-96">
              <div className="font-semibold text-3xl">Consulting</div>
              <div className="font-light w-">
                Guiding Your Project Towards Success: Expert Consulting Every
                Step of the Way.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-72 rounded-xl w-96 bg-white"></div>
            {/* <img
              src="/images/meeting-strategy-marketing-analytic_18660-1060.avif"
              alt="Picture of the author"
              className="object-contain w-[500px] bg-fixed rounded-lg"
            /> */}
            <div className="flex flex-col w-96">
              <div className="font-semibold text-3xl">Data & Insights</div>
              <div className="font-light">
                The right people get the right information at the right time
                with connected data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Services, "Services");
