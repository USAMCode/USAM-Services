import React, { useState } from "react";

const StandardisationAutomation = () => {
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
                  What is Standardization Automation?
                </div>
                <div className="text-[17px] font-sans">
                  Standardization Automation leverages advanced Autodesk tools
                  like Revit, Inventor, Civil 3D, Plant 3D, and Vault to
                  automate and enforce design standards across all your
                  projects. By setting up automated processes, we ensure that
                  your designs adhere to predefined templates, rules, and
                  guidelines, eliminating manual errors and enhancing
                  efficiency.
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
                  Elevate Your Design Consistency with Standardization
                  Automation
                </div>
                <div className="text-[17px] font-sans">
                  In the fast-paced world of AEC (Architecture, Engineering, and
                  Construction) and manufacturing, maintaining consistency
                  across projects can be a significant challenge. Variability in
                  design standards can lead to costly errors, inefficiencies,
                  and delays. Enter our Standardization Automation services –
                  your key to achieving seamless uniformity and precision in
                  every project.
                </div>
              </div>
              <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md">
                PICTURE
              </div>
            </div>
          </div>
          <div className="flex w-full border-2 border-primary rounded-tl-md"></div>
          {/* =========================================================================================================================================== */}

          <div className="bg-gray-100 p-8 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="p-4">
              <div className="flex justify-center font-bold text-3xl font-serif p-6">
                Why Choose Our Standardization Automation Services
              </div>
              <div className="flex flex-row justify-center p-12 gap-6">
                <div className="shadow-xl rounded-lg bg-white w-2/4 p-5">
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
                  <div className="text-center text-2xl font-serif p-6">
                    Consistency and Quality
                  </div>
                  <div className="text-[17px] font-sans text-center">
                    Ensure that all your designs meet the highest standards of
                    quality and consistency, regardless of project size or
                    complexity.
                  </div>
                </div>

                <div className=" shadow-xl rounded-lg bg-white w-2/4 p-5">
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
                  <div className="text-center text-2xl font-serif p-6">
                    Time Efficiency
                  </div>
                  <div className="text-[17px] font-sans text-center">
                    Automate repetitive tasks and reduce the time spent on
                    manual standardisation, freeing up your team to focus on
                    innovation and critical project tasks.
                  </div>
                </div>

                <div className=" shadow-xl rounded-lg bg-white w-2/4 p-5">
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
                  <div className="text-center text-2xl font-serif p-6">
                    Error Reduction
                  </div>
                  <div className="text-[17px] font-sans text-center">
                    Minimise the risk of human error with automated checks and
                    balances, ensuring accurate and reliable design outputs.
                  </div>
                </div>

                <div className=" shadow-xl rounded-lg bg-white w-2/4 p-5">
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
                  <div className="text-center text-2xl font-serif p-6">
                    Scalability
                  </div>
                  <div className="text-[17px] font-sans text-center">
                    Easily scale your operations and maintain consistent
                    standards across multiple projects and teams.
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
              How We Implement Standardization Automation
            </div>
            <div className="flex flex-row p-12 justify-around items-center">
              <div className="p-48 bg-white shadow-xl rounded-md">PICTURE</div>
              <div className="px-20 w-2/3 space-y-6">
                <div className="text-[17px] space-y-7">
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3">
                    <div className="text-xl font-semibold font-serif">
                      Template Creation
                    </div>
                    <div className="text-[17px] font-sans">
                      Develop and implement standardized templates for various
                      design elements, ensuring uniformity across all projects.
                    </div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3">
                    <div className="text-xl font-semibold font-serif">
                      Rules and Guidelines
                    </div>
                    <div className="text-[17px] font-sans">
                      Set up automated rules and guidelines within Autodesk
                      tools to enforce compliance with industry and company
                      standards.
                    </div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3">
                    <div className="text-xl font-semibold font-serif">
                      Continuous Monitoring
                    </div>
                    <div className="text-[17px] font-sans">
                      Use automated monitoring and reporting to ensure ongoing
                      adherence to standards and quickly identify any
                      deviations.
                    </div>
                  </div>
                </div>
                {/* <div className="text-[17px] font-bubble">Product Configuration involves setting up customizable templates and automation processes within Autodesk tools to quickly and accurately configure products based on specific client needs. This service streamlines the design process, reduces lead times, and ensures precision in every configuration.</div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-20 justify-center text-center items-center border-l-4 border-r-4 border-t-4 border-primary">
            <div className="flex text-black text-2xl">
              Transform your design process with our Standardization Automation
              services.<br/>Contact us today to learn how we can help you achieve
              unparalleled consistency and quality in your projects.
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

export default StandardisationAutomation;
