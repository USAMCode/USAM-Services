import React, { useState } from "react";
import ContactModal from "@/components/ContactModal";

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
        <div className="bg-white h-full xs:hidden w-[90%] mx-auto flex flex-col">

          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black border-l-4 p-20 md:p-5 sm:p-10 lg:px-5 lg:py-10 xl:p-10 border-l-primary">
            <div className="flex flex-row sm:flex-col sm:gap-6 justify-around items-center">
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/1.png"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-3/4 sm:w-full h-full"
                />
              </div>
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-6 ">
                <div className="font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-2xl font-serif">
                  What is Standardization Automation?
                </div>
                <div className="text-xl md:text-base sm:text-base lg:text-lg font-sans">
                  Standardization Automation leverages advanced Autodesk tools
                  like Revit, Inventor, Civil 3D, Plant 3D, and Vault to
                  automate and enforce design standards across all your
                  projects. By setting up automated processes, we ensure that
                  your designs adhere to predefined templates, rules, and
                  guidelines, eliminating manual errors and enhancing
                  efficiency.
                </div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
            </div>
          </div>
          <div className="flex w-full border-2 border-primary rounded-bl-md rounded-tr-md"></div>
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black p-20 sm:p-10 md:px-5 lg:py-10 lg:px-5 xl:p-10  border-r-4 border-r-primary">
            <div className="flex flex-row sm:flex-col-reverse sm:gap-6 md:gap-4 justify-around lg:justify-between items-center">
              <div className="h-full flex flex-col gap-6 w-full lg:w-4/6 xl:w-2/3">
                <div className="font-semibold text-3xl sm:text-2xl md:text-2xl md:w-full lg:text-2xl font-serif sm:w-full lg:w-[90%] w-[80%] m-auto ">
                Elevate Your Design Consistency with Standardization Automation
                </div>
                <div className="text-xl md:text-base sm:text-base lg:text-lg font-sans sm:w-full w-[80%] md:w-full lg:w-[90%] m-auto">
                  In the fast-paced world of AEC (Architecture, Engineering, and
                  Construction) and manufacturing, maintaining consistency
                  across projects can be a significant challenge. Variability in
                  design standards can lead to costly errors, inefficiencies,
                  and delays. Enter our Standardization Automation services –
                  your key to achieving seamless uniformity and precision in
                  every project.
                </div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
              <div className="w-full lg:w-2/6 xl:w-1/3 h-full flex justify-center items-center ">
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/1.png"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full border-2 border-primary"></div>
          {/* =========================================================================================================================================== */}

          <div className="bg-gray-100 p-10 sm:p-5 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="flex flex-col h-[70%] my-auto gap-10 py-16">
              <div className="flex justify-center font-bold text-3xl sm:text-2xl md:text-2xl font-serif ">Why Choose Our Standardization Automation Services</div>
              <div className="flex flex-row justify-center gap-6 lg:flex lg:flex-col md:flex md:flex-col xl:flex xl:flex-col sm:flex sm:flex-col w-[90%] m-auto ">
                <div className="flex flex-row gap-6 xl:items-center xl:justify-center ">

                  <div className="shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl md:text-xl font-serif font-semibold ">Consistency and Quality</div>
                    <div className="text-lg md:text-base font-sans text-center w-full">Ensure that all your designs meet the highest standards of
                    quality and consistency, regardless of project size or complexity.</div>
                  </div>

                  <div className=" shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5 ">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl md:text-xl font-serif font-semibold ">Time Efficiency</div>
                    <div className="text-lg md:text-base font-sans text-center w-full">Automate repetitive tasks and reduce the time spent on
                    manual standardisation, freeing up your team to focus on
                    innovation and critical project tasks.</div>
                  </div>
                </div>

                <div className="flex flex-row gap-6 xl:justify-center">
                  <div className=" shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl md:text-xl font-serif font-semibold">Error Reduction</div>
                    <div className="text-lg md:text-base font-sans text-center w-full">Minimise the risk of human error with automated checks and
                    balances, ensuring accurate and reliable design outputs.</div>
                  </div>

                  <div className=" shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif md:text-xl font-semibold">Scalability</div>
                    <div className="text-lg md:text-base font-sans text-center w-full">Easily scale your operations and maintain consistent
                    standards across multiple projects and teams.</div>
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

          <div className="bg-white text-black py-20 px-10 flex flex-col gap-12 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="font-semibold text-3xl sm:text-2xl md:text-2xl text-center font-serif h-[70%] my-auto">How We Implement Standardization Automation</div>
            <div className="flex flex-row gap-10 sm:gap-4 md:gap-4 justify-around items-center xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">
              {/* <div className="bg-white shadow-xl rounded-md xl:justify-center xl:items-center lg:justify-center lg:items-center">PICTURE</div> */}
              <div className=" flex w-2/4 sm:w-full md:w-full justify-center items-center ">
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/1.png"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-3/4 sm:w-full h-full"
                />
              </div>
              <div className=" w-2/4 xl:w-2/3 xl:justify-center xl:items-center xl:px-12 lg:w-full lg:justify-center lg:items-center md:w-full md:justify-center md:items-center md:p-8 md:px-8 sm:w-full sm:justify-center sm:items-center sm:p-8 sm:px-8  ">

                <div className="text-[17px] xl:justify-center xl:items-center w-full flex flex-col gap-5">
                  <div className="w-3/4 p-8 flex flex-col gap-5 rounded-md shadow-lg xl:w-full lg:w-full md:w-full sm:w-full " >
                    <div className="text-xl font-semibold font-serif">Template Creation</div>
                    <div className="text-[17px] font-sans">Develop and implement standardized templates for various
                    design elements, ensuring uniformity across all projects.</div>
                  </div>
                  <div className="w-3/4 p-8 flex flex-col gap-5 rounded-md shadow-lg xl:w-full lg:w-full md:w-full sm:w-full ">
                    <div className="text-xl font-semibold font-serif">Rules and Guidelines</div>
                    <div className="text-[17px] font-sans">Set up automated rules and guidelines within Autodesk
                      tools to enforce compliance with industry and company
                      standards.</div>
                  </div>
                  <div className="w-3/4 p-8 rounded-md flex flex-col gap-5 shadow-lg xl:w-full lg:w-full md:w-full sm:w-full">
                    <div className="text-xl font-semibold font-serif">Continuous Monitoring</div>
                    <div className="text-[17px] font-sans">Use automated monitoring and reporting to ensure ongoing
                      adherence to standards and quickly identify any
                      deviations.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-20 md:p-10 sm:p-10 justify-center text-center items-center border-l-4 border-r-4 border-t-4 border-primary">
            <div className="flex text-black text-2xl sm:text-lg md:text-xl">
              Transform your design process with our Standardization Automation
              services.<br/>Contact us today to learn how we can help you achieve
              unparalleled consistency and quality in your projects.
            </div>

          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex w-2/5 h-0 border-2  border-primary"></div>
            <button
              className="flex w-1/5 px-4 py-2 bg-primary relative text-center justify-center items-center text-5xl sm:text-xl lg:text-3xl md:text-2xl sm:-top-5 lg:-top-7 md:-top-6 -top-8 rounded-md"
              onClick={() => setShow(true)}
            >
              Contact Us
            </button>
            <div className="flex w-2/5 border-2 h-0 border-primary"></div>
          </div>
        </div>

        {/*  ==========================================DUPLICATe ==========================================*/}

        <div className="bg-white flex flex-col gap-10 w-full h-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden ">

          <div className="bg-white text-black w-full p-20 xs:p-5">
            <div className="flex flex-row xs:gap-4 p-8 justify-around items-center xs:w-full xs:flex xs:flex-col xs:p-0 xs:space-y-9  ">
              <img src="https://usam.s3.ap-south-1.amazonaws.com/1.png" alt="" className="w-full bg-white shadow-xl rounded-md" />
              <div className=" w-full xs:px-4 ">
                <div className="font-semibold text-2xl font-serif">What is Standardization Automation?</div>
                <div className="text-[15px] font-sans">
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

          {/* ==================================================================================================== */}

          <div className="bg-white text-black p-20  xs:p-5">
            <div className="flex flex-row xs:gap-8 xs:flex-col-reverse p-8 xs:p-5 justify-around items-center">
              <div className="px-20 w-2/3 xs:px-0 xs:w-full space-y-6 ">
                <div className="font-semibold xs:text-2xl font-serif">
                  Elevate Your Design Consistency with Standardization Automation
                </div>
                <div className="text-[15px] font-sans">
                  In the fast-paced world of AEC (Architecture, Engineering, and
                  Construction) and manufacturing, maintaining consistency
                  across projects can be a significant challenge. Variability in
                  design standards can lead to costly errors, inefficiencies,
                  and delays. Enter our Standardization Automation services –
                  your key to achieving seamless uniformity and precision in
                  every project.
                </div>
              </div>
              <img src="https://usam.s3.ap-south-1.amazonaws.com/1.png" alt="" className="w-full bg-white shadow-xl rounded-md md:p-16 sm:p-12" />
            </div>
          </div>
          {/* =========================================================================================================================================== */}

          <div className="bg-gray-100 w-[90%] mx-auto xs:p-5">
            <div className="p-4 xs:p-0">
              <div className="flex justify-center font-bold text-3xl font-serif p-6 xs:text-2xl xs:text-center ">Why Choose Our Standardization Automation Services</div>
              <div className="flex flex-row justify-center p-12 xs:p-6 gap-6 xs:flex xs:flex-col ">

                <div className="flex flex-row gap-6 xs:flex xs:flex-col ">
                  <div className="shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif p-6 xs:text-xl">Consistency and Quality</div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">Ensure that all your designs meet the highest standards of
                    quality and consistency, regardless of project size or complexity.</div>
                  </div>


                  <div className=" shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif p-6 xs:text-xl">Time Efficiency</div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">Automate repetitive tasks and reduce the time spent on
                    manual standardisation, freeing up your team to focus on
                    innovation and critical project tasks.</div>
                  </div>
                </div>


                <div className="flex flex-row gap-6 xl:justify-center xs:flex xs:flex-col">
                  <div className=" shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif p-6 xs:text-xl">Error Reduction</div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">Minimise the risk of human error with automated checks and
                    balances, ensuring accurate and reliable design outputs.</div>
                  </div>


                  <div className=" shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full">
                    <div className="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#6F4C5B" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif p-6 xs:text-xl">Scalability</div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">Easily scale your operations and maintain consistent
                    standards across multiple projects and teams.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================================================================================================= */}

          <div className="bg-white text-black p-20 xs:p-0">
            <div className="font-semibold text-3xl text-center p-8 font-serif xs:p-3">How We Implement Standardization Automation</div>
            <div className="flex flex-row p-12 justify-around items-center xs:flex xs:flex-col ">
              <img src="https://usam.s3.ap-south-1.amazonaws.com/1.png" alt="" className="w-full bg-white shadow-xl rounded-md md:p-16 sm:p-12" />
              <div className="px-20 w-2/3 xs:px-0 xs:w-full">

                <div className="text-[17px] flex flex-col gap-8 ">
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3 xs:w-full">
                    <div className="text-xl font-semibold font-serif">Template Creation</div>
                    <div className="text-[17px] font-sans">Develop and implement standardized templates for various
                    design elements, ensuring uniformity across all projects.</div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3 xs:w-full ">
                    <div className="text-xl font-semibold font-serif">Rules and Guidelines</div>
                    <div className="text-[17px] font-sans">Set up automated rules and guidelines within Autodesk
                      tools to enforce compliance with industry and company
                      standards.</div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3 xs:w-full ">
                    <div className="text-xl font-semibold font-serif">Continuous Monitoring</div>
                    <div className="text-[17px] font-sans">Use automated monitoring and reporting to ensure ongoing
                      adherence to standards and quickly identify any
                      deviations.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full p-5 justify-center text-center items-center">
            <div className="flex text-black text-xl">
            Transform your design process with our Standardization Automation
              services.<br/>Contact us today to learn how we can help you achieve
              unparalleled consistency and quality in your projects.
            </div>
            <button
              className="flex px-4 py-2 bg-primary relative text-center justify-center items-center text-2xl rounded-md"
              onClick={() => setShow(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {show && <ContactModal show={show} setShow={setShow} />}
    </>
  );
};

export default StandardisationAutomation;
