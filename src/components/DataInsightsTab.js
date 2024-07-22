import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "@/pages/services/DataInsights/Dashboard";
import DataIntegration from "@/pages/services/DataInsights/DataIntegration";
import DataManagement from "@/pages/services/DataInsights/DataManagement";
import Footer from "./footer";

const DataInsightsTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const tabContentRef = useRef(null);
  useEffect(() => {
    const handleIndicator = () => {
      const currentTab = tabRefs[activeTab].current;
      // indicatorRef.current.style.width = `${currentTab.offsetWidth}px`;
      // indicatorRef.current.style.left = `${currentTab.offsetLeft}px`;
    };

    handleIndicator();
    window.addEventListener("resize", handleIndicator);

    return () => {
      window.removeEventListener("resize", handleIndicator);
    };
  }, [activeTab]);

  useEffect(() => {
    tabContentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeTab]);

  return (
    <>
    <div className="w-full h-full pb-20 sm:px-0 xs:px-0">
        <div className="sm:w-full sm:mx-auto xs:w-full xs:mx-auto">
          <div className="fixed h-20 flex justify-center items-center top-0 left-0 w-full bg-white z-10 shadow-md">
            <div
              role="tablist"
              aria-label="tabs"
              className="relative w-[80%] h-full mx-auto md:w-[80%] sm:w-[90%] xs:w-full xs:grid-cols-3 xs:rounded-md sm:rounded-md xs:gap-2 sm: sm:grid-cols-3 xs:py-2 sm:p-2 md:p-2 md:rounded-md grid grid-cols-4 md:grid-cols-3 items-center px-[3px] overflow-hidden transition lg:px-0 lg:mx-auto lg:w-max lg:relative"
            >
              {/* <div ref={indicatorRef} className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full shadow-md"></div> */}
              {["Data Management ",
                "Data Integration",
                "Dashboard Visualization ",
               ].map((tab, index) => (
                <button
                  key={index}
                  ref={tabRefs[index]}
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls={`panel-${index}`}
                  id={`tab-${index}`}
                  tabIndex={activeTab === index ? 0 : -1}
                  className={`relative block 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base xs:text-sm h-full px-6 xs:px-0 tab md:rounded-md sm:rounded-md xs:rounded-md ${
                    activeTab === index ? 'text-black border-b-4 border-t-4 font-semibold border-t-first border-b-first' : 'text-gray-800'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span>{tab}</span>
                </button>
              ))}
            </div>
          </div>
          <div ref={tabContentRef} className="mt-6 relative top-14 rounded-3xl bg-white">
            <AnimatePresence mode='wait'>
            {[
              <DataManagement key="0" />,
              <DataIntegration key="1" />,
              <Dashboard key="2" />,
            ].map((Component, index) => (
              activeTab === index && (
              <motion.div
                key={index}
                role="tabpanel"
                id={`panel-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`tab-panel transition duration-300 ${
                  activeTab === index ? 'visible opacity-100' : 'absolute top-0 invisible opacity-0'
                }`}
              >
                {Component}
              </motion.div>
            )))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataInsightsTab;
