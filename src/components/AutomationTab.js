import { useState, useRef, useEffect } from 'react';

import ProductConfiguration from '@/pages/services/automation/ProductConfiguration';
import StandardisationAutomation from '@/pages/services/automation/StandardisationAutomation';
import WorkflowEnforcement from '@/pages/services/automation/WorkflowEnforcement';
import DrawingAutomation from '@/pages/services/automation/DrawingAutomation';

const AutomationTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorRef = useRef(null);
  const tabRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleIndicator = () => {
      const currentTab = tabRefs[activeTab].current;
      indicatorRef.current.style.width = `${currentTab.offsetWidth}px`;
      indicatorRef.current.style.left = `${currentTab.offsetLeft}px`;
    };

    handleIndicator();
    window.addEventListener('resize', handleIndicator);

    return () => {
      window.removeEventListener('resize', handleIndicator);
    };
  }, [activeTab]);

  return (
    <div className="w-full h-full px-8 sm:px-0">
      <div className="sm:w-7/12 sm:mx-auto p-5">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-max mx-auto h-12 grid grid-cols-4 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition lg:px-0 lg:mx-auto lg:w-max lg:relative"
        >
          <div ref={indicatorRef} className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-primary shadow-md"></div>
          {['Product Configuration', 'Standardisation Automation', 'Workflow Enforcement', 'Drawing Automation'].map((tab, index) => (
            <button
              key={index}
              ref={tabRefs[index]}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
              tabIndex={activeTab === index ? 0 : -1}
              className={`relative block h-10 px-6 tab rounded-full ${
                activeTab === index ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 relative rounded-3xl bg-white ">
          {[
            <ProductConfiguration key="0" />,
            <StandardisationAutomation key="1" />,
            <WorkflowEnforcement key="2" />,
            <DrawingAutomation key="3" />
          ].map((Component, index) => (
            <div
              key={index}
              role="tabpanel"
              id={`panel-${index}`}
              className={`tab-panel p-6 transition duration-300 ${
                activeTab === index ? 'visible opacity-100' : 'absolute top-0 invisible opacity-0'
              }`}
            >
              {Component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationTab;
