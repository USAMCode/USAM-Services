import React, { useState } from "react";
import ContactModal from "@/components/ContactModal";

const ProductConfiguration = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-8 relative w-full">
        <img
          src="https://usam.s3.ap-south-1.amazonaws.com/1.png"
          alt=""
          className="w-full h-[600px] object-cover"
        />
        <div className="bg-white w-[90%] mx-auto h-full">
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black p-20 lg:p-12 border-l-4 border-l-primary">
            <div className="flex flex-row p-8 justify-around items-center lg:space-x-12">
              <div className="p-28 bg-white shadow-xl rounded-md">PICTURE</div>
              <div className="px-20 w-2/3 space-y-6 lg:px-2 lg:w-3/4">
                <div className="font-semibold text-3xl font-serif">
                  What is Product Configuration?
                </div>
                <div className="text-[17px] font-sans">
                  Product Configuration involves setting up customizable
                  templates and automation processes within Autodesk tools to
                  quickly and accurately configure products based on specific
                  client needs. This service streamlines the design process,
                  reduces lead times, and ensures precision in every
                  configuration.
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full border-2 border-primary rounded-bl-md rounded-tr-md"></div>
          {/* ============================================================================================================================================ */}
          <div className="bg-white text-black p-20 lg:p-7 border-r-4 border-r-primary">
            <div className="flex flex-row p-8 justify-around items-center lg:space-x-8">
              <div className="px-20 w-2/3 space-y-6 lg:px-2 lg:w-3/4">
                <div className="font-semibold text-3xl font-serif">
                  Optimize Your Design Process with Advanced Product
                  Configuration
                </div>
                <div className="text-[17px] font-sans">
                  Configuring products to meet specific client needs can be
                  complex and time-consuming, especially in industries like AEC
                  and manufacturing. Our Product Configuration services simplify
                  this process, using Autodesk tools like Inventor, Revit, Civil
                  3D, and Plant 3D to create flexible and efficient
                  configurations that meet your exact requirements.
                </div>
              </div>
              <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md">
                PICTURE
              </div>
            </div>
          </div>
          <div className="flex w-full border-2 border-primary rounded-tl-md"></div>
          {/* =========================================================================================================================================== */}

          <div className="bg-gray-100 text-black p-8 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="p-4">
              <div className="flex justify-center font-bold text-3xl font-serif p-6">
                Why Choose Our Product Configuration Services
              </div>
              <div className="flex flex-row w-full justify-evenly p-12 gap-6">
                <div className="shadow-xl rounded-lg bg-white w-1/4 p-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="#6F4C5B"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-2xl font-serif p-6 w-full">
                    Customization
                  </div>
                  <div className="text-[17px] font-sans text-center w-[100%]">
                    Easily create customized product configurations that meet
                    the unique requirements of each project or client.
                  </div>
                </div>

                <div className=" shadow-xl rounded-lg bg-white w-1/4 p-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="#6F4C5B"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-2xl font-serif p-6 w-full">
                    Efficiency
                  </div>
                  <div className="text-[17px] font-sans text-center w-full">
                    Speed up the design process with automated configuration
                    tools, reducing lead times and increasing productivity.
                  </div>
                </div>

                <div className=" shadow-xl rounded-lg bg-white w-1/4 p-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="#6F4C5B"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-2xl font-serif p-6 w-full">
                    Accuracy
                  </div>
                  <div className="text-[17px] font-sans text-center w-full">
                    Ensure precise and error-free configurations with automated
                    checks and validations.
                  </div>
                </div>

                <div className=" shadow-xl rounded-lg bg-white w-1/4 p-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="#6F4C5B"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-2xl font-serif p-6 w-full">
                    Flexibility
                  </div>
                  <div className="text-[17px] font-sans text-center w-full">
                    Adapt quickly to changing client demands and project
                    requirements with flexible configuration options.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex w-2/5 border-2 border-primary rounded-r-full"></div>
            <div className="flex w-1/5 border-none "></div>
            <div className="flex w-2/5 border-2 border-primary rounded-l-full"></div>
          </div>
          {/* ========================================================================================================================================= */}

          <div className="bg-white text-black p-20 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="font-semibold text-3xl text-center p-8 font-serif">
              How We Implement Product Configuration
            </div>
            <div className="flex flex-row p-12 justify-around items-center">
              <div className="p-48 bg-white shadow-xl rounded-md">PICTURE</div>
              <div className="px-20 w-2/3 space-y-6">
                <div className="text-[17px] w-full space-y-7">
                  <div className="w-full p-5 rounded-md shadow-lg space-y-3">
                    <div className="text-xl font-semibold font-serif">
                      Template Development
                    </div>
                    <div className="text-[17px] w-full font-sans">
                      Create customizable templates within Autodesk tools to
                      streamline the configuration process.
                    </div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3">
                    <div className="text-xl font-semibold font-serif">
                      Automation Tools
                    </div>
                    <div className="text-[17px] font-sans">
                      {" "}
                      Set up automation tools to handle repetitive tasks and
                      ensure accurate configurations.
                    </div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3">
                    <div className="text-xl font-semibold font-serif">
                      Integration
                    </div>
                    <div className="text-[17px] font-sans">
                      Integrate configuration tools with other systems (e.g.,
                      ERP, CRM) to provide a seamless workflow from design to
                      production.
                    </div>
                  </div>
                </div>
                {/* <div className="text-[17px] font-bubble">Product Configuration involves setting up customizable templates and automation processes within Autodesk tools to quickly and accurately configure products based on specific client needs. This service streamlines the design process, reduces lead times, and ensures precision in every configuration.</div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-20 justify-center text-center items-center border-l-4 border-r-4 border-t-4 border-primary">
            <div className="flex text-black text-2xl">
              Enhance your design capabilities with our Product Configuration
              services.<br/> Contact us today to learn how we can help you create
              precise and efficient configurations tailored to your needs.
            </div>
        
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex w-2/5 h-0 border-2  border-primary"></div>
            <button
              className="flex w-1/5 px-4 py-2 bg-primary relative text-center justify-center items-center text-5xl -top-8 rounded-md"
              onClick={() => setShow(true)}
            >
              Contact Us
            </button>
            <div className="flex w-2/5 border-2 h-0 border-primary"></div>
          </div>
        </div>
      </div>
      {show && <ContactModal show={show} setShow={setShow} />}
    </>
  );
};

export default ProductConfiguration;
