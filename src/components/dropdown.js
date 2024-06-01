import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ShiftingDropDown = () => {
  return (
    <div className="flex w-full justify-start text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3  text-2xl transition-colors ${
        selected === tab ? " bg-primary text-neutral-100" : "text-[#3D52A0]"
      }`}
    >
      <span>{children}</span>
      {/* <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      /> */}
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute -left-64 top-[calc(100%_+_24px)] w-max bg-white rounded-lg p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl
       bg-white"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-12">
        <div className="text-secondary flex flex-col gap-4">
          <div className="mb-2 text-2xl font-medium">Automation</div>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Product Configuration
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Standardization Automation
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Workflow Enforcement
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Drawing Automation
          </a>
        </div>
        <div className="text-secondary flex flex-col gap-4">
          <div className="mb-2 text-2xl font-medium">Consulting</div>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            AEC Projects
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Visualization Projects
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Industry Ready Training
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Automation Training
          </a>
        </div>
        <div className="text-secondary flex flex-col gap-4">
          <div className="mb-2 text-2xl font-medium">Data & Insights</div>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Data Management
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Data Integration
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            IoT and Sensor Integration
          </a>
          <a href="#" className="block text-base hover:underline text-neutral-700 ">
            Custom Dashboards and Reports
          </a>
        </div>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Products",
    Component: Products,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
export default ShiftingDropDown;
