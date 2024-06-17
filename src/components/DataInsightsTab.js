import { useState, useRef, useEffect } from 'react';

import AECProjects from '@/pages/services/DataInsights/AECProjects';
import AutomationTraining from '@/pages/services/DataInsights/AutomationTraining';
import IndustryTraining from '@/pages/services/DataInsights/IndustryTraining';
import Visualization from '@/pages/services/DataInsights/Visualization';


const DataInsightsTab = () => {
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
          className="relative w-max mx-auto h-12 grid grid-cols-4 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div ref={indicatorRef} className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-primary shadow-md"></div>
          {['AEC Projects', 'Visualization Projects', 'Industry Ready Training', 'Automation Training'].map((tab, index) => (
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
        <div className="mt-6 relative rounded-3xl bg-white">
          {[
            <AECProjects key="0" />,
            <Visualization key="1" />,
            <IndustryTraining key="2" />,
            <AutomationTraining key="3" />
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

export default DataInsightsTab;
