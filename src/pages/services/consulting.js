// import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ConsultingTab from "@/components/ConsultingTab";
const ConsultingSample = () => {
  return (
    <>
      <div className="h-full w-full items-center bg-white">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        <ConsultingTab />
      </div>
    </>
  );
}

export default ConsultingSample;
